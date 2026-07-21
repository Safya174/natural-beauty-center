import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import WhySection from "../components/WhyChoosUS/WhyChoos";
import OurProductsSection from "../components/ProductHome/Product";
import ReviewSection from "../components/Testimonials/ReviewsSection";
import PageTransition from "../components/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <WhySection />
      <OurProductsSection />
      <ReviewSection />
    </PageTransition>
  );
}
