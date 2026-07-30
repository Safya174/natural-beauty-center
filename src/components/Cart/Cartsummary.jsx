import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { secondaryButton, primaryButton } from "../../Theme/buttonStyles";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function CartSummary() {
  let { getTotalPrice, getTotalItems, sendOrderToWhatsApp } =
    useContext(CartContext);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const formatPrice = (price) => {
    if (price === undefined || price === null) return "";
    return new Intl.NumberFormat(isArabic ? "ar-EG" : "en-US").format(price);
  };

  return (
    <Box
      sx={{
        borderRadius: 4,
        p: 4,
        backgroundColor: "background.paper",
        position: "sticky",
        top: 100,

        transition: ".35s",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 45px rgba(74,107,60,.15)",
        },
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          color: "text.primary",
          fontFamily: "Alexandria",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        {t("cart.orderSummary")}
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Products Count */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography color="text.secondary">
          {t("cart.numberOfProducts")}
        </Typography>

        <Typography fontWeight={600} color="text.primary">
          {formatPrice(getTotalItems())}
        </Typography>
      </Box>

      {/* Delivery */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography color="text.secondary">{t("cart.delivery")}</Typography>

        <Typography fontWeight={600} color="text.primary">
          {t("cart.toBeConfirmed")}
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Total */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5" fontWeight={700} color="text.primary">
          {t("cart.total")}
        </Typography>

        <Typography variant="h4" fontWeight={700} color="primary.main">
          {formatPrice(getTotalPrice())}
        </Typography>
      </Box>

      {/* Note */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 1.5,
          bgcolor: "secondary.main",
          borderRadius: 3,
          p: 2.5,
          mb: 4,
        }}
      >
        <InfoOutlinedIcon
          sx={{
            color: "primary.main",
            mt: 0.3,
          }}
        />

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
          }}
        >
          {t("cart.note")}
        </Typography>
      </Box>

      {/* Buttons */}
      <Button
        component="a"
        herf={sendOrderToWhatsApp(isArabic)}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        fullWidth
        startIcon={<WhatsAppIcon />}
        sx={{
          ...primaryButton,
          mb: 2,

          gap: 1.5,
        }}
        onClick={sendOrderToWhatsApp}
      >
        {t("cart.sendWhatsApp")}
      </Button>

      <Button
        variant="outlined"
        fullWidth
        component={NavLink}
        to="/products"
        startIcon={<ShoppingBagOutlinedIcon />}
        sx={{ ...secondaryButton, gap: 1.5 }}
      >
        {t("cart.continueShopping")}
      </Button>
    </Box>
  );
}
