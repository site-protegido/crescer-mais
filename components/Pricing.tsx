import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Star, Instagram, TrendingUp, Heart, Eye } from "lucide-react";
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const followersPlans = [
  {
    name: "Iniciante",
    price: "R$ 9,90",
    oldPrice: "R$ 19,90",
    followers: "1.000",
    discount: "50%",
    checkoutUrl: "https://pay.sunize.com.br/OpCApqkv",
    features: [
      "100% Brasileiros",
      "Entrega imediata",
      "Garantia de reposição",
      "Não precisa informar senha",
      "Segurança garantida"
    ],
    popular: false,
  },
  {
    name: "Básico",
    price: "R$ 14,90",
    oldPrice: "R$ 29,90",
    followers: "2.000",
    discount: "50%",
    checkoutUrl: "https://pay.sunize.com.br/WtYuYJZg",
    features: [
      "100% Brasileiros",
      "Entrega imediata",
      "Garantia de reposição",
      "Não precisa informar senha",
      "Segurança garantida"
    ],
    popular: false,
  },
  {
    name: "Popular",
    price: "R$ 24,90",
    oldPrice: "R$ 49,90",
    followers: "5.000",
    discount: "50%",
    checkoutUrl: "https://pay.sunize.com.br/OitTsHlf",
    features: [
      "100% Brasileiros",
      "Entrega imediata",
      "Garantia de reposição",
      "Não precisa informar senha",
      "Segurança garantida"
    ],
    popular: true,
  },
  {
    name: "Crescimento",
    price: "R$ 27,90",
    oldPrice: "R$ 55,90",
    followers: "7.300",
    discount: "50%",
    checkoutUrl: "https://pay.sunize.com.br/pOldjXcy",
    features: [
      "100% Brasileiros",
      "Entrega imediata",
      "Garantia de reposição",
      "Não precisa informar senha",
      "Segurança garantida"
    ],
    popular: false,
  },
  {
    name: "Avançado",
    price: "R$ 32,90",
    oldPrice: "R$ 65,90",
    followers: "8.200",
    discount: "50%",
    checkoutUrl: "https://pay.sunize.com.br/ITQozTVl",
    features: [
      "100% Brasileiros",
      "Entrega imediata",
      "Garantia de reposição",
      "Não precisa informar senha",
      "Segurança garantida"
    ],
    popular: false,
  },
  {
    name: "Profissional",
    price: "R$ 39,90",
    oldPrice: "R$ 79,90",
    followers: "9.500",
    discount: "50%",
    checkoutUrl: "https://pay.sunize.com.br/xxGxErJY",
    features: [
      "100% Brasileiros",
      "Entrega imediata",
      "Garantia de reposição",
      "Não precisa informar senha",
      "Segurança garantida"
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "R$ 44,90",
    oldPrice: "R$ 89,90",
    followers: "10.000",
    discount: "50%",
    checkoutUrl: "https://pay.sunize.com.br/aEyFqyYt",
    features: [
      "100% Brasileiros",
      "Entrega imediata",
      "Garantia de reposição",
      "Não precisa informar senha",
      "Segurança garantida"
    ],
    popular: false,
  },
];

const viewsPlans = [
  {
    name: "Teste",
    category: "🟣 QUER APENAS TESTAR? 🟣",
    plans: [
      { name: "Básico", views: "500", price: "R$ 7,90", oldPrice: "R$ 15,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/zEfjMGdT" },
      { name: "Iniciante", views: "1.000", price: "R$ 12,90", oldPrice: "R$ 25,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/SAXDiqlb" },
      { name: "Crescimento", views: "2.000", price: "R$ 19,90", oldPrice: "R$ 39,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/oIcBLGQc" },
    ]
  },
  {
    name: "Upgrade",
    category: "🟣 QUER DAR UM UP? 🟣",
    plans: [
      { name: "Avançado", views: "3.000", price: "R$ 24,90", oldPrice: "R$ 49,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/VnFcSsRI" },
      { name: "Popular", views: "5.000", price: "R$ 32,90", oldPrice: "R$ 65,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/ffJVuotl" },
      { name: "Profissional", views: "10.000", price: "R$ 54,90", oldPrice: "R$ 109,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/nFdZBSPG" },
    ]
  },
  {
    name: "Crescer",
    category: "🟣 QUER CRESCER SEU PERFIL? 🟣",
    plans: [
      { name: "Premium", views: "20.000", price: "R$ 69,90", oldPrice: "R$ 139,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/qgmgvAoI" },
      { name: "Master", views: "50.000", price: "R$ 79,90", oldPrice: "R$ 159,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/soKYoelM" },
      { name: "Ultimate", views: "100.000", price: "R$ 99,90", oldPrice: "R$ 199,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/gxJLcnwR" },
    ]
  }
];

const likesPlans = [
  {
    name: "Teste",
    category: "🟣 QUER APENAS TESTAR? 🟣",
    plans: [
      { name: "Mini", likes: "100", price: "R$ 5,00", oldPrice: "R$ 10,00", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/kwXEebto" },
      { name: "Básico", likes: "500", price: "R$ 14,90", oldPrice: "R$ 29,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/QOdzjCki" },
      { name: "Crescimento", likes: "1.000", price: "R$ 19,90", oldPrice: "R$ 39,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/kqlhBRDc" },
    ]
  },
  {
    name: "Upgrade",
    category: "🟣 QUER DAR UM UP? 🟣",
    plans: [
      { name: "Avançado", likes: "2.000", price: "R$ 29,90", oldPrice: "R$ 59,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/CQlyjLAy" },
      { name: "Popular", likes: "3.000", price: "R$ 39,90", oldPrice: "R$ 79,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/sipRsgUa" },
      { name: "Profissional", likes: "5.000", price: "R$ 49,90", oldPrice: "R$ 99,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/FzyYGNTN" },
    ]
  },
  {
    name: "Crescer",
    category: "🟣 QUER CRESCER SEU PERFIL? 🟣",
    plans: [
      { name: "Premium", likes: "10.000", price: "R$ 69,90", oldPrice: "R$ 139,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/tBgexmRJ" },
      { name: "Master", likes: "20.000", price: "R$ 99,90", oldPrice: "R$ 199,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/PdaUwJrE" },
      { name: "Ultimate", likes: "50.000", price: "R$ 149,90", oldPrice: "R$ 299,90", discount: "50%", checkoutUrl: "https://pay.sunize.com.br/roeFUPOT" },
    ]
  }
];

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [userInput, setUserInput] = useState("");
  const [serviceType, setServiceType] = useState<'followers' | 'likes' | 'views'>('followers');

  const handleFollowersPurchase = (plan: any, inputUsername: string) => {
    if (!inputUsername.trim()) return;
    
    setSelectedPlan({
      ...plan,
      quantity: plan.followers,
      serviceType: 'followers'
    });
    setUserInput(inputUsername.replace('@', ''));
    setServiceType('followers');
    setIsModalOpen(true);
  };

  const handleServicePurchase = (servicePlan: any, link: string, currentServiceType: string) => {
    if (!link.trim()) return;
    
    setSelectedPlan({
      ...servicePlan,
      quantity: servicePlan.views || servicePlan.likes,
      checkoutUrl: servicePlan.checkoutUrl,
      serviceType: currentServiceType
    });
    setUserInput(link);
    setServiceType(currentServiceType as 'likes' | 'views');
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 to-background" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            OFERTAS EXCLUSIVAS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Escolha o serviço perfeito para impulsionar seu perfil
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seguidores, visualizações e curtidas 100% brasileiros com entrega imediata
          </p>
        </div>
        
        <Tabs defaultValue="followers" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
            <TabsTrigger value="followers" className="flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              Seguidores
            </TabsTrigger>
            <TabsTrigger value="views" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Visualizações
            </TabsTrigger>
            <TabsTrigger value="likes" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Curtidas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="followers">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {followersPlans.map((plan, index) => (
                <FollowerCard 
                  key={index} 
                  plan={plan} 
                  onPurchase={handleFollowersPurchase}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="views">
            <div className="space-y-12">
              {viewsPlans.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-bold text-center mb-8 text-primary">
                    {category.category}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {category.plans.map((plan, planIndex) => (
                      <ServiceCard 
                        key={planIndex}
                        plan={plan}
                        serviceType="views"
                        icon={<Eye className="w-6 h-6" />}
                        metric="visualizações"
                        placeholder="Cole o link do seu post aqui"
                        onPurchase={handleServicePurchase}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="likes">
            <div className="space-y-12">
              {likesPlans.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-bold text-center mb-8 text-primary">
                    {category.category}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {category.plans.map((plan, planIndex) => (
                      <ServiceCard 
                        key={planIndex}
                        plan={plan}
                        serviceType="likes"
                        icon={<Heart className="w-6 h-6" />}
                        metric="curtidas"
                        placeholder="Cole o link do seu post aqui"
                        onPurchase={handleServicePurchase}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <ConfirmationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          userInput={userInput}
          packageName={selectedPlan?.name || ""}
          quantity={selectedPlan?.quantity || ""}
          price={selectedPlan?.price || ""}
          checkoutUrl={selectedPlan?.checkoutUrl || ""}
          serviceType={serviceType}
        />
      </div>
    </section>
  );
};

const FollowerCard = ({ plan, onPurchase }: { plan: any, onPurchase: (plan: any, username: string) => void }) => {
  const [inputValue, setInputValue] = useState("");

  const handlePurchase = () => {
    onPurchase(plan, inputValue);
  };

  return (
    <Card className={`relative bg-gradient-card border-2 hover:shadow-card transition-all duration-300 hover:scale-105 ${
      plan.popular ? 'border-primary shadow-glow' : 'border-border'
    }`}>
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star className="w-4 h-4" />
            MAIS POPULAR
          </div>
        </div>
      )}
      
      <div className="absolute -top-2 -right-2">
        <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
          -{plan.discount} OFF
        </div>
      </div>
      
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-xl font-bold text-foreground mb-2">
          {plan.name}
        </CardTitle>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <div className="text-lg line-through text-muted-foreground opacity-70">
              {plan.oldPrice}
            </div>
            <div className="text-3xl font-bold text-primary">
              {plan.price}
            </div>
          </div>
          <div className="text-lg font-semibold text-foreground flex items-center justify-center gap-2">
            <Instagram className="w-5 h-5" />
            {plan.followers} Seguidores
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {plan.features.map((feature: string, featureIndex: number) => (
            <li key={featureIndex} className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="pt-2">
          <p className="text-xs text-muted-foreground mb-2">
            Digite seu @ do Instagram:
          </p>
          <Input 
            placeholder="@seu_usuario" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mb-3"
          />
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handlePurchase}
          disabled={!inputValue.trim()}
          className="w-full py-4 font-bold rounded-full bg-gradient-primary hover:opacity-90 text-white"
        >
          Comprar Agora
        </Button>
      </CardFooter>
    </Card>
  );
};

const ServiceCard = ({ plan, serviceType, icon, metric, placeholder, onPurchase }: any) => {
  const [inputValue, setInputValue] = useState("");

  const handlePurchase = () => {
    if (!inputValue.trim()) return;
    onPurchase(plan, inputValue, serviceType);
  };

  return (
    <Card className="bg-gradient-card border-2 border-border hover:shadow-card transition-all duration-300 hover:scale-105">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-lg font-bold text-foreground mb-2">
          {plan.name}
        </CardTitle>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-primary">
            {plan.price}
          </div>
          <div className="text-md font-semibold text-foreground flex items-center justify-center gap-2">
            {icon}
            {plan.views || plan.likes} {metric}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-muted-foreground">100% Brasileiros</span>
          </li>
          <li className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-muted-foreground">Entrega imediata</span>
          </li>
          <li className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-muted-foreground">Segurança garantida</span>
          </li>
        </ul>
        
        <div className="pt-2">
          <p className="text-xs text-muted-foreground mb-2">
            {placeholder}:
          </p>
          <Input 
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mb-3"
          />
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handlePurchase}
          disabled={!inputValue.trim()}
          className="w-full py-4 font-bold rounded-full bg-gradient-primary hover:opacity-90 text-white"
        >
          Comprar Agora
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Pricing;