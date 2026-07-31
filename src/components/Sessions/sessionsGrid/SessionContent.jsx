
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useTranslation } from "react-i18next";

export default function SessionsContent() {
  const { t, i18n } = useTranslation();
  let isArabic = i18n.language == "ar";

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
          letterSpacing: isArabic ? "normal" : 2,
          color: "primary.main",
          fontWeight: 600,
        }}
      >
        {t("SessionsContent.tag")}
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
        {t("SessionsContent.title")}
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
        {t("SessionsContent.subtitle")}
      </Typography>
    </Box>
  );
}