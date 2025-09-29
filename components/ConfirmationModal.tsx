import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Lock, Shield, Instagram, Heart, Eye } from "lucide-react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  userInput: string;
  packageName: string;
  quantity: string;
  price: string;
  checkoutUrl: string;
  serviceType: 'followers' | 'likes' | 'views';
}

const ConfirmationModal = ({ 
  isOpen, 
  onClose, 
  userInput, 
  packageName, 
  quantity, 
  price, 
  checkoutUrl,
  serviceType 
}: ConfirmationModalProps) => {
  const handleFinalizePurchase = () => {
    window.open(checkoutUrl, '_blank');
    onClose();
  };

  const getServiceInfo = () => {
    switch (serviceType) {
      case 'followers':
        return {
          title: 'Perfil Verificado com sucesso!',
          subtitle: 'Seu perfil está pronto para receber seguidores.',
          icon: <Instagram className="w-5 h-5 text-black" />,
          displayText: `${quantity} Seguidores`,
          inputLabel: `@ ${userInput}`
        };
      case 'likes':
        return {
          title: 'Post Verificado com sucesso!',
          subtitle: 'Seu post está pronto para receber curtidas.',
          icon: <Heart className="w-5 h-5" />,
          displayText: `${quantity} Curtidas`,
          inputLabel: userInput
        };
      case 'views':
        return {
          title: 'Post Verificado com sucesso!',
          subtitle: 'Seu post está pronto para receber visualizações.',
          icon: <Eye className="w-5 h-5" />,
          displayText: `${quantity} Visualizações`,
          inputLabel: userInput
        };
      default:
        return {
          title: 'Verificado com sucesso!',
          subtitle: 'Tudo pronto!',
          icon: <Shield className="w-5 h-5" />,
          displayText: quantity,
          inputLabel: userInput
        };
    }
  };

  const serviceInfo = getServiceInfo();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-w-[90vw] w-full rounded-2xl p-4 sm:p-6 max-h-[85vh] overflow-y-auto mx-auto">
        <DialogHeader className="text-center space-y-3 pb-2">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <DialogTitle className="text-lg sm:text-xl font-bold text-green-600 text-center leading-tight">
            {serviceInfo.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-4 flex flex-col items-center pt-2">
          <p className="text-muted-foreground text-sm px-2 leading-relaxed">
            {serviceInfo.subtitle}
          </p>
          
          <div className="bg-muted p-3 rounded-lg w-full max-w-xs">
            <p className="font-semibold text-sm break-words text-center">
              {serviceInfo.inputLabel}
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-black bg-gray-50 px-4 py-2 rounded-lg">
            {serviceInfo.icon}
            <span className="font-semibold text-sm sm:text-base">{serviceInfo.displayText}</span>
          </div>
          
          <div className="space-y-1 py-2">
            <p className="text-2xl sm:text-3xl font-bold text-black">{price}</p>
            <p className="text-xs sm:text-sm text-muted-foreground">{packageName}</p>
          </div>
          
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-1">
              <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Dados Confidenciais</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Compra Protegida</span>
            </div>
          </div>
          
          <Button 
            onClick={handleFinalizePurchase}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-base sm:text-lg transition-all duration-200 hover:scale-105 transform active:scale-95 mt-4 rounded-lg"
          >
            FINALIZAR COMPRA
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;