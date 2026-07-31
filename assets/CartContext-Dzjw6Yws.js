import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{dt as t,it as n}from"./buttonStyles-CunNRhB8.js";var r=e(t(),1),i=n(),a=(0,r.createContext)(),o=({children:e})=>{let[t,n]=(0,r.useState)(()=>{try{let e=localStorage.getItem(`app_cart`);if(e&&e!==`undefined`)return JSON.parse(e)}catch(e){console.error(`Failed to parse cart from localStorage:`,e)}return[]});(0,r.useEffect)(()=>{localStorage.setItem(`app_cart`,JSON.stringify(t))},[t]);function o(e,r=1){if(t.find(t=>t.id==e.id)){let r=t.map(t=>t.id==e.id?{...t,quantity:t.quantity+1}:t);n(r)}else n([...t,{...e,quantity:r}])}function s(e,r){let i=t.map(t=>t.id==e?{...t,quantity:t.quantity+r}:t);n(i)}function c(e){let r=t.filter(t=>t.id!=e);n(r)}function l(){return t.reduce((e,t)=>e+t.price*t.quantity,0)}function u(){return t.reduce((e,t)=>e+t.quantity,0)}function d({lang:e}){let n=t.map((t,n)=>e?`*${n+1}. ${t.name}*\n   - العدد: ${t.quantity}\n   - السعر: ${t.price*t.quantity} ج.م`:`*${n+1}. ${t.name}*\n   - Qty:${t.quantity}\n   - Price: ${t.price*t.quantity} EGP`).join(`

`),r=e?`*طلب جديد من الموقع*
=========================

*تفاصيل المنتجات:*

${n}\n\n=========================\n*الإجمالي الكلي:* *${l()} ج.م*\n=========================\n\nبرجاء تأكيد الطلب والتوصيل.`:`*New Order from Website*
=========================

*Order Details:*

${n}\n\n=========================\n*Total Price:* *${l()} EGP*\n=========================\n\nPlease confirm the order and delivery details.`;return`https://wa.me/201033438385?text=${encodeURIComponent(r)}`}function f(e,t){let n=t==`ar`?`مرحباً، أود حجز جلسة: *${e}*`:`Hello, I would like to book: *${e}*`;return`https://wa.me/201033438385?text=${encodeURIComponent(n)}`}return(0,i.jsx)(a.Provider,{value:{cart:t,addToCart:o,updateQuantity:s,deleteProduct:c,getTotalPrice:l,getTotalItems:u,sendOrderToWhatsApp:d,getSessionBookingLink:f},children:e})};export{o as n,a as t};