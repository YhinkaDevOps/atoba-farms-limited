import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyUS from "@/components/WhyUS";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutUs />
      <MissionStatement />
      <WhyUS />
      <Products />
      <Testimonials />
    </div>
  );
}
