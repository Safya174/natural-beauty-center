import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";

import { primaryButton } from "../../Theme/buttonStyles";

export default function FooterSection() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        backgroundColor:"#E7F3E5",
        borderTop: "1px solid",
        borderColor: "rgba(74,107,60,.12)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
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
              sx={primaryButton}
            >
              Book Session
            </Button>

            <Button
              variant="outlined"
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
              Follow us on Facebook
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}