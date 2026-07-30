import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import QuantityControl from "../Cart/QuantityControl";

export default function ProductModal({ open, onClose, product, onAddToCart }) {
  const { t, i18n } = useTranslation();
  const [quantity, setQuantity] = useState(1);

  // إعادة تعيين الكمية عند فتح المودال لضمان بدء العداد بـ 1
  useEffect(() => {
    if (open) {
      setQuantity(1);
    }
  }, [open, product]);

  const isArabic = i18n.language === "ar";

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        dir: isArabic ? "rtl" : "ltr", // ضبط اتجاه المودال بالكامل بناءً على اللغة
        sx: {
          borderRadius: "24px",
          p: { xs: 1, md: 2 },
          overflow: "visible", // السماح بظهور أي عناصر تخرج قليلاً عن الإطار
          position: "relative",
        },
      }}
    >
      {/* زر الإغلاق X المظبوط ديناميكياً */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 16,
          right: isArabic ? "auto" : 16,
          left: isArabic ? 16 : "auto",
          zIndex: 30, // ضمان ظهوره فوق صورة المنتج
          backgroundColor: "rgba(0, 0, 0, 0.04)",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.08)" },
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ p: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {/* الجانب الأول: صورة المنتج */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "280px", md: "380px" },
              borderRadius: "18px",
              overflow: "hidden",
              backgroundColor: "#F9F8F3",
            }}
          >
            <Box
              component="img"
              src={product.image}
              alt={t(product.nameKey)}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {product.badgeKey && (
              <Chip
                label={t(product.badgeKey)}
                sx={{
                  position: "absolute",
                  top: 12,
                  right: isArabic ? 12 : "auto",
                  left: isArabic ? "auto" : 12,
                  backgroundColor: "#4F6F52",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                }}
              />
            )}
          </Box>

          {/* الجانب الثاني: تفاصيل المنتج وأزرار الحركة */}
          <Stack spacing={2} sx={{ textAlign: isArabic ? "right" : "left" }}>
            {/* عنوان المنتج */}
            <Typography variant="h5" fontWeight="bold" color="#2C3E2E">
              {t(product.nameKey)}
            </Typography>

            {/* الحجم */}
            {product.volumeKey && (
              <Typography variant="body2" color="text.secondary">
                {t(product.volumeKey)}
              </Typography>
            )}

            {/* السعر والخصم */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h5" fontWeight="bold" color="#4F6F52">
                {product.price} {isArabic ? "ج.م" : "EGP"}
              </Typography>
              {product.oldPrice && (
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ textDecoration: "line-through" }}
                >
                  {product.oldPrice} {isArabic ? "ج.م" : "EGP"}
                </Typography>
              )}
            </Stack>

            {/* الوصف */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.7 }}
            >
              {t(product.fullDescriptionKey || product.descriptionKey)}
            </Typography>

            {/* طريقة الاستخدام */}
            {product.howToUseKey && (
              <Box
                sx={{
                  backgroundColor: "#F9F8F3",
                  p: 2,
                  borderRadius: "12px",
                  borderLeft: isArabic ? "none" : "4px solid #4F6F52",
                  borderRight: isArabic ? "4px solid #4F6F52" : "none",
                }}
              >
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  color="#2C3E2E"
                  mb={0.5}
                >
                  {isArabic ? "طريقة الاستخدام:" : "How to use:"}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block", lineHeight: 1.6 }}
                >
                  {t(product.howToUseKey)}
                </Typography>
              </Box>
            )}

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1.5, sm: 2 }}
              flexWrap="nowrap"
              alignItems="center"
              sx={{ pt: 1, width: "100%" }}
            >
              <Box
                sx={{
                 
                  flexShrink: 0,
                  minWidth: "120px",
                  mx: 0,
                  display: "flex",
                  justifyContent: "center",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                <QuantityControl sx={{width:"fullWidth"}}
                  quantity={quantity}
                  onIncrease={() => setQuantity((q) => q + 1)}
                  onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
                />
              </Box>

              <Button
                variant="contained"
                fullWidth
                onClick={handleAddToCart}
                startIcon={
                  <ShoppingBagOutlinedIcon
                    sx={{ ml: isArabic ? 1 : 0, mr: isArabic ? 0 : 1 }}
                  />
                }
                sx={{
                  flex: 1,
                  backgroundColor: "#4F6F52",
                  "&:hover": { backgroundColor: "#2C3E2E" },
                  borderRadius: "30px",
                  py: 1.2,
                  fontWeight: "bold",
                  boxShadow: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {t("productsSection.addToCart", "Add To Cart")}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
