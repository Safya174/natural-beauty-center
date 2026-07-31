import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { primaryButton } from "../../../Theme/buttonStyles";
import Button from "@mui/material/Button";
import spacing from "../../../theme/spacing";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
export default function OurStoryContent() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.hero.contentGap,
        alignItems: "flex-start",
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
        {t("OurStory.title")}
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
        {t("OurStory.description")}
      </Typography>
      <Button
        variant="outlined"
        component={NavLink}
        to="/products"
        aria-label={t("OurStory.button")}
        sx={{
          ...primaryButton,
          mt: 2,
        }}
      >
        {t("OurStory.button")}
      </Button>
    </Box>
  );
}
