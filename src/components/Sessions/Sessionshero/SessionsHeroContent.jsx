import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SessionsButtons from "./sessionsButtons";
import spacing from "../../../theme/spacing";
import { useTranslation } from "react-i18next";

export default function SessionsContent() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.hero.contentGap || 2,
        maxWidth: { xs: "100%", md: "620px" },
        textAlign: "start",
      }}
    >
      {/* اسم البراند فوق */}
      <Typography
        variant="overline"
        sx={{
          fontFamily: "'Alexandria', sans-serif",
          fontSize: { xs: "0.95rem", sm: "1.1rem" },
          fontWeight: 700,
          letterSpacing: isArabic ? "normal" : "4px",
      
          color: isArabic ? "#3E6B39" : "primary.main",
          mt: 1,
        }}
      >
       {t("sessionsHero.tagline")}

      </Typography>

      {/* العنوان الرئيسي */}
      <Typography
        variant="h1"
        sx={{
          mt: 0,
          mb: 0,
          lineHeight: isArabic ? 1.35 : 1.2,
          
          color: isArabic ? "#1A2E17" : "text.primary",
          textShadow: isArabic ? "0px 1px 3px rgba(255, 255, 255, 0.6)" : "none",
        }}
      >
        {t("sessionsHero.title")}
      </Typography>

      {/* النص الوصفي */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: "38rem",
          mt: 0,
          lineHeight: 1.8,
         
          color: isArabic ? "#3A4D39" : "text.secondary",
          fontWeight: isArabic ? 500 : 400, 
        }}
      >
        {t("sessionsHero.description")}
      </Typography>

      
      <SessionsButtons />
    </Box>
  );
}