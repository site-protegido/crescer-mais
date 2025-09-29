import Header from "@/components/Header";

import WhyFollowers from "@/components/WhyFollowers";
import VideoSection from "@/components/VideoSection";
import VideoCarousel from "@/components/VideoCarousel";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import PurchaseNotification from "@/components/PurchaseNotification";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <VideoSection />
      <WhyFollowers />
      <VideoCarousel />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
      <PurchaseNotification />
    </div>
  );
};

export default Index;
