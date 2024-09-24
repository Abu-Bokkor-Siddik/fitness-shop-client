import AboutAccordition from "@/components/share/Abouts/AboutAccordition";
import AboutCarousel from "@/components/share/Abouts/AboutCarousel";
import AboutCart from "@/components/share/Abouts/AboutCart";
import { UseReloadWarnning } from "@/components/share/ReloadWarnning";
import Testimonial from "@/components/share/Testimonial";

const About = () => {
   // Reload
   UseReloadWarnning();
  return (
    <div>
      <AboutCart></AboutCart>
      <div className="max-w-[1300px] my-16 mx-auto  flex flex-col lg:flex-row gap-20 justify-center items-center ">
        <AboutAccordition></AboutAccordition>
        <AboutCarousel></AboutCarousel>
      </div>
      <div className="max-h-[500px] max-w-96 mx-auto my-5 ">
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default About;
