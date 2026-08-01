import ContactUs from "../components/ContactUs/Contactus";
import PageTransition from "../components/PageTransition";
import Box from "@mui/material/Box";
import { Helmet } from "react-helmet-async"; // 👈 استيراد الهلمت

export default function ContactPage() {
  return (
    <PageTransition>
      {/* 👈 جزء الـ SEO لصفحة تواصل معنا */}
      <Helmet>
        <title>تواصل معنا | Natural Beauty Center</title>
        <meta 
          name="description" 
          content="تواصل مع Natural Beauty Center للاستفسار وحجز الجلسات. يمكنك مراسلتنا مباشرة عبر الواتساب أو زيارة مقرنا." 
        />
      </Helmet>

     
      <Box sx={{ width: "100%" }}>
        <ContactUs />
      </Box>
    </PageTransition>
  );
}