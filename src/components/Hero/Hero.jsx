import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BackgroundImg from "../../assets/screen.png";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${BackgroundImg})`,
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
          // 🟢 بدال ما نحدد left/right، بنستخدم px مع زيادة بسيطة للأمان في العربي
          px: {
            xs: 2.5,
            sm: 4,
            md: 6,
          },
        }}
      >
        <HeroContent />
      </Container>
    </Box>
  );
}
