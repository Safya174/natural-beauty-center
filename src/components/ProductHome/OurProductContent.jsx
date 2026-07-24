import { Box, Typography } from "@mui/material";

export default function ProductContent() {
  return (
    <Box
      sx={{
        textAlign: "center",
        maxWidth: "850px",
        mx: "auto",
        mt: 8,
      }}
    >
      <Typography
        variant="overline"
        sx={{
          fontFamily: "Alexandria",
          fontSize: "1rem",
          letterSpacing: 2,
          color: "primary.main",
          fontWeight: 600,
        }}
      >
        OUR NATURAL COLLECTION
      </Typography>

      <Typography
        variant="h2"
        sx={{
          mt: 2,
          fontFamily: "Alexandria",
          fontWeight: 700,
          color: "text.primary",
        }}
      >
        Pure Herbs & Natural Essentials
      </Typography>

      <Typography
        sx={{
          mt: 3,
          fontSize: "1.15rem",
          color: "text.secondary",
          lineHeight: 1.9,
          maxWidth: "720px",
          mx: "auto",
        }}
      >
        Explore our carefully selected collection of herbs, botanical oils, and
        natural products inspired by traditional wellness and everyday
        self-care.
      </Typography>
    </Box>
  );
}
