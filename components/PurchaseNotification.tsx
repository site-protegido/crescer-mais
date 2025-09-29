import { useState, useEffect } from "react";
import { Instagram, MapPin } from "lucide-react";

interface PurchaseData {
  name: string;
  product: string;
  location: string;
  timeAgo: string;
}

const PurchaseNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState<PurchaseData | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [startX, setStartX] = useState(0);

  const purchases: PurchaseData[] = [
    {
      name: "Pierre Lima",
      product: "Comprado: 10.000 visualizações",
      location: "Toulouse - França",
      timeAgo: "agora mesmo"
    },
    {
      name: "Carlos Silva",
      product: "Comprado: 5000 seguidores",
      location: "Rio de Janeiro - RJ",
      timeAgo: "há 2 minutos"
    },
    {
      name: "Maria Santos",
      product: "Comprado: 1000 curtidas",
      location: "Belo Horizonte - MG",
      timeAgo: "há 1 minuto"
    },
    {
      name: "Ana Costa",
      product: "Comprado: 3000 seguidores",
      location: "Salvador - BA",
      timeAgo: "há 3 minutos"
    },
    {
      name: "João Oliveira",
      product: "Comprado: 1500 seguidores",
      location: "Fortaleza - CE",
      timeAgo: "há 1 minuto"
    },
    {
      name: "Lucia Fernandes",
      product: "Comprado: 2500 curtidas",
      location: "Porto Alegre - RS",
      timeAgo: "agora mesmo"
    },
    {
      name: "Ricardo Souza",
      product: "Comprado: 7500 visualizações",
      location: "Curitiba - PR",
      timeAgo: "há 2 minutos"
    }
  ];

  const getRandomPurchase = (): PurchaseData => {
    const randomIndex = Math.floor(Math.random() * purchases.length);
    return purchases[randomIndex];
  };

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const newDragX = clientX - startX;
    setDragX(newDragX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Se arrastou mais de 100px para a direita, fecha o popup
    if (dragX > 100) {
      setIsVisible(false);
      setDragX(0);
    } else {
      // Volta para a posição original
      setDragX(0);
    }
  };

  const playNotificationSound = () => {
    // Create audio context for notification sound
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Create a pleasant notification sound (like a gentle bell)
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  const showNotification = () => {
    const purchase = getRandomPurchase();
    setCurrentPurchase(purchase);
    setIsVisible(true);
    setDragX(0); // Reset drag position
    
    // Play notification sound
    playNotificationSound();

    // Hide after 4 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  };

  useEffect(() => {
    // Show first notification after 5 seconds
    const initialTimer = setTimeout(() => {
      showNotification();
    }, 5000);

    // Then show every 22 seconds
    const interval = setInterval(() => {
      showNotification();
    }, 22000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!currentPurchase) return null;

  return (
    <div className={`fixed top-6 left-6 z-50 transition-all duration-500 ease-in-out transform ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    } max-w-[280px] sm:max-w-sm`}>
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-sm animate-pulse-glow cursor-grab active:cursor-grabbing select-none"
        style={{
          transform: `translateX(${dragX}px)`,
          opacity: dragX > 50 ? Math.max(0.3, 1 - dragX / 200) : 1,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out, opacity 0.3s ease-out'
        }}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <Instagram className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                COMPRA FEITA
              </span>
            </div>
            
            <h4 className="text-base font-bold text-gray-900 mb-1">
              {currentPurchase.name}
            </h4>
            
            <p className="text-sm text-gray-600 mb-2">
              {currentPurchase.product}
            </p>
            
            <div className="flex items-center text-xs text-gray-500 space-x-3">
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{currentPurchase.location}</span>
              </div>
              <span>{currentPurchase.timeAgo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotification;