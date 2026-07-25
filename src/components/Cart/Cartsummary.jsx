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

export default function CartSummary() {
  let { getTotalPrice, getTotalItems, sendOrderToWhatsApp } =
    useContext(CartContext);
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
        Order Summary
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
        <Typography color="text.secondary">Number of Products</Typography>

        <Typography fontWeight={600} color="text.primary">
          {getTotalItems()}
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
        <Typography color="text.secondary">Delivery</Typography>

        <Typography fontWeight={600} color="text.primary">
          To be confirmed
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
          Total
        </Typography>

        <Typography variant="h4" fontWeight={700} color="primary.main">
          {getTotalPrice()}
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
          Your order will be reviewed and confirmed through WhatsApp before
          delivery.
        </Typography>
      </Box>

      {/* Buttons */}
      <Button
        variant="contained"
        fullWidth
        startIcon={<WhatsAppIcon />}
        sx={{
          ...primaryButton,
          mb: 2,
        }}
        onClick={sendOrderToWhatsApp}
      >
        Send Order via WhatsApp
      </Button>

      <Button
        variant="outlined"
        fullWidth
        component={NavLink}
        to="/products"
        startIcon={<ShoppingBagOutlinedIcon />}
        sx={secondaryButton}
      >
        Continue Shopping
      </Button>
    </Box>
  );
}
