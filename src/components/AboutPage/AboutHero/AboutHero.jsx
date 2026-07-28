import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BackgroundImg from "../../../assets/AboutHero.webp";
import AboutHeroContent from './AboutHeroContent'


export default function AboutHero() {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition:"center",
        
        backgroundRepeat: "no-repeat",
        height: "100vh",
        
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
        <AboutHeroContent />
         
      </Container>
    </Box>
  );
}
