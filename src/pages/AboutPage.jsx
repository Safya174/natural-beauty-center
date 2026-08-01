import AboutHero from "../components/AboutPage/AboutHero/AboutHero";
import OurStory from "../components/AboutPage/OurStory/OurStory";
import OurValues from "../components/AboutPage/Our Mission/Our Mission";
import Gallery from "../components/AboutPage/Gallery/Gallery";
import PageTransition from "../components/PageTransition";
import Box from "@mui/material/Box";
import { Helmet } from "react-helmet-async"; // 👈 استيراد الهلمت

export default function AboutPage() {
  return (
    <PageTransition>
     
      <Helmet>
        <title>من نحن | Natural Beauty Center</title>
        <meta 
          name="description" 
          content="تعرفي على قصة Natural Beauty Center ورؤيتنا في تقديم أفضل خدمات العناية بالبشرة والجمال الطبيعي." 
        />
      </Helmet>

      <Box sx={{ width: "100%" }}>
        <AboutHero />
        <OurStory />
        <OurValues />
        <Gallery />
      </Box>
    </PageTransition>
  );
}