import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import spacing from "../../../theme/spacing";

export default function OurMissionContent() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.hero.contentGap,
        alignItems: "center",
        
      }}
    >
      <Typography
        variant="overline"
        sx={{
          fontFamily: "Alexandria",
          fontSize: "1rem",
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "primary.main",
          fontWeight: 600,
        }}
      >
        Our Values
      </Typography>
      <Typography
        variant="h2"
        color="text.primary"
        sx={{
          fontFamily: "Alexandria",
          fontWeight: 700,
          color: "text.primary",
        }}
      >
        Beauty Rooted in Nature
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: "55rem",
          mt: 0,
          fontFamily: "Alexandria",
          fontWeight: 400,
          lineHeight: 1.9,
          
          
          
        }}
      >
        We believe that true beauty comes from the perfect balance between
        nature, wellness, and self-care. Every step of our journey reflects our
        commitment to purity, quality, and excellence.
      </Typography>
    </Box>
  );
}
