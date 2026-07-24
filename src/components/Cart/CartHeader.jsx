import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import spacing from "../../theme/spacing";

export default function CartContent() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
      
        alignItems: "center",
        py: spacing.section.py,
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
        Shopping Cart
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
        Take a moment to review your selected natural products before placing
        your order through WhatsApp.
      </Typography>
    </Box>
  );
}
