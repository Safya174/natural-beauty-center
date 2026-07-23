import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";
import products from "./products Des";

export default function ProductGrid({ limit , py = 12 }) {
  let displayProduct = limit ? products.slice(0, 4) : products;
  return (
    <Grid
      container
      spacing={4}
      sx={{
        py:py
      
      }}
    >
      {displayProduct.map((product) => (
        <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={product.name}>
          <ProductCard product={product}></ProductCard>
        </Grid>
      ))}
    </Grid>
  );
}
