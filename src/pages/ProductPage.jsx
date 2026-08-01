import ProductContent from "../components/ProductHome/OurProductContent";
import CategoriesFilter from "../components/ProductHome/CategoryFilter";
import PageTransition from "../components/PageTransition";
import ProductGrid from "../components/ProductHome/productGrid";
import Container from "@mui/material/Container";
import { Helmet } from "react-helmet-async"; // 👈 استيراد الهلمت

export default function ProductPage() {
  return (
    <PageTransition>
      {/* 👈 جزء الـ SEO لصفحة المنتجات */}
      <Helmet>
        <title>منتجاتنا | Natural Beauty Center</title>
        <meta 
          name="description" 
          content="تسوقي أفضل منتجات العناية بالبشرة والجمال الطبيعي. منتجات أصلية وآمنة تماماً للبشرة." 
        />
      </Helmet>

      <ProductContent />
      <CategoriesFilter />
      <Container maxWidth="lg">
        <ProductGrid />
      </Container>
    </PageTransition>
  );
}