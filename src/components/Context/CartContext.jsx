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
  function addToCart(product,quantity=1) {
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
      setCart([...cart, { ...product, quantity: quantity }]);
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
  function sendOrderToWhatsApp({ lang }) {
    let phone = "201033438385";

    let itemtext = cart
      .map((item, index) => {
        if (lang) {
          return `*${index + 1}. ${item.name}*\n   - العدد: ${item.quantity}\n   - السعر: ${item.price * item.quantity} ج.م`;
        } else {
          return `*${index + 1}. ${item.name}*\n   - Qty:${item.quantity}\n   - Price: ${item.price * item.quantity} EGP`;
        }
      })
      .join("\n\n");

    const fullMessage = lang
      ? `*طلب جديد من الموقع*\n` +
        `=========================\n\n` +
        `*تفاصيل المنتجات:*\n\n` +
        `${itemtext}\n\n` +
        `=========================\n` +
        `*الإجمالي الكلي:* *${getTotalPrice()} ج.م*\n` +
        `=========================\n\n` +
        `برجاء تأكيد الطلب والتوصيل.`
      : `*New Order from Website*\n` +
        `=========================\n\n` +
        `*Order Details:*\n\n` +
        `${itemtext}\n\n` +
        `=========================\n` +
        `*Total Price:* *${getTotalPrice()} EGP*\n` +
        `=========================\n\n` +
        `Please confirm the order and delivery details.`;

    let safeMessage = encodeURIComponent(fullMessage);
    return `https://wa.me/${phone}?text=${safeMessage}`;
  }
  function getSessionBookingLink(SessionName, Language) {
    const phone = "201033438385";
    let message =
      Language == "ar"
        ? `مرحباً، أود حجز جلسة: *${SessionName}*`
        : `Hello, I would like to book: *${SessionName}*`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
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
        getSessionBookingLink,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
