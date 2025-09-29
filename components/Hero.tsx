import { Button } from "@/components/ui/button";
import { Instagram, Rocket, Users } from "lucide-react";
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/80 to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Rocket className="w-12 h-12 mr-4 text-white" />
          <h1 className="text-5xl md:text-7xl font-bold">
            ACELERE SEU
            <span className="block text-accent">INSTAGRAM</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Ganhe milhares de seguidores, curtidas e visualizações reais e engajados. 
          Resultados garantidos em 24h!
        </p>
        
        <div className="flex justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-4 text-lg">
            <Users className="w-5 h-5 mr-2" />
            COMEÇAR AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;