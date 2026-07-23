import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MinLayout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from './pages/ProductPage';
import ContactUs from "./components/ContactUs/Contactus";
import AOS from "aos";
import "aos/dist/aos.css";


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
  
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MinLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactUs/>} />
          <Route path="products" element={<ProductPage/>} />
        </Route>
      </Routes>
    </AnimatePresence>
   
    
  );
}

export default App;