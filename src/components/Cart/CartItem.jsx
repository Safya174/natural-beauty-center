import { Box, Card, Typography, IconButton } from "@mui/material";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import QuantityControl from "./QuantityControl";
import CardMedia from "@mui/material/CardMedia";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export default function CartItem() {
  const { cart, updateQuantity, deleteProduct } = useContext(CartContext);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // دالة تحويل الأرقام حسب اللغة الحالية
  const formatPrice = (price) => {
    if (price === undefined || price === null) return "";
    return new Intl.NumberFormat(isArabic ? "ar-EG" : "en-US").format(price);
  };

  return (
    <>
      {cart.map((item) => (
        <Card
          key={item.id}
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 4,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            minHeight: 220,
            mb: 2,
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
            {/* Left Side / البيانات والمعلومات */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Delete / زر الحذف */}
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

              {/* Category / القسم مترجم */}
              {item.categoryKey && (
                <Typography variant="caption" color="text.secondary">
                  {t(item.categoryKey)}
                </Typography>
              )}

              {/* Name / اسم المنتج مترجم */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  fontFamily: "Alexandria",
                  mt: 1,
                }}
              >
                {t(item.nameKey)}
              </Typography>

              {/* Price / السعر مترجم بالأرقام والعملة */}
              <Typography
                variant="h6"
                color="primary.main"
                sx={{
                  fontWeight: 700,
                  mt: 2,
                  direction: isArabic ? "rtl" : "ltr",
                }}
              >
                {formatPrice(item.price)} {t("productsSection.currency")}
              </Typography>

              {/* Quantity / التحكم بالكمية */}
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

            {/* Image / صورة المنتج */}
            <Box sx={{ borderRadius: 4 }}>
              <CardMedia
                component="img"
                src={item.image}
                alt={t(item.nameKey || item.name)}
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