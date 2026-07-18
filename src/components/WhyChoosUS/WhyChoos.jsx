import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import WhyChoosContent from "./WhyChoosContent";
import  FeaturedCards  from '../FeatureCards/FeatureCards'
import spacing from "../../theme/spacing";


export default function WhySection() {
  return (
    <Box component="section"  sx={{ py: spacing.section.py,backgroundColor:"white"}}>
      <Container maxWidth="lg">
        <Grid container spacing={10} alignItems="center">
          <Grid size={{ xs: 12 }}>
            <WhyChoosContent></WhyChoosContent>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FeaturedCards></FeaturedCards>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
