import React from "react";
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
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import logo from "../assets/photo_2026-07-01_19-34-12.jpg";
const pages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Sessions", path: "/sessions" },
  { title: "Products", path: "/products" },
  { title: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (value) => {
    setOpenDrawer(value);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "#E7F3E5", //"background.paper",
          borderLeft: "1px solid",
          borderColor: "#E7F3E5", //"divider",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              height: 75,
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,

                height: "100%",
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{
                  width: 75,
                  backgroundColor: "secondary.main",
                  height: "100%",
                }}
              />

              <Typography
                variant="h5"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                }}
              >
                Natural Beauty Center
              </Typography>
            </Box>

            {/* Desktop Links */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                gap: 1,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.title}
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

            {/* Right Side */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                sx={{
                  color: "text.primary",
                  fontWeight: 600,
                }}
              >
                EN
              </Button>

              <Button
                variant="contained"
                sx={{
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
                Book Session
              </Button>
            </Box>

            {/* Mobile */}

            <IconButton
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },

                color: "primary.main",
              }}
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer */}

      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "background.paper",
          },
        }}
      >
        <List sx={{ mt: 3 }}>
          {pages.map((page) => (
            <ListItem key={page.title} disablePadding>
              <ListItemButton
                component={NavLink}
                to={page.path}
                sx={{
                  "&.active": {
                    color: "primary.main",
                    bgcolor: "secondary.main",
                  },
                }}
                onClick={() => toggleDrawer(false)}
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

          <Box
            sx={{
              px: 2,
              mt: 3,
            }}
          >
            <Button
              fullWidth
              variant="contained"
              component={NavLink}
              to="/sessions"
              sx={{
                bgcolor: "primary.main",
                borderRadius: 3,
                py: 1.3,

                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              Book Session
            </Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
}
