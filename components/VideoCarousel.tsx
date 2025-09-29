import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const videos = [
  'https://i.imgur.com/oPJkqyF.mp4#t=0.1',
  'https://i.imgur.com/qBpXXSg.mp4#t=0.1', 
  'https://i.imgur.com/JE8uyHX.mp4#t=0.1',
  'https://i.imgur.com/2f0BRA0.mp4#t=0.1',
  'https://i.imgur.com/OQFiRZW.mp4#t=0.1',
  'https://i.imgur.com/Vd2c6We.mp4#t=0.1',
  'https://i.imgur.com/iYIEUAg.mp4#t=0.1'
];

const VideoCarousel = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handleVideoPlay = (index: number, videoElement: HTMLVideoElement) => {
    // Pause all other videos
    const allVideos = document.querySelectorAll('.video-player');
    allVideos.forEach((video, i) => {
      if (i !== index && video instanceof HTMLVideoElement) {
        video.pause();
      }
    });
    
    setPlayingVideo(index);
    videoElement.play();
  };

  const handleVideoPause = (index: number, videoElement: HTMLVideoElement) => {
    setPlayingVideo(null);
    videoElement.pause();
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Veja os resultados reais
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos clientes que já conquistaram milhares de seguidores
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Navigation, Pagination]}
            className="video-swiper"
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            cardsEffect={{
              perSlideOffset: 8,
              perSlideRotate: 15,
              slideShadows: true,
            }}
            style={{
              width: '300px',
              height: '400px',
            }}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index} className="bg-card rounded-2xl overflow-hidden shadow-elegant">
                <div className="relative w-full h-full">
                  <video
                    src={video}
                    className="video-player w-full h-full object-cover"
                    playsInline
                    loop
                    preload="metadata"
                  />
                  <div 
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      playingVideo === index ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        const videoElement = e.currentTarget.parentElement?.parentElement?.querySelector('.video-player') as HTMLVideoElement;
                        if (videoElement) {
                          if (playingVideo === index) {
                            handleVideoPause(index, videoElement);
                          } else {
                            handleVideoPlay(index, videoElement);
                          }
                        }
                      }}
                      className="play-button bg-primary/80 hover:bg-primary rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-glow"
                    >
                      <PlayCircle className="w-12 h-12 text-white" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background border border-border rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg">
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background border border-border rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg">
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>

    </section>
  );
};

export default VideoCarousel;