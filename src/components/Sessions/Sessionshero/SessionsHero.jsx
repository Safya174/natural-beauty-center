import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BackgroundImg from "../../../assets/SessionsHero.webp";
import SessionsContent from "./SessionsHeroContent";

export default function SessionsHero() {
  return (
    <Box
      component="section"
      sx={{
        // 👈 أضفنا التدرج الأسود الشفاف (0.4) قبل رابط الصورة
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${BackgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          pt: { xs: 4, md: 8 },
          px: {
            xs: 2.5,
            sm: 4,
            md: 6,
          },
        }}
      >
        <SessionsContent />
      </Container>
    </Box>
  );
}