import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MinLayout from "./layouts/Layout";
import { CartProvider } from "./components/Context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";

// 🚀 Code Splitting: تحميل الصفحات عند الطلب فقط
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const ContactPage = lazy(() => import("./pages/Contactuspage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const SessionsPage = lazy(() => import("./pages/SessionsPage"));

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <CartProvider>
      <AnimatePresence mode="wait">
        <Suspense fallback={null}>
          <Routes location={location} key={location.pathname}>
            <Route element={<MinLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="products" element={<ProductPage />} />
              <Route path="sessions" element={<SessionsPage />} />
              <Route path="cart" element={<CartPage />} />
            </Route>
          </Routes>
        </Suspense>
      </AnimatePresence>
    </CartProvider>
  );
}

export default App;