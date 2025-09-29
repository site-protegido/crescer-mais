import { Users, TrendingUp, Award, Zap } from "lucide-react";
const WhyFollowers = () => {
  const benefits = [{
    icon: Award,
    title: "Credibilidade",
    description: "Ter muitos seguidores pode ajudar a aumentar a credibilidade e autoridade da sua marca ou conta, especialmente se esses seguidores são ativos e engajados."
  }, {
    icon: TrendingUp,
    title: "Lealdade",
    description: "Seguidores engajados criam uma base leal que acompanha seu conteúdo consistentemente."
  }, {
    icon: Users,
    title: "Responsabilidade",
    description: "Mais seguidores demonstram responsabilidade e comprometimento com sua presença online."
  }, {
    icon: Zap,
    title: "Criatividade",
    description: "Uma audiência maior estimula a criatividade e inovação no seu conteúdo."
  }];
  return <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-[80px]">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            É Importante Ter{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SEGUIDORES!
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra por que ter seguidores é fundamental para o sucesso da sua presença digital
          </p>
        </div>

        {/* Accelerating Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 mb-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-white">
              ACELERANDO
            </h3>
            <p className="text-lg text-white/90">
              Seu crescimento nas redes sociais com estratégias eficazes
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>;
        })}
        </div>

        {/* Importance Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              A IMPORTÂNCIA DOS SEGUIDORES
            </h3>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Credibilidade
              </h4>
              <p className="text-lg text-foreground/90 leading-relaxed">Ter muitos seguidores pode ajudar a aumentar a credibilidade e autoridade da sua marca ou conta, especialmente se esses seguidores são ativos e engajados.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyFollowers;