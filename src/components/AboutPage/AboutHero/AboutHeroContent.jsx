import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import spacing from "../../../theme/spacing";

export default function AboutHeroContent() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.hero.contentGap,
        maxWidth: { xs: "100%", md: "620px" },
        mr:{xs : 0 , md:isArabic? 12 : 8 },
      
        width: "100%"

      }}
    >
      <Typography
        variant="overline"
        sx={{
          fontFamily: "Alexandria",
          fontSize: ".95rem",
          fontWeight: 700,
          letterSpacing: isArabic ? "normal" : ".35em",
          color: isArabic ? "#3E6B39" : "primary.main",
          mt: 2,
        }}
      >
        {t("AboutHero.about_us")}
      </Typography>

      <Typography
        variant="h1"
        sx={{
          mt: 0,
          mb: 0,
          lineHeight: isArabic ? 1.35 : 1.2,

          color: isArabic ? "#1A2E17" : "text.primary",
          textShadow: isArabic
            ? "0px 1px 3px rgba(255, 255, 255, 0.6)"
            : "none",
        }}
      >
        {t("AboutHero.main_heading")}
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
          sx={{
          maxWidth: "38rem",
          mt: 0,
          lineHeight: 1.8,
          
          color: isArabic ? "#3A4D39" : "text.secondary",
          fontWeight: isArabic ? 500 : 400, 
        }}
      >
        {t("AboutHero.description")}
      </Typography>
    </Box>
  );
}
