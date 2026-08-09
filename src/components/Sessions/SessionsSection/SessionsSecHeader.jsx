import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import spacing from "../../../Theme/spacing";
import { useTranslation } from "react-i18next";
export default function SessinsSecContent() {
  const { t } = useTranslation();
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.hero.contentGap,
        alignItems: "center",
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
        {t("featuredSessions.title")}
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
        {t("featuredSessions.subtitle")}
      </Typography>
    </Box>
  );
}
