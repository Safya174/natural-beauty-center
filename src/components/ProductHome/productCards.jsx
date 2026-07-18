
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";
import products from './products Des';


export default function ProductCards() {
  return (
    <Grid container spacing={4}>
      {products.map(product =>(
         <Grid size={{ xs: 12, sm:6, lg: 3}} key={product.name} >
            <ProductCard product={product} ></ProductCard>
        </Grid>
      ))}


    </Grid>
  );
}
