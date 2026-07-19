import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { primaryButton } from "../../../Theme/buttonStyles";
import Button from "@mui/material/Button";
import spacing from "../../../theme/spacing";

export default function OurStoryContent() {
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
        variant="h2"
        color="text.primary"
        sx={{
          fontFamily: "Alexandria",
          fontWeight: 700,
          color: "text.primary",
        }}
      >
        Our Story
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
        Natural Beauty Center was born from a passion for natural beauty and
        self-care. Inspired by nature and built on years of experience, we
        combine organic ingredients with modern beauty expertise to create a
        warm, personalized experience where every client feels confident,
        refreshed, and naturally beautiful
      </Typography>
      <Button
        variant="outlined"
        sx={{
          ...primaryButton,
          mt: 2,
        }}
      >
        Explore Our Products
      </Button>
    </Box>
  );
}
