import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import spacing from "../../theme/spacing";

export default function TestimonialsHeader() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.hero.contentGap,
        alignItems:"center"
      }}
    >
      <Typography
        variant="overline"
        sx={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1rem",
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "primary.main",
          fontWeight: 600,
        }}
      >
        Testimonials
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
        What Our Clients Say
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
    
        Real experiences from clients who trusted Natural Beauty Center.
      </Typography>
    
    </Box>
  );
}
