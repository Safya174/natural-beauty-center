import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { primaryButton } from "../../Theme/buttonStyles";
import Button from "@mui/material/Button";
import spacing from "../../theme/spacing";

export default function AboutContent() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.hero.contentGap,   
        alignItems: "flex-start",
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
        About
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
        Natural Beauty Begins with Genuine Care
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: "42rem",
          mt: 0,
          fontFamily: "Alexandria",
          fontWeight: 400,
          lineHeight: 1.9,
        }}
      >
        At Natural Beauty Center, we combine the power of nature with modern
        beauty expertise to create a personalized wellness experience. Using
        carefully selected natural ingredients and tailored treatment plans, we
        help every client achieve healthier hair, radiant skin, and lasting
        confidence.
      </Typography>
      <Button
        variant="outlined"
        sx={{
          ...primaryButton,
          mt:2
         
        }}
      >
        Discover Our Story
      </Button>
    </Box>
  );
}
