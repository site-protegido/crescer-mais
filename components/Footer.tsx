import { Instagram, Shield, Clock, Users } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gradient-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold">Acelerando</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              A forma mais segura e eficaz de fazer seu Instagram crescer com seguidores, curtidas e visualizações 100% reais e brasileiros.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Garantias</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                100% Seguro
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Entrega Imediata
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Seguidores Reais
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-white/80">
              <li>Atendimento 24/7</li>
              <li>FAQ</li>
              <li>Política de Reembolso</li>
              <li>Termos de Uso</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-white/80">
              <p>contato@acelerando.com</p>
              <p>WhatsApp: (11) 94175-9410</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.instagram.com/_acelerando___" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; 2024 Acelerando. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;