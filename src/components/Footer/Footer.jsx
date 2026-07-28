import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import { NavLink } from "react-router-dom";
import { primaryButton } from "../../Theme/buttonStyles";
import { useTranslation } from "react-i18next";

export default function FooterSection() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        backgroundColor: "#E7F3E5",
        borderTop: "1px solid",
        borderColor: "rgba(74,107,60,.12)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid size={{ xs: 12 }}>
            <FooterBrand />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FooterLinks />
          </Grid>

          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 1,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              component={NavLink}
              to="/sessions"
              sx={primaryButton}
            >
              {t("footer.buttons.bookSession")}
            </Button>

            <Button
              variant="outlined"
              component="a"
              href="https://www.facebook.com/profile.php?id=61568555338359"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1.3,
                borderRadius: "999px",
                borderWidth: "2px",
                borderColor: "primary.main",
                color: "primary.main",
                fontWeight: 600,
                textTransform: "none",
                bgcolor: "transparent",
                transition: ".3s",

                "&:hover": {
                  bgcolor: "primary.main",
                  color: "#fff",
                  borderColor: "primary.main",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {t("footer.buttons.followFacebook")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
