import { Box, Button, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { primaryButton } from "../../Theme/buttonStyles";
import { useTranslation } from "react-i18next";
export default function ContactMap() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <Box>
      {/* Section Title */}
      <Typography
        variant="overline"
        sx={{
          display: "block",
          textAlign: "center",
          fontFamily: "Alexandria",
          fontSize: "1rem",
          letterSpacing: isArabic ? "normal" : 2,
          textTransform: "uppercase",
          color: "primary.main",
          fontWeight: 600,
          mt: 8,
        }}
      >
        {t("contact.location.subtitle")}
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontFamily: "Alexandria",
          fontWeight: 700,
          color: "text.primary",
          textAlign: "center",
          mt: 1,
          mb: 4,
        }}
      >
        {t("contact.location.title")}
      </Typography>

      {/* Google Map */}
      <Box
        sx={{
          overflow: "hidden",
          borderRadius: 8,
          boxShadow: "0 20px 50px rgba(0,0,0,.08)",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3451.4998846664807!2d31.331092199999997!3d30.1085063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1784738826529!5m2!1sar!2seg"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>

      {/* CTA */}
      <Box
        component="section"
        sx={{
          py: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="overline"
          sx={{
            fontFamily: "Alexandria",
            fontSize: "1rem",
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "primary.main",
            fontWeight: 600,
          }}
        >
          {t("contact.booking.subtitle")}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontFamily: "Alexandria",
            fontWeight: 700,
            color: "text.primary",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.3,
            mt: 1,
          }}
        >
          {t("contact.booking.title")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            color: "text.secondary",
            textAlign: "center",
            maxWidth: 650,
            lineHeight: 1.8,
          }}
        >
          {t("contact.booking.description")}
        </Typography>

        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          sx={{
            ...primaryButton,
            mt: 4,
            px: 5,
            py: 1.5,
            gap: 1.5
          }}
        >
            {t("contact.booking.whatsappBtn")}
        </Button>
      </Box>
    </Box>
  );
}
