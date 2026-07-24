import CartItem from "./CartItem";
import CartSummary from "./Cartsummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


export default function CartSection() {
  return (
    <Box component="section" sx={{ pb: 8}}>
      <Container maxWidth="lg">
        <Grid container spacing={10} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <CartItem />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <CartSummary />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
