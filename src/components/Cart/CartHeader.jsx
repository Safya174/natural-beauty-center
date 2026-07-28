import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import spacing from "../../theme/spacing";
import { useTranslation } from "react-i18next";
export default function CartContent() {
    const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  
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
        {t("cart.title")}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: "42rem",
          mt: 0,
          fontFamily: "Alexandria",
          fontWeight: 400,
          lineHeight: isArabic ? 3 : 1.9,
        }}
      >
        {t("cart.description")}
      </Typography>
    </Box>
  );
}
