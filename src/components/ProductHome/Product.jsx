import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductCards from './productCards'
import ProductContent from './ProductCcontent'
import spacing from "../../theme/spacing";

export default function OurProductsSection() {
  return (
    <Box component="section"  sx={{ py: spacing.section.py }}>
      <Container maxWidth="lg">
        <Grid container spacing={10} alignItems="center">
          <Grid size={{ xs: 12}}>
             <ProductContent></ProductContent>
          </Grid>
           
          <Grid size={{ xs: 12 }}>
             <ProductCards></ProductCards>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
