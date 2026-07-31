import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { secondaryButton, primaryButton } from "../../Theme/buttonStyles";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function HeroButtons() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2.5,
        alignItems: "center",
        mt: 1,
      }}
    >
      <Button
        variant="contained"
        component={NavLink}
        to="/products"
        aria-label={t("hero.exploreProducts")} 
        sx={{
          ...primaryButton,
        }}
      >
        {t("hero.exploreProducts")}
      </Button>

      <Button
        variant="outlined"
        component={NavLink}
        to="/sessions"
        aria-label={t("hero.bookSession")} 
        sx={{
          ...secondaryButton,
        }}
      >
        {t("hero.bookSession")}
      </Button>
    </Box>
  );
}