import React, { useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Badge,
  CardMedia,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { CartContext } from "./Context/CartContext";
import { NavLink } from "react-router-dom";
import logo from "../assets/photo_2026-07-01_19-34-12.webp";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const { getTotalItems } = useContext(CartContext);
  const { t, i18n } = useTranslation();

  const pages = [
    { title: t("nav.home"), path: "/" },
    { title: t("nav.about"), path: "/about" },
    { title: t("nav.sessions"), path: "/sessions" },
    { title: t("nav.products"), path: "/products" },
    { title: t("nav.contact"), path: "/contact" },
  ];

  const toggleDrawer = (value) => {
    setOpenDrawer(value);
  };

  const handleLanguageChange = () => {
    const nextLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(nextLang);
    document.dir = nextLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "#E7F3E5",
          borderLeft: "1px solid",
          borderColor: "#E7F3E5",
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Toolbar
            sx={{
              height: 70,
              justifyContent: "space-between",
              px: { xs: 2.5, sm: 3 },
            }}
          >
            {/* Logo + Name */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                minWidth: 0,
                pr: i18n.language === "ar" ? 1 : 0,
              }}
            >
              <CardMedia
                component="img" 
                image={logo}
                alt="logo"
                sx={{
                  width: { xs: 45, sm: 55, md: 72 }, 
                  height: { xs: 45, sm: 55, md: 72 },
                  objectFit: "contain",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />

              <Typography
                variant="h6"
                noWrap
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  fontSize: { xs: "0.9rem", sm: "1.2rem" },
                }}
              >
                Natural Beauty Center
              </Typography>
            </Box>

            {/* Desktop Links */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.path}
                  component={NavLink}
                  to={page.path}
                  sx={{
                    color: "text.primary",
                    fontWeight: 500,
                    px: 2,
                    borderRadius: 3,

                    "&:hover": {
                      bgcolor: "secondary.main",
                      color: "primary.main",
                    },

                    "&.active": {
                      color: "primary.main",
                      bgcolor: "secondary.main",
                    },
                  }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>

            {/* Right Side Control Panel */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {/* Language Button */}
              <Button
                onClick={handleLanguageChange}
                
                startIcon={
                  <LanguageIcon sx={{ fontSize: "1.2rem !important" }} />
                }
                sx={{
                  color: "primary.main",
                  minWidth: "auto",
                  px: 1,
                  py: 0.5,
                  gap: i18n.language == "ar"? 1.3 : 0,
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: "rgba(0,0,0,0.04)",
                  },
                }}
              >
                {i18n.language === "ar" ? "EN" : "Ar"}
              </Button>

              {/* Cart Desktop */}
              <IconButton
                component={NavLink}
                to="/cart"
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "text.primary",
                  borderRadius: 3,
                  "&:hover": {
                    bgcolor: "secondary.main",
                    color: "primary.main",
                  },
                  "&.active": {
                    bgcolor: "secondary.main",
                    color: "primary.main",
                  },
                  mx:2
                }}
              >
                <Badge badgeContent={getTotalItems()} color="error">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>

              {/* Book Session Desktop */}
              <Button
                component={NavLink}
                to="/sessions"
                variant="contained"
                sx={{
                  display: { xs: "none", md: "inline-flex" },
                  bgcolor: "primary.main",
                  color: "#fff",
                  borderRadius: 3,
                  px: 3,
                  py: 1.2,
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "primary.dark",
                    boxShadow: "none",
                  },
                }}
              >
                {t("nav.bookSession")}
              </Button>

              {/* Mobile Menu Icon */}
              <IconButton
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: "primary.main",
                  p: 0.5,
                }}
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 270,
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: "column",
            justify: "space-between",
            pb: 3,
          },
        }}
      >
        <Box>
          <List sx={{ mt: 2 }}>
            {pages.map((page) => (
              <ListItem key={page.path} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={page.path}
                  onClick={() => toggleDrawer(false)}
                  sx={{
                    py: 1.5,
                    "&.active": {
                      color: "primary.main",
                      bgcolor: "secondary.main",
                    },
                  }}
                >
                  <ListItemText
                    primary={page.title}
                    primaryTypographyProps={{
                      color: "text.primary",
                      fontWeight: 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            {/* Cart Option in Mobile Menu */}
            <ListItem disablePadding>
              <ListItemButton
                component={NavLink}
                to="/cart"
                onClick={() => toggleDrawer(false)}
                sx={{
                  py: 1.5,
                  "&.active": {
                    color: "primary.main",
                    bgcolor: "secondary.main",
                  },
                }}
              >
                <Badge
                  badgeContent={getTotalItems()}
                  color="error"
                  sx={{ mr: 2 }}
                >
                  <ShoppingCartOutlinedIcon />
                </Badge>
                <ListItemText
                  primary={t("nav.cart")}
                  primaryTypographyProps={{
                    color: "text.primary",
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        <Box sx={{ px: 2 }}>
          <Button
            fullWidth
            variant="contained"
            component={NavLink}
            to="/sessions"
            onClick={() => toggleDrawer(false)}
            sx={{
              bgcolor: "primary.main",
              borderRadius: 3,
              py: 1.3,
              boxShadow: "none",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            {t("nav.bookSession")}
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
