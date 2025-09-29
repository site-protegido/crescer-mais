import { Users, TrendingUp, Clock, Instagram, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const VideoSection = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const videoId = "teQ7ELgNws4"; // https://youtu.be/teQ7ELgNws4
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const benefits = [{
    icon: Users,
    title: "Seguidores reais e ativos",
    description: "100% brasileiros e engajados"
  }, {
    icon: TrendingUp,
    title: "Engajamento garantido",
    description: "Aumente suas curtidas e comentários"
  }, {
    icon: Clock,
    title: "Resultados em 5 minutos",
    description: "Entrega imediata após pagamento"
  }];
  const handlePlayVideo = () => {
    setShowOverlay(false);
  };
  return <section className="py-20 relative overflow-hidden video-section" style={{
    background: 'linear-gradient(135deg, #e91e63, #9c27b0, #673ab7)'
  }}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 my-[29px]">
            Veja o método em ação
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Descubra como nossos clientes conquistaram milhares de seguidores reais
            e transformaram seus perfis em verdadeiros imãs de engajamento
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-3xl overflow-hidden" style={{
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
            <div className="aspect-video relative">
              <iframe src={showOverlay ? "" : `https://www.youtube.com/embed/teQ7ELgNws4?autoplay=1&modestbranding=1&rel=0&showinfo=0&fs=0&disablekb=1`} title="Veja o método em ação" className="w-full h-full rounded-3xl" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{
              pointerEvents: showOverlay ? 'none' : 'auto'
            }}></iframe>
              
              {/* Custom Thumbnail Overlay */}
              {showOverlay && <div className="absolute inset-0 cursor-pointer group" onClick={handlePlayVideo}>
                  <img src={thumbnailUrl} alt="Video thumbnail" className="w-full h-full object-cover rounded-3xl" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-3xl group-hover:bg-black/40 transition-all duration-300">
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-12 h-12 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">▶ Clique para assistir</p>
                  </div>
                </div>}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mb-12">
          <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({
          behavior: 'smooth'
        })} className="text-primary text-xl rounded-full font-bold shadow-glow animate-pulse-glow px-[29px] py-[25px] bg-white">
            <Instagram className="mr-3 w-6 h-6" />
            COMPRAR SEGUIDORES
          </Button>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => <div key={index} className="p-6 rounded-2xl transition-all duration-300" style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{
            background: 'rgba(255, 255, 255, 0.2)'
          }}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/70 text-sm">
                {benefit.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default VideoSection;