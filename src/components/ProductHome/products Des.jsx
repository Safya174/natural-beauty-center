import horsetailSpray from "../../assets/pro3.WebP";
import sulfateFreeShampoo from "../../assets/pro1.WebP" ;
import antimonyOil from "../../assets/pro2.WebP"
import stylingCream from "../../assets/pro4.WebP"

const products = [
  {
    id: 1,
    name: "Horsetail Spray",
    image: horsetailSpray,
    category: "Hair Care",
    badge: "Best Seller",
    price: 160,
    oldPrice: 195,
    description:
      "Enriched with horsetail extract to nourish hair, strengthen roots, and support healthy growth",
  },

  {
    id: 2,
    name: "Natural Sulfate-Free Shampoo",
    image: sulfateFreeShampoo,
    category: "Hair Care",
    badge: "Natural",
    price: 225,
    oldPrice: 270,
    description:
      "A gentle sulfate-free shampoo that cleanses the scalp while keeping hair soft and hydrated",
  },

  {
    id: 3,
    name: "Antimony Hair Growth Oil",
    image: antimonyOil,
    category: "Hair Care",
    badge: "Hair Growth",
    price: 350,
    oldPrice: 450,
    description:
      "A powerful herbal oil that strengthens roots, promotes healthy hair growth, and reduces hair loss.",
  },

  {
    id: 4,
    name: "Natural Hair Styling Cream",
    image: stylingCream,
    category: "Hair Styling",
    badge: "Premium",
    price: 195,
    oldPrice: 235,
    description:
      "A lightweight styling cream enriched with natural oils for soft hold and healthy shine .",
  },
];

export default products;