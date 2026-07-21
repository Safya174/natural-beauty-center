import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import spacing from "../../../theme/spacing";
import  GalleryContent from './GalleryContent'
import GalleryGrid from "./GalleryGrid";

export default function GallerySection() {
  return (
    <Box
      component="section"
      sx={{ py: spacing.section.py, backgroundColor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid size={{ xs: 12 }}>
            <GalleryContent/>
          </Grid>

          <Grid size={{ xs: 12 }}  >
            <GalleryGrid/>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
