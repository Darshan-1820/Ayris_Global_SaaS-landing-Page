import HeroOption4 from "../components/hero-options/HeroOption4";
import ProductSuite from "../components/ProductSuite";
import WhyChooseUs from "../components/WhyChooseUs";
import Consulting from "../components/Consulting";
import Testimonials from "../components/Testimonials";
import Founder from "../components/Founder";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <main>
        <HeroOption4 />

        <ScrollReveal>
          <ProductSuite />
        </ScrollReveal>

        <ScrollReveal>
          <WhyChooseUs />
        </ScrollReveal>

        <ScrollReveal>
          <Consulting />
        </ScrollReveal>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal>
          <Founder />
        </ScrollReveal>

        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
