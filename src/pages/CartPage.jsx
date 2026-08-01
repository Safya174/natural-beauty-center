import CartContent from "../components/Cart/CartHeader";
import CartSection from "./../components/Cart/CartSection";
import PageTransition from "../components/PageTransition";
import { Helmet } from "react-helmet-async"; 

export default function CartPage() {
  return (
    <PageTransition>
      
      <Helmet>
        <title>سلة المشتريات | Natural Beauty Center</title>
        <meta 
          name="description" 
          content="مراجعة المنتجات والجلسات المختارة في سلة المشتريات وإتمام الطلب عبر الواتساب." 
        />
      </Helmet>

      <CartContent />
      <CartSection />
    </PageTransition>
  );
}