import AboutHero from "../components/AboutPage/AboutHero/AboutHero";
import OurStory from "../components/AboutPage/OurStory/OurStory";
import OurValues from "../components/AboutPage/Our Mission/Our Mission";
import Gallery from "../components/AboutPage/Gallery/Gallery";
import PageTransition from "../components/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutHero />
      <OurStory />
      <OurValues />
      <Gallery />
    </PageTransition>
  );
}
