import CartContent from "../components/Cart/CartHeader";
import CartSection from "./../components/Cart/CartSection";
import PageTransition from "../components/PageTransition";
export default function CartPage() {
  return (
    <PageTransition>
      <CartContent />
      <CartSection />
    </PageTransition>
  );
}
