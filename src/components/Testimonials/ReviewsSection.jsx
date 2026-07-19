import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import spacing from "../../theme/spacing";
import TestimonialsHeader from "./TestimonialsHeader";
import ReviewCard from "./ReviewCard";
import review1 from "../../assets/review1.Webp";
import review2 from "../../assets/review2.Webp";
import review3 from "../../assets/review3.Webp";
export default function ReviewSection() {
  return (
    <Box
      component="section"
      sx={{ py: spacing.section.py, backgroundColor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid size={{ xs: 12 }}>
            <TestimonialsHeader></TestimonialsHeader>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }} sx={{ maxWidth: 430 }}>
            <ReviewCard image={review1} name="Customer Review"></ReviewCard>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{ maxWidth: 430 }}>
            <ReviewCard image={review2} name="Customer Review"></ReviewCard>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{ maxWidth: 430 }}>
            <ReviewCard image={review3} name="Customer Review"></ReviewCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
