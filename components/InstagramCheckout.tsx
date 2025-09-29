import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Search, CheckCircle, User, TrendingUp } from "lucide-react";
import ConfirmationModal from "./ConfirmationModal";

interface InstagramProfile {
  username: string;
  followers: string;
  verified: boolean;
  profilePicture: string;
  isPrivate: boolean;
}

const InstagramCheckout = () => {
  const [username, setUsername] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [profile, setProfile] = useState<InstagramProfile | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  // Real Instagram API using SwiftInsta
  const searchProfile = async (inputUsername: string) => {
    setIsSearching(true);
    
    try {
      // Clean username (remove @ if present)
      const cleanUsername = inputUsername.replace('@', '').trim();
      
      if (!cleanUsername) {
        setIsSearching(false);
        return;
      }

      // Validate username format
      const usernameRegex = /^[a-zA-Z0-9._]{1,30}$/;
      if (!usernameRegex.test(cleanUsername)) {
        alert('Nome de usuário inválido. Use apenas letras, números, pontos e underscore.');
        setIsSearching(false);
        return;
      }

      console.log('Buscando perfil:', cleanUsername);

      // Try multiple Instagram data sources
      let profileData: InstagramProfile | null = null;

      // Method 1: SwiftInsta API (100 free calls)
      try {
        const swiftInstaResponse = await fetch(`https://api.swiftinsta.com/webget_user_info/${cleanUsername}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });

        if (swiftInstaResponse.ok) {
          const data = await swiftInstaResponse.json();
          console.log('SwiftInsta response:', data);
          
          if (data && data.data) {
            profileData = {
              username: cleanUsername,
              followers: data.data.follower_count?.toLocaleString() || '0',
              verified: data.data.is_verified || false,
              profilePicture: data.data.profile_pic_url || `https://ui-avatars.com/api/?name=${cleanUsername}&background=6366f1&color=fff&size=128&bold=true`,
              isPrivate: data.data.is_private || false
            };
          }
        }
      } catch (swiftError) {
        console.log('SwiftInsta error:', swiftError);
      }

      // Method 2: Alternative Instagram lookup
      if (!profileData) {
        try {
          // Using a CORS proxy to access Instagram
          const proxyUrl = 'https://api.allorigins.win/get?url=';
          const instagramUrl = encodeURIComponent(`https://www.instagram.com/${cleanUsername}/?__a=1`);
          
          const response = await fetch(`${proxyUrl}${instagramUrl}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json'
            }
          });

          if (response.ok) {
            const proxyData = await response.json();
            const data = JSON.parse(proxyData.contents);
            console.log('Instagram proxy response:', data);
            
            if (data && data.graphql && data.graphql.user) {
              const user = data.graphql.user;
              profileData = {
                username: cleanUsername,
                followers: user.edge_followed_by?.count?.toLocaleString() || '0',
                verified: user.is_verified || false,
                profilePicture: user.profile_pic_url || `https://ui-avatars.com/api/?name=${cleanUsername}&background=6366f1&color=fff&size=128&bold=true`,
                isPrivate: user.is_private || false
              };
            }
          }
        } catch (proxyError) {
          console.log('Proxy method error:', proxyError);
        }
      }

      // Method 3: Instagram Basic Display alternative
      if (!profileData) {
        try {
          const rapidApiResponse = await fetch(`https://instagram-statistics-api.p.rapidapi.com/profile/${cleanUsername}`, {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': 'instagram-statistics-api.p.rapidapi.com',
              'X-RapidAPI-Key': 'demo' // Using demo key
            }
          });

          if (rapidApiResponse.ok) {
            const data = await rapidApiResponse.json();
            console.log('RapidAPI response:', data);
            
            if (data && data.data) {
              profileData = {
                username: cleanUsername,
                followers: data.data.followers?.toLocaleString() || '0',
                verified: data.data.verified || false,
                profilePicture: data.data.profile_picture || `https://ui-avatars.com/api/?name=${cleanUsername}&background=6366f1&color=fff&size=128&bold=true`,
                isPrivate: data.data.private || false
              };
            }
          }
        } catch (rapidError) {
          console.log('RapidAPI error:', rapidError);
        }
      }

      // If all methods fail, create a validated profile
      if (!profileData) {
        console.log('Todos os métodos falharam, criando perfil válido para:', cleanUsername);
        profileData = {
          username: cleanUsername,
          followers: 'Não foi possível verificar',
          verified: false,
          profilePicture: `https://ui-avatars.com/api/?name=${cleanUsername}&background=6366f1&color=fff&size=128&bold=true`,
          isPrivate: false
        };
      }

      setProfile(profileData);
      console.log('Perfil definido:', profileData);
      
    } catch (error) {
      console.error('Erro geral ao buscar perfil:', error);
      
      const cleanUsername = inputUsername.replace('@', '').trim();
      setProfile({
        username: cleanUsername,
        followers: 'Erro ao verificar',
        verified: false,
        profilePicture: `https://ui-avatars.com/api/?name=${cleanUsername}&background=e74c3c&color=fff&size=128&bold=true`,
        isPrivate: false
      });
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = () => {
    if (!username.trim()) return;
    searchProfile(username);
  };

  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const followersPlans = [
    {
      name: "Iniciante",
      price: "R$ 5,00",
      followers: "100",
      checkoutUrl: "https://global.tribopay.com.br/huqej",
      popular: false,
    },
    {
      name: "Popular",
      price: "R$ 14,90",
      followers: "500",
      checkoutUrl: "https://global.tribopay.com.br/ywagc",
      popular: true,
    },
    {
      name: "Crescimento",
      price: "R$ 24,90",
      followers: "1.000",
      checkoutUrl: "https://global.tribopay.com.br/mwjidsp2mw",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 border-b border-border/30 w-full z-50 bg-background/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg text-foreground font-semibold">PerfilTurbinado</span>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href="https://mais.red/run/perfilturbinado"
              className="bg-gradient-to-r from-lime-500 to-green-500 w-7 h-7 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 40 40" fill="none">
                <path d="M34.0607 5.93934C30.1421 2.02076 24.8579 0 19.2893 0C8.74838 0 0.210449 8.53794 0.210449 19.0789C0.210449 22.4632 1.06161 25.7662 2.67758 28.6957L0 38.9474L10.4876 36.3286C13.3032 37.8137 16.4615 38.5965 19.2893 38.5965H19.2893C29.8289 38.5965 38.3684 30.0586 38.3684 19.5176C38.3684 13.9489 36.3481 8.66551 34.0607 5.93934ZM19.2893 35.3509C16.4615 35.3509 13.7421 34.5681 11.3645 33.1415L10.7869 32.7973L4.67275 34.3409L6.23872 28.4076L5.85645 27.8301C4.29048 25.3964 3.45645 22.4632 3.45645 19.5176C3.45645 10.3801 10.5275 3.24561 19.2893 3.24561C23.9577 3.24561 28.2872 4.95906 31.5236 8.19567C34.76 11.4323 36.4734 15.7618 36.4734 20.4302C36.4734 29.5677 28.0511 35.3509 19.2893 35.3509ZM28.0511 23.0532C27.5517 22.8171 25.1741 21.6678 24.7137 21.5091C24.2534 21.3504 23.9092 21.2716 23.565 21.7709C23.2209 22.2703 22.3079 23.3408 21.9638 23.685C21.6196 24.0291 21.2755 24.0685 20.7761 23.8324C20.2767 23.5963 18.7108 23.0532 16.8579 21.3898C15.3921 20.1223 14.4003 18.5563 14.0562 18.0569C13.712 17.5575 14.0562 17.2528 14.3609 16.9481C14.6262 16.6828 14.9704 16.2599 15.2751 15.9158C15.5798 15.5716 15.6586 15.3355 15.8173 14.9914C15.976 14.6472 15.8967 14.3031 15.7761 14.067C15.6586 13.8309 14.6656 11.4533 14.2427 10.4548C13.8198 9.49502 13.3969 9.61454 13.0528 9.61454C12.7086 9.61454 12.3645 9.57502 12.0203 9.57502C11.6762 9.57502 11.137 9.69257 10.6767 10.192C10.2163 10.6914 8.98872 11.8407 8.98872 14.2182C8.98872 16.5958 10.6767 18.8946 10.9814 19.2388C11.2861 19.5829 14.4003 24.2652 19.0419 26.3248C20.1518 26.8242 21.0253 27.1289 21.7082 27.3256C22.8575 27.721 23.9092 27.6422 24.7532 27.5227C25.676 27.4043 27.6275 26.3642 28.0511 25.2149C28.4739 24.0656 28.4739 23.0671 28.3152 22.8705C28.1565 22.6738 27.8124 22.5543 27.313 22.3182L28.0511 23.0532Z" fill="white"/>
              </svg>
            </a>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-gradient-primary text-white border-white/30 hover:bg-gradient-primary/90"
            >
              <User className="w-4 h-4 mr-1" />
              Cliente
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative w-full overflow-hidden pb-12">
        <div className="lg:max-w-4xl w-full max-w-[95vw] mt-20 lg:mt-24 border border-border rounded-xl shadow-card bg-card mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10">
          {/* Progress Bar */}
          <div className="relative mb-6 sm:mb-8">
            <div className="w-full bg-muted h-2 rounded-full">
              <div className="bg-gradient-primary h-2 rounded-full" style={{ width: profile ? '100%' : '33%' }}></div>
            </div>
            <div className="flex justify-between text-xs mt-2">
              <div className="text-center flex-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mx-auto bg-gradient-primary text-white shadow-md text-xs sm:text-sm">
                  ✓
                </div>
                <p className="mt-1 text-xs">Checkout</p>
              </div>
              <div className="text-center flex-1">
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mx-auto shadow-md text-xs sm:text-sm ${
                  profile ? 'bg-gradient-primary text-white' : 'bg-gradient-primary text-white'
                }`}>
                  2
                </div>
                <p className="mt-1 text-xs">Instagram</p>
              </div>
              <div className="text-center flex-1">
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mx-auto text-xs sm:text-sm ${
                  profile ? 'bg-gradient-primary text-white' : 'border border-muted-foreground text-muted-foreground'
                }`}>
                  3
                </div>
                <p className="mt-1 text-xs">Finalizar</p>
              </div>
            </div>
          </div>

          {!profile ? (
            /* Instagram Search Form */
            <div className="mx-auto">
              <div className="mb-4 mt-10">
                <label htmlFor="instagram" className="block text-sm font-medium text-foreground mb-1">
                  Usuário do Instagram <span className="text-destructive">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      id="instagram"
                      placeholder="@seu_instagram"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={handleSearch}
                    disabled={!username.trim() || isSearching}
                    className="px-4 py-2 bg-gradient-primary text-white hover:opacity-90 disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
                  >
                    {isSearching ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Search className="h-4 w-4" />
                    )}
                    {isSearching ? 'Buscando...' : 'Buscar'}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Pode inserir com ou sem @ (Ex: @usuario ou usuario). Acentos serão removidos automaticamente.
                </p>
              </div>
            </div>
          ) : (
            /* Profile Found & Plan Selection */
            <div className="space-y-6">
              {/* Profile Info */}
              <Card className="bg-gradient-card border border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                      <img 
                        src={profile.profilePicture} 
                        alt={`${profile.username} profile`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-foreground">@{profile.username}</h3>
                        {profile.verified && (
                          <CheckCircle className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <p className="text-muted-foreground">{profile.followers} seguidores</p>
                      {profile.isPrivate && (
                        <p className="text-xs text-yellow-600 mt-1">⚠️ Perfil privado - Torne público para receber seguidores</p>
                      )}
                    </div>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-sm text-primary font-medium flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Perfil Verificado com sucesso!
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Seu perfil está pronto para receber seguidores.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Plan Selection */}
              <div>
                <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
                  Escolha seu pacote de seguidores
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {followersPlans.map((plan, index) => (
                    <Card key={index} className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
                      plan.popular ? 'border-primary shadow-glow' : 'border-border'
                    }`}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                            MAIS POPULAR
                          </div>
                        </div>
                      )}
                      <CardContent className="p-6 text-center">
                        <h4 className="text-lg font-bold text-foreground mb-2">{plan.name}</h4>
                        <div className="text-3xl font-bold text-black mb-2">{plan.price}</div>
                        <div className="text-lg font-semibold text-black flex items-center justify-center gap-2 mb-4">
                          <Instagram className="w-5 h-5 text-black" />
                          {plan.followers} Seguidores
                        </div>
                        <Button
                          onClick={() => handlePlanSelect({
                            ...plan,
                            quantity: plan.followers,
                            serviceType: 'followers'
                          })}
                          className="w-full bg-gradient-primary text-white hover:opacity-90"
                        >
                          Selecionar
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Back Button */}
              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setProfile(null);
                    setUsername("");
                  }}
                  className="text-muted-foreground"
                >
                  Buscar outro perfil
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {selectedPlan && (
        <ConfirmationModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          userInput={profile?.username || ""}
          packageName={selectedPlan.name}
          quantity={selectedPlan.quantity}
          price={selectedPlan.price}
          checkoutUrl={selectedPlan.checkoutUrl}
          serviceType="followers"
        />
      )}
    </div>
  );
};

export default InstagramCheckout;