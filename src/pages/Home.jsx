import { images } from "../assets/Images";
import Hero from "../sections/hero";
import About from "../sections/Home/About";
import Services from "../sections/Home/Services";
import SkillsPreview from "../sections/Home/SkillPreview";

export default function Home() {
  return (
    <>
    <Hero
      badge="Welcome"
      title="Hi, I'm Fatema"
      subtitle="A passionate graphic designer creating meaningful visual experiences."
      image={images.avatar}
    />
    <Services/>
    <About/>
    <SkillsPreview/>
    </>
    
  );
}