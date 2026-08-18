import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/material";
import { primaryButton } from "../../Theme/buttonStyles";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useTranslation } from "react-i18next";
import ProductModal from "./ProductModal";
import Link from "@mui/material/Link";
export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { addToCart } = useContext(CartContext);
  const isArabic = i18n.language === "ar";

  // دالة لتنسيق الرقم حسب اللغة الحالية (عربي/إنجليزي)
  const formatPrice = (price) => {
    if (price === undefined || price === null) return "";
    return new Intl.NumberFormat(isArabic ? "ar-EG" : "en-US").format(price);
  };

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
      {/* Container للصورة مع الشارة (Badge) */}
      <Box
        sx={{ position: "relative", overflow: "hidden" }}
        onClick={() => setIsModalOpen(true)}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={t(product.nameKey)}
          loading="lazy"
          height="300"
          sx={{
            objectFit: "cover",
            transition: ".4s",

            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />

        {/* عرض الشارة في حال وجودها */}
        {product.badgeKey && (
          <Chip
            label={t(product.badgeKey)}
            size="small"
            sx={{
              position: "absolute",
              top: 16,
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
        <Typography
          variant="h5"
          color="text.primary"
          fontWeight={700}
          sx={{ mb: 1 }}
          onClick={() => setIsModalOpen(true)}
        >
          {t(product.nameKey)}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.8,
            flexGrow: 1,
            mb: 2,
          }}
        >
          {t(product.descriptionKey)}
        </Typography>
        {/* رابط الجلسة الهدية */}
{product.sessionLink && (
  <Box sx={{ mb: 2 }}>
    <Link
      href={product.sessionLink}
      underline="hover"
      sx={{
        color: "primary.main",
        fontWeight: 700,
        fontSize: "0.875rem",
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        transition: "color 0.2s",
        "&:hover": {
          color: "text.primary",
        },
      }}
    >
      ✨ {isArabic ? "تفاصيل الجلسة الهدية (Natural Rabbit Hair)" : "Free Gift Session Details (Natural Rabbit Hair)"}
    </Link>
  </Box>
)}

        {/* سكشن الأسعار والعملة المترجمة بصياغة اتجاه مظبوطة */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 2.5,
            direction: isArabic ? "rtl" : "ltr",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "primary.main",
              fontFamily: "Alexandria",
            }}
          >
            {formatPrice(product.price)} {t("productsSection.currency")}
          </Typography>

          {product.oldPrice && (
            <Typography
              sx={{
                textDecoration: "line-through",
                color: "text.secondary",
                fontSize: "1.1rem",
              }}
            >
              {formatPrice(product.oldPrice)} {t("productsSection.currency")}
            </Typography>
          )}
        </Box>

        <Button
          variant="contained"
          aria-label={t("productsSection.addToCart")}
          sx={{
            ...primaryButton,
            mt: "auto",
          }}
          onClick={() => {
            addToCart(product);
          }}
        >
          {t("productsSection.addToCart")}
        </Button>
      </CardContent>
      <ProductModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
        onAddToCart={addToCart}
      />
    </Card>
  );
}
