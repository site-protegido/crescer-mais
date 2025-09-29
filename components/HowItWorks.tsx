import { ShoppingCart, User, Rocket } from "lucide-react";
const steps = [{
  number: "1",
  icon: ShoppingCart,
  title: "Escolha o seu pacote de seguidores",
  description: "Escolha o pacote de seguidores no Instagram que mais se adequa a você."
}, {
  number: "2",
  icon: User,
  title: "Insira seu @usuário do Instagram e conclua o pedido",
  description: "Digite seu nome de usuário (nunca solicitaremos sua senha) e faça o pagamento via PIX."
}, {
  number: "3",
  icon: Rocket,
  title: "Veja o seu Instagram decolar!",
  description: "Relaxe na poltrona e observe seus novos seguidores chegando automaticamente ao seu perfil. É fácil assim 🚀"
}];
const HowItWorks = () => {
  return <section id="features" className="bg-white py-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Como comprar seguidores passo a passo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja abaixo como é simples, rápido e prático.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
          const Icon = step.icon;
          return <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-foreground font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default HowItWorks;