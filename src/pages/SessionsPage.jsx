import SessionsHero from "../components/Sessions/Sessionshero/SessionsHero";
import SessionsGrid from "../components/Sessions/sessionsGrid/SessionsGrid";
import PageTransition from "../components/PageTransition";
import Container from "@mui/material/Container";
import SessionsContent from "../components/Sessions/sessionsGrid/SessionContent"
export default function SessionsPage() {
  return (
    <PageTransition>
      <SessionsHero />
      <SessionsContent/>
     <Container maxWidth="lg">
      <SessionsGrid/>
      </Container>
    </PageTransition>
  );
}
