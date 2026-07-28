import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { secondaryButton, primaryButton } from "../../Theme/buttonStyles";
import { useTranslation } from "react-i18next";

export default function HeroButtons() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2.5, // 🟢 الـ gap بيدي مسافة حقيقية مضمونة بين الزرارين في كل اللغات من غير Stack
        alignItems: "center",
        mt: 1,
      }}
    >
      <Button
        variant="contained"
        sx={{
          ...primaryButton,
        }}
      >
        {t("hero.exploreProducts")}
      </Button>

      <Button
        variant="outlined"
        sx={{
          ...secondaryButton,
        }}
      >
        {t("hero.bookSession")}
      </Button>
    </Box>
  );
}
