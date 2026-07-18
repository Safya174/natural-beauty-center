import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BackgroundImg from "../../assets/screen.png";
import Navbar from "../Navbar";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Navbar />

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
        <HeroContent />
         
      </Container>
    </Box>
  );
}
