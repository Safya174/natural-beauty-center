import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import spacing from "../../theme/spacing";

export default function WhyChoosContent() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.hero.contentGap,
        alignItems: "center",
        backgroundColor: "white",
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
        Our distinction lies in the details
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
        Why Choose Natural Beauty Center?
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
          textAlign:"center"
        }}
      >
        We combine the power of nature with years of expertise to deliver
        personalized beauty solutions that help you look and feel your best.
      </Typography>
    </Box>
  );
}
