import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import HeroButtons from "./HeroButtons";
import spacing from "../../theme/spacing";

export default function HeroContent() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.hero.contentGap,
       
      }}
    >
      <Typography
        variant="overline"
        color="primary.main"
        sx={{
          fontFamily: "Alexandria",
          fontSize: "2rem",
        
          letterSpacing: "3px",
          mt:2
        }}
      >
        Natural Beauty Center
      </Typography>

      <Typography variant="h1" color="text.primary" sx={{mt:0,mb:0}}>
        Your True Beauty Begins with Nature
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: "38rem",
          mt:0
        }}
      >
        Where timeless natural care meets modern expertise, offering
        personalized experiences that help restore balance, confidence, and
        healthy beauty.
      </Typography>

      <HeroButtons />
    </Box>
  );
}