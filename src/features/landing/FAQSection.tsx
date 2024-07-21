import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Section } from "./Section";
  
  const FAQS: { question: string; answer: string }[] = [
    {
      question: "Comment puis-je m'inscrire sur Co-Sport ?",
      answer:
        "Vous pouvez vous inscrire en cliquant sur le bouton 'Inscription' en haut à droite de la page d'accueil.",
    },
    {
      question: "Quels types de partenaires d'entraînement puis-je trouver sur Co-Sport ?",
      answer:
        "Vous pouvez trouver des partenaires pour divers types d'activités sportives comme la course à pied, le yoga, la musculation, le vélo, et",
    },
    {
      question: "Est-ce que l'inscription est gratuite ?",
      answer:
        "Oui, l'inscription est gratuite avec notre plan Starter.",
    },
    {
      question:
        "Comment les avis sont-ils vérifiés ?",
      answer:
        "Les avis sont vérifiés par notre équipe pour s'assurer qu'ils sont authentiques et utiles..",
    },
    {
      question: "Puis-je changer de partenaire d'entraînement si je ne suis pas satisfait ?",
      answer:
        "Oui, vous pouvez changer de partenaire à tout moment.",
    },
    {
      question: "Quels sont les avantages du plan Premium ?",
      answer:
        "Le plan Premium offre des fonctionnalités avancées comme la création illimitée de produits et la personnalisation de votre page d'avis.",
    },
    {
      question:
        "Comment puis-je contacter le support client ?",
      answer:
        "Vous pouvez nous contacter via le formulaire de contact disponible sur notre site.",
    },
    {
      question: "Les avis sont-ils anonymes ?",
      answer:
        "Vous pouvez choisir de laisser un avis anonyme ou de vous identifier.",
    },
    {
      question: "Puis-je laisser plusieurs avis ?",
      answer:
        "Oui, vous pouvez laisser un avis pour chaque partenaire d'entraînement que vous avez rencontré.",
    },
    {
      question: "Comment puis-je annuler mon abonnement ?",
      answer:
        "Vous pouvez annuler votre abonnement à tout moment via les paramètres de votre compte.",
    },
  ];
  
  export const FAQSection = () => {
    return (
      <Section className="flex w-full flex-row items-start gap-4 max-lg:flex-col max-lg:items-center">
        <div className="flex-1 max-lg:text-center">
          <h2 className="text-xl font-bold text-primary">FAQ</h2>
          <h2 className="text-3xl font-bold">FAQ</h2>
        </div>
        <div className="w-full max-w-lg flex-1 text-left">
          <Accordion type="multiple">
            {FAQS.map((faq, index) => (
              <AccordionItem
                value={faq.question}
                key={faq.question}
                className="text-left"
              >
                <AccordionTrigger>
                  <span className="text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    );
  };