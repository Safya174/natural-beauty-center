import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

import spacing from "../../theme/spacing";

export default function AboutSection() {
  return (
    <Box component="section"  sx={{ py: spacing.section.py }}>
      <Container maxWidth="lg">
        <Grid container spacing={10} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <AboutContent />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <AboutImage />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
