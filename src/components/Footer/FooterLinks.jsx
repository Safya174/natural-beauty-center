// ✅ التعديل هنا: استخدام modular imports لتحسين الأداء
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FooterLinks() {
  const { t } = useTranslation();
  const pages = [
    { title: t("nav.home"), path: "/" },
    { title: t("nav.about"), path: "/about" },
    { title: t("nav.sessions"), path: "/sessions" },
    { title: t("nav.products"), path: "/products" },
    { title: t("nav.contact"), path: "/contact" },
  ];

  return (
    <Box
      sx={{
        borderTop: "1px solid rgba(74,107,60,.12)",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      {pages.map((page) => (
        <Button
          key={page.title}
          component={Link}
          to={page.path}
          sx={{
            color: "text.primary",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 500,
            px: 2,
            mt: 3,
            "&:hover": {
              color: "primary.main",
              backgroundColor: "rgba(74,107,60,.08)",
            },
          }}
        >
          {page.title}
        </Button>
      ))}
    </Box>
  );
}