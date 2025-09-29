import { Button } from "@/components/ui/button";
import rocketLogo from "@/assets/rocket-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src={rocketLogo} 
            alt="Acelerando Logo" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-white">Acelerando</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#pricing" className="text-white/90 hover:text-white transition-colors">
            Preços
          </a>
          <a href="#features" className="text-white/90 hover:text-white transition-colors">
            Recursos
          </a>
          <a href="#testimonials" className="text-white/90 hover:text-white transition-colors">
            Depoimentos
          </a>
          <a href="#faq" className="text-white/90 hover:text-white transition-colors">
            FAQ
          </a>
        </nav>
        
        <Button 
          variant="secondary" 
          size="sm" 
          className="bg-white/20 border-white/30 text-white hover:bg-white/30"
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Começar Agora
        </Button>
      </div>
    </header>
  );
};

export default Header;