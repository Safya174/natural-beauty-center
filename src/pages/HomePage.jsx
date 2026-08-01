import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import WhySection from "../components/WhyChoosUS/WhyChoos";
import OurProductsSection from "../components/ProductHome/Product";
import ReviewSection from "../components/Testimonials/ReviewsSection";
import PageTransition from "../components/PageTransition";
import { Helmet } from "react-helmet-async"; // 👈 استيراد الهلمت

export default function HomePage() {
  return (
    <PageTransition>
      {/* 👈 جزء الـ SEO لصفحة الرئيسية */}
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
      <OurProductsSection />
      <ReviewSection />
    </PageTransition>
  );
}