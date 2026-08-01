import SessionsHero from "../components/Sessions/Sessionshero/SessionsHero";
import SessionsGrid from "../components/Sessions/sessionsGrid/SessionsGrid";
import PageTransition from "../components/PageTransition";
import Container from "@mui/material/Container";
import SessionsContent from "../components/Sessions/sessionsGrid/SessionContent";
import { Helmet } from "react-helmet-async"; // 👈 استيراد الهلمت

export default function SessionsPage() {
  return (
    <PageTransition>
      {/* 👈 جزء الـ SEO لصفحة الجلسات (بشرة وشعر) */}
      <Helmet>
        <title>جلسات البشرة والشعر | Natural Beauty Center</title>
        <meta 
          name="description" 
          content="احجزي أحدث جلسات العناية بالبشرة والشعر في Natural Beauty Center. علاج وتغذية الشعر، تنظيف البشرة، وجلسات النضارة بأيدي متخصصات." 
        />
      </Helmet>

      <SessionsHero />
      <SessionsContent />
      <Container maxWidth="lg">
        <SessionsGrid />
      </Container>
    </PageTransition>
  );
}