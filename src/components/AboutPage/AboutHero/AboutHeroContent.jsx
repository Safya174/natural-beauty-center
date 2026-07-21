import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


import spacing from "../../../theme/spacing";

export default function AboutHeroContent() {
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
          fontSize: ".95rem",
          fontWeight: 400,
          letterSpacing: ".35em",
          mt: 2,
        }}
      >
        About Us
      </Typography>

      <Typography variant="h1" color="text.primary" sx={{ mt: 0, mb: 0,fontFamily: "Alexandria",lineHeight:1 }}>
        True Beauty Begins with Nature
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: "35rem",
          mt: 0,
          fontFamily: "Alexandria",
        }}
        
      >
        We don't believe in temporary beauty. We believe in healthy beauty that
        starts from within, using carefully selected organic extracts and
        cold-pressed oils—free from harsh chemicals.
      </Typography>

    
    </Box>
  );
}
