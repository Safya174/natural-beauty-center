import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Stack } from "@mui/material";
import { primaryButton } from "../../../Theme/buttonStyles";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
export default function SessionsCard({ session }) {
  const { t, i18n } = useTranslation();
  let { getSessionBookingLink } = useContext(CartContext);
  const isArabic = i18n.language === "ar";
  const features = t(session.featuresKey, { returnObjects: true });
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 4,
        overflow: "hidden",

        display: "flex",
        flexDirection: "column",
        height: "100%",

        transition: ".35s",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 45px rgba(74,107,60,.15)",
        },
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={session.image}
          alt={t(session.titleKey)}
          height="300"
          sx={{
            objectFit: "cover",
            transition: ".4s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        {session.tagKey && (
          <Chip
            label={t(session.tagKey)}
            size="small"
            sx={{
              position: "absolute",
              top: "16",
              left: isArabic ? "auto" : 16,
              right: isArabic ? 16 : "auto",
              bgcolor: "primary.main",
              color: "white",
              fontWeight: 700,
              fontSize: "0.75rem",
              borderRadius: "8px",
              px: 1,
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          />
        )}
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          p: 3,
        }}
      >
        {/* عنوان الجلسة */}
        <Typography
          variant="h5"
          color="text.primary"
          fontWeight={700}
          sx={{ mb: 0.5 }}
        >
          {t(session.titleKey)}
        </Typography>

        {/* العنوان الفرعي */}
        <Typography
          variant="subtitle2"
          color="primary.main"
          fontWeight={600}
          sx={{ mb: 1.5 }}
        >
          {t(session.subtitleKey)}
        </Typography>

        {/* وصف الجلسة */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.8,
            mb: 2,
          }}
        >
          {t(session.descriptionKey)}
        </Typography>
        <Stack spacing={1} sx={{ mb: 3, flexGrow: 1 }}>
          {Array.isArray(features) &&
            features.map((feature, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{
                    color: "primary.main",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                  }}
                />
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{ fontSize: "0.85rem", fontWeight: 500 }}
                >
                  {feature}
                </Typography>
              </Box>
            ))}
        </Stack>
        <Button
          variant="contained"
          component="a"
          href={getSessionBookingLink(session.name, isArabic)}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<WhatsAppIcon />}
          sx={{
            ...primaryButton,
            mt: "auto",
            gap: 1,
          }}
        >
          {t(session.buttonKey)}
        </Button>
      </CardContent>
    </Card>
  );
}
