import  { useEffect } from "react";
import { useLocation } from "react-router-dom"; // 👈 أضفنا استخدام الـ location
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import WhySection from "../components/WhyChoosUS/WhyChoos";
import OurProductsSection from "../components/ProductHome/Product";
import ReviewSection from "../components/Testimonials/ReviewsSection";
import PageTransition from "../components/PageTransition";
import SessionsSection from "../components/Sessions/SessionsSection/Sessionssec";
import { Helmet } from "react-helmet-async"; 

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
   
    const hash = window.location.hash || location.hash;
    
    if (hash) {
      const id = hash.replace("#", "");
      
     
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth"});
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <PageTransition>
      
      <Helmet>
        <title>Natural Beauty Center | الرئيسية - مركز العناية بالبشرة والجمال</title>
        <meta 
          name="description" 
          content="مرحباً بكم في Natural Beauty Center. نقدم أفضل خدمات الجلسات التجميلية والعناية بالبشرة والمنتجات الطبيعية." 
        />
      </Helmet>

      <Hero />
      <About />
      <WhySection />
      <SessionsSection/>
      <OurProductsSection />
      <ReviewSection />
    </PageTransition>
  );
}