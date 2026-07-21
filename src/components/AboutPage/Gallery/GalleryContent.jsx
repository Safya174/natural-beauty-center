import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import spacing from "../../../theme/spacing";

export default function GalleryContent() {
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
        The Essence of Wellness
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
        Inside Natural Beauty Center
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
        Explore our peaceful spaces, discover our natural products, and
        experience beauty inspired by the purity of nature.
      </Typography>
    </Box>
  );
}
