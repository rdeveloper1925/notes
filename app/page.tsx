import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-1";
import FeaturesSection from "@/components/features-5";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";

export default function Home() {
  return (
    <main>
        <HeroSection/>
        <CallToAction/>
        <ContentSection/>
        <FeaturesSection/>
        <LogoCloud/>
        <FooterSection/>
    </main>
    
  );
}
