import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { primaryButton } from "../../Theme/buttonStyles";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
export default function AboutContent() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5, // 🟢 مسافة ثابتة ومريحة جداً بين كل العناصر بدون لخبطة
        alignItems: "flex-start",
      }}
    >
      {/* اسم السكشن العلوي */}
      <Typography
        variant="overline"
        sx={{
          fontSize: "1rem",
          letterSpacing: isArabic ? "normal" : "3px",
          textTransform: "uppercase",
          color: "primary.main",
          fontWeight: 600,
        }}
      >
        {t("About.SectionName")}
      </Typography>

      {/* العنوان الرئيسي */}
      <Typography
        variant="h2"
        color="text.primary"
        sx={{
          fontWeight: 700,
          lineHeight: isArabic ? 1.35 : 1.2, // 🟢 ضبط ارتفاع السطر للعنوان ليكون ناعم ومريح
        }}
      >
        {t("About.title")}
      </Typography>

      {/* الوصف */}
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: "42rem",
          fontWeight: 400,
          lineHeight: isArabic ? 1.9 : 1.7,
        }}
      >
        {t("About.description")}
      </Typography>

      {/* الزرار */}
      <Button
        variant="outlined"
        component={NavLink}
        to="/about"
        aria-label={t("About.Discoveryourstory")}
        sx={{
          ...primaryButton,
        }}
      >
        {t("About.Discoveryourstory")}
      </Button>
    </Box>
  );
}
