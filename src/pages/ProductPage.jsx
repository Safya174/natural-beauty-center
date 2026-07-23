import ProductContent from "../components/ProductHome/OurProductContent";
import CategoriesFilter from "../components/ProductHome/CategoryFilter";
import PageTransition from "../components/PageTransition";
import ProductGrid from "../components/ProductHome/productGrid";
import Container from "@mui/material/Container";

export default function ProductPage() {
  return (
    <PageTransition>
      <ProductContent/>
      <CategoriesFilter/>
     <Container maxWidth="lg">

      <ProductGrid  />
            </Container>

    </PageTransition>
  );
}
