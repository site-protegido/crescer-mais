import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";

const testimonials = [
  {
    name: "Maria Silva",
    username: "@maria_fitness",
    rating: 5,
    comment: "Incrível! Meus seguidores chegaram em menos de 30 minutos. Todos brasileiros e engajados. Recomendo!",
    followers: "2.5k seguidores",
    image: testimonial1,
  },
  {
    name: "João Santos",
    username: "@joao_empreendedor",
    rating: 5,
    comment: "Serviço fantástico! Meu perfil cresceu muito e consegui mais clientes para meu negócio. Vale cada centavo!",
    followers: "5k seguidores",
    image: testimonial2,
  },
  {
    name: "Ana Costa",
    username: "@ana_lifestyle",
    rating: 5,
    comment: "Muito confiável! Já comprei 3 vezes e sempre entrega o que promete. Seguidores reais e brasileiros.",
    followers: "10k seguidores",
    image: testimonial3,
  },
  {
    name: "Carlos Oliveira",
    username: "@carlos_tech",
    rating: 5,
    comment: "Excelente atendimento e entrega super rápida. Meu Instagram nunca cresceu tanto! Super recomendo!",
    followers: "7.2k seguidores",
    image: testimonial4,
  },
  {
    name: "Luciana Mendes",
    username: "@lu_beauty",  
    rating: 5,
    comment: "Perfeito! Seguidores de qualidade, brasileiros e que realmente interagem. Vou comprar mais!",
    followers: "15k seguidores",
    image: testimonial5,
  },
  {
    name: "Ricardo Lima",
    username: "@ricardo_fit",
    rating: 5,
    comment: "Impressionante a qualidade dos seguidores! Todos brasileiros e engajados. Serviço de primeira!",
    followers: "8.7k seguidores",
    image: testimonial6,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milhares de clientes satisfeitos já fizeram seus perfis crescerem conosco
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-2 border-border hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-primary">{testimonial.username}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.followers}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-green-600 text-green-600" />
            <span className="font-semibold">4.9/5 estrelas</span>
            <span className="text-green-600">• Mais de 10.000 clientes satisfeitos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;