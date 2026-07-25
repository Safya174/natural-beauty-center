import { Box, Card, Typography, IconButton } from "@mui/material";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import QuantityControl from "./QuantityControl";
import CardMedia from "@mui/material/CardMedia";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

export default function CartItem() {
  let { cart, updateQuantity, deleteProduct } = useContext(CartContext);

  return (
    <>
      {cart.map((item) => (
        <Card
          key={item.id} // 👈 1. ضفنا الـ key هنا ضروري جداً
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 4,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            minHeight: 220,
            mb: 2, // ضفتلك مسافة بسيطة بين كل كارت والتاني
            transition: ".35s",

            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 20px 45px rgba(74,107,60,.15)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 4,
            }}
          >
            {/* Left Side */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Delete */}
              <IconButton
                sx={{
                  alignSelf: "flex-start",
                  mb: 2,
                }}
                onClick={() => {
                  deleteProduct(item.id);
                }}
              >
                <DeleteOutlineTwoToneIcon />
              </IconButton>

              {/* Category */}
              <Typography variant="caption" color="text.secondary">
                {item.category}{" "}
                {/* 👈 2. عدلناها من cart.category لـ item.category */}
              </Typography>

              {/* Name */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  fontFamily: "Alexandria",
                  mt: 1,
                }}
              >
                {item.name}
              </Typography>

              {/* Price */}
              <Typography
                variant="h6"
                color="primary.main"
                sx={{
                  fontWeight: 700,
                  mt: 2,
                }}
              >
                {item.price} EGP
              </Typography>

              {/* Quantity */}
              <Box sx={{ mt: 3 }}>
                <QuantityControl
                  quantity={item.quantity}
                  onDecrease={() => {
                    if (item.quantity > 1) {
                      updateQuantity(item.id, -1);
                    } else {
                      deleteProduct(item.id);
                    }
                  }}
                  onIncrease={() => updateQuantity(item.id, 1)}
                />
              </Box>
            </Box>

            {/* Image */}
            <Box sx={{ borderRadius: 4 }}>
              <CardMedia
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: 140,
                  height: 140,
                  borderRadius: 4,
                  objectFit: "contain",
                  transition: ".4s",

                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Box>
        </Card>
      ))}
    </>
  );
}
