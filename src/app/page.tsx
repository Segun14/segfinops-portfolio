import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Work from "@/components/Work";
import Beliefs from "@/components/Beliefs";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Work />
      <Story />
      <Beliefs />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
