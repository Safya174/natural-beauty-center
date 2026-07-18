import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const pages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Sessions", path: "/sessions" },
  { title: "Products", path: "/products" },
  { title: "Contact", path: "/contact" },
];

export default function FooterLinks() {
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
