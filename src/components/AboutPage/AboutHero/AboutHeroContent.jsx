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
      }}
    >
      <Typography
        variant="overline"
        color="primary.main"
        sx={{
          fontFamily: "Alexandria",
          fontSize: ".95rem",
          fontWeight: 400,
          letterSpacing: ".35em",
          mt: 2,
        }}
      >
        {t("AboutHero.about_us")}
      </Typography>

      <Typography
        variant="h1"
        color="text.primary"
        sx={{ mt: 0, mb: 0, fontFamily: "Alexandria", lineHeight: 1 }}
      >
        {t("AboutHero.main_heading")}
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: "35rem",
          mt: 0,
          fontFamily: "Alexandria",
        }}
      >
        {t("AboutHero.description")}
      </Typography>
    </Box>
  );
}
