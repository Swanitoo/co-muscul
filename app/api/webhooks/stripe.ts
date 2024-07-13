import { env } from "@/env";
import { prisma } from "@/prisma";
import { stripe } from "@/stripe";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (req: NextRequest) => {
    const body = await req.json();

    const stripeSignature = req.headers.get("stripe-signature");

    if (!stripeSignature)  {
        return NextResponse.json({ error: "No stripe signature" }, { status: 400});
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            stripeSignature,
            env.STRIPE_WEBHOOK_SECRET,
        );
    } catch (err) {
        return NextResponse.json({ error: "Invalid stripe signature" }, { status: 400});
    }

    switch (event.type) {
        case "checkout.session.completed": {
            const session = event.data.object as Stripe.Checkout.Session;
            
            const priceId = session.line_items?.data[0].price?.id
            
            if(!priceId) {
                return NextResponse.json({ error: "Product not found" }, { status: 404 });
            }
            
            if (priceId === "price_1Pb5szAm3RaoXc2D0JSzw1yS" || priceId === "prod_price_id") {
                const customerId = session.customer as string;
            
                const user = await prisma.user.findFirst({
                    where: {
                        stripeCustomerId: customerId,
                    },
                });
    
                if (!user) {
                    return NextResponse.json({ error: "User not found" }, {status: 404});
                }
    
                await prisma.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        plan: "PREMIUM",
                    },
                });
            }

            break;
        }
        default: {
            console.log("Unhandled event", event);
        }
    }
    return NextResponse.json({ reveived: true });
};