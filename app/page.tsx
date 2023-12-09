import Background from "@/components/Background";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";
import TrustedBusiness from "@/components/TrustedBusiness";

export default function Home() {
  return (
    <main className="bg-background relative">
      <Background />
      <Banner />
      <TrustedBusiness />
      <Service />
      <Portfolio />
      <Pricing />
      <Testimonials />
    </main>
  );
}
