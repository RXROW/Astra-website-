
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import Newsletter from "@/components/Newsletter";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials ";
 
const HomePage = () => {
  return (
    <section
      className="w-full relative flex flex-col items-center justify-center 
        px-4 py-8 md:px-0"
    >
    <Hero/>
    <HowItWork/>
    <Features/>
    <Pricing/>
    <Testimonials/>
    <Newsletter/>

    
    </section>
  );
};

export default HomePage;
