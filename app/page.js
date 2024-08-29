import Footer from "@/components/Footer/Footer";
import Benifits from "@/components/Home/Benifits";
import BuyNow from "@/components/Home/BuyNow";
import Comparision from "@/components/Home/Comparision";
import EstateRecovery from "@/components/Home/EstateRecovery";
import Faq from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import PinRecovery from "@/components/Home/PinRecovery";
import ProblemStatement from "@/components/Home/ProblemStatement";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <ProblemStatement />
      <PinRecovery />
      <EstateRecovery/>
      <Benifits/>
      <Comparision/>
      <Testimonials/>
      <BuyNow/>
      <Faq/>
      <Footer/>
    </main>
  );
}
