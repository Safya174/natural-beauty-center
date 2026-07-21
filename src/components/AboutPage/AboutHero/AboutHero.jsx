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
       
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
    

      <Container
        maxWidth="xl"
        sx={{
          pt: 8,
          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 5,
          },
        }}
      >
        <AboutHeroContent />
         
      </Container>
    </Box>
  );
}
