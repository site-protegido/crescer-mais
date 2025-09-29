import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle } from "lucide-react";

interface WhatsAppModalProps {
  children: React.ReactNode;
}

const WhatsAppModal = ({ children }: WhatsAppModalProps) => {
  const [instagramHandle, setInstagramHandle] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSendWhatsApp = () => {
    if (!instagramHandle || !serviceType) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const message = `Olá! Gostaria de solicitar:\n\n📱 Instagram: @${instagramHandle}\n🎯 Serviço: ${serviceType}\n\nPor favor, me ajude com mais informações sobre os pacotes disponíveis.`;
    
    const whatsappUrl = `https://wa.me/5511941759410?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setInstagramHandle("");
    setServiceType("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-green-600" />
            Falar no WhatsApp
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="instagram">Seu Instagram (sem @)</Label>
            <Input
              id="instagram"
              placeholder="ex: meuinstagram"
              value={instagramHandle}
              onChange={(e) => setInstagramHandle(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="service">O que você deseja?</Label>
            <Select value={serviceType} onValueChange={setServiceType}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o serviço" />
              </SelectTrigger>
              <SelectContent className="z-[9999] bg-background border shadow-lg relative"
                            sideOffset={5}
                            position="popper"
                          >
                <SelectItem value="Seguidores">Seguidores</SelectItem>
                <SelectItem value="Curtidas">Curtidas</SelectItem>
                <SelectItem value="Visualizações">Visualizações</SelectItem>
                <SelectItem value="SUPORTE">SUPORTE</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button 
          onClick={handleSendWhatsApp}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Enviar para WhatsApp
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppModal;