import logo from "../../assets/photo_2026-07-01_19-34-12.jpg";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { useTranslation } from "react-i18next";
export default function FooterBrand() {
  const { t,i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        flexDirection:"column",
      
      }}
    >
      <CardMedia
        component="img"
        image={logo}
        alt="Brand Logo"
        sx={{
          width: 200,
        
          borderRadius: "60%",
        }}
      />

      <Typography
        variant="h4"
        sx={{
          color: "primary.main",
          fontWeight: 700,
          fontFamily: "Cormorant Garamond",
          mb: 2,
        }}
      >
        Natural Beauty Center
      </Typography>
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: ".95rem",
          maxWidth: 520,
          textAlign: "center",
          lineHeight: isArabic ? 3 : 1.8,
          mt:0
        }}
        variant="body1"
      >
        {t("footer.description")}
      </Typography>
    </Box>
  );
}
