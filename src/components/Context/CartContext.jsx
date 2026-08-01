import { createContext, useState, useEffect } from "react";
import i18n from "i18next"; // 👈 استيراد i18n لترجمة nameKey مباشرة

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

  function addToCart(product, quantity = 1) {
    let existingProduct = cart.find((item) => item.id == product.id);

    if (existingProduct) {
      let updatedCart = cart.map((item) => {
        if (item.id == product.id) {
          return {
            ...item,
            ...product,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: quantity,
        },
      ]);
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

  // 👈 الفانكشن المعدلة بالكامل
  function sendOrderToWhatsApp({ lang }) {
    let phone = "201033438385";
    const isArabic = lang === "ar";

    let itemtext = cart
      .map((item, index) => {
        // ترجمة nameKey مباشرة بحسب اللغة المطلوبة للرسالة
        const productTitle = item.nameKey
          ? i18n.t(item.nameKey, { lng: lang })
          : item.title || item.name || "منتج";

        const qty = item.quantity || 1;
        const price = item.price || 0;

        if (isArabic) {
          return `*${index + 1}. ${productTitle}*\n   - العدد: ${qty}\n   - السعر: ${price * qty} ج.م`;
        } else {
          return `*${index + 1}. ${productTitle}*\n   - Qty: ${qty}\n   - Price: ${price * qty} EGP`;
        }
      })
      .join("\n\n");

    const fullMessage = isArabic
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
  // دالة لتفريغ السلة تماماً
function clearCart() {
  setCart([]);
  
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
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};