import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WhatsAppModal from "@/components/WhatsAppModal";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "Os seguidores são reais?",
      answer: "Sim! Todos os nossos seguidores são contas reais e ativas, 100% brasileiros. Não trabalhamos com bots ou contas falsas."
    },
    {
      question: "Em quanto tempo recebo os seguidores?",
      answer: "O processo de entrega começa imediatamente após a confirmação do pagamento e pode levar de 30 minutos a 24 horas para ser concluído, dependendo da quantidade escolhida."
    },
    {
      question: "É seguro comprar seguidores?",
      answer: "Completamente seguro! Nosso método não viola os termos do Instagram e não compromete sua conta. Usamos apenas estratégias orgânicas e seguras."
    },
    {
      question: "Posso perder os seguidores depois?",
      answer: "Nossos seguidores são permanentes. Oferecemos garantia de 30 dias e reposição gratuita caso haja alguma queda natural."
    },
    {
      question: "Preciso fornecer minha senha?",
      answer: "Nunca! Precisamos apenas do seu nome de usuário (username) do Instagram. Nunca solicitamos senhas ou dados pessoais."
    },
    {
      question: "Qual é a forma de pagamento?",
      answer: "Aceitamos PIX, cartão de crédito, débito e todas as principais formas de pagamento. O processo é 100% seguro e protegido."
    },
    {
      question: "Oferecem suporte?",
      answer: "Sim! Temos atendimento 24/7 via WhatsApp e email. Nossa equipe está sempre pronta para ajudar você."
    },
    {
      question: "Posso comprar curtidas e visualizações também?",
      answer: "Claro! Além de seguidores, oferecemos curtidas e visualizações para seus posts e stories. Tudo com a mesma qualidade e segurança."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire todas as suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <WhatsAppModal>
            <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full">
              Falar no WhatsApp
            </Button>
          </WhatsAppModal>
        </div>
      </div>
    </section>
  );
};

export default FAQ;