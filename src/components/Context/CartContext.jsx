import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedcart = localStorage.getItem("app_cart");
      if (savedcart && savedcart !== "undefined") {
        return JSON.parse(savedcart);
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
    }
    return [];
  });
  useEffect(() => {
    localStorage.setItem("app_cart", JSON.stringify(cart));
  }, [cart]);
  function addToCart(product) {
    let existingProduct = cart.find((item) => item.id == product.id);
    if (existingProduct) {
      let updatedCart = cart.map((item) => {
        if (item.id == product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  function updateQuantity(productId, amount) {
    let updatedCart = cart.map((item) => {
      if (item.id == productId) {
        return { ...item, quantity: item.quantity + amount };
      } else {
        return item;
      }
    });
    setCart(updatedCart);
  }
  function deleteProduct(productId) {
    let updatedCart = cart.filter((item) => item.id != productId);

    setCart(updatedCart);
  }
  function getTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  function getTotalItems() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }
  function sendOrderToWhatsApp() {
    let phone = "201033438385";

    // 1️⃣ تنسيق المنتجات بشكل واضح ومرتب
    let itemtext = cart
      .map(
        (item, index) =>
          `*${index + 1}. ${item.name}*\n   - العدد: ${item.quantity}\n   - السعر: ${item.price * item.quantity} ج.م`,
      )
      .join("\n\n");

    // 2️⃣ تجميع الرسالة بتنسيق خطوط أنيق يظهر ممتاز في الواتساب
    const fullMessage =
      `*طلب جديد من الموقع*\n` +
      `=========================\n\n` +
      `*تفاصيل المنتجات:*\n\n` +
      `${itemtext}\n\n` +
      `=========================\n` +
      `*الإجمالي الكلي:* *${getTotalPrice()} ج.م*\n` +
      `=========================\n\n` +
      `برجاء تأكيد الطلب والتوصيل.`;

    // 3️⃣ التشفير والفتح
    let safeMessage = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/${phone}?text=${safeMessage}`, "_blank");
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        deleteProduct,
        getTotalPrice,
        getTotalItems,
        sendOrderToWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
