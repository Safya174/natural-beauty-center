import horsetailSpray from "../../assets/pro3.WebP";
import sulfateFreeShampoo from "../../assets/pro1.WebP";
import antimonyOil from "../../assets/pro2.WebP";
import stylingCream from "../../assets/pro4.WebP";
import naturalHerbalHairBalm from "../../assets/pro5.WebP";
import spirulinaCapsules from "../../assets/pro6.WebP"
import indianCostusCapsules from "../../assets/pro7.WebP"
import nessFatCream from "../../assets/pro8.WebP"
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
  {
    id: 5,
    name: "Natural Herbal Hair Balm",
    image: naturalHerbalHairBalm,
    category: "Hair Care",
    badge: "Natural",
    price: 200,
    oldPrice: 250,
    description:
      "Deeply nourishing herbal hair balm that hydrates, repairs frizz, strengthens hair, and leaves it silky, soft, and naturally shiny.",
  },
  {
    id: 6,
    name: "Organic Spirulina Capsules",
    image: spirulinaCapsules,
    category: "Wellness",
    badge: "Organic",
    price: 350,
    oldPrice: 420,
     description:
  "Boost energy, strengthen immunity, and nourish skin & hair naturally.",
  },
  {
  id: 5,
  name: "Indian Costus Capsules",
  image: indianCostusCapsules,
  category: "Supplements",
  badge: "Natural",
  price: 350,
  oldPrice: 420,
  description:
  "Premium Indian Costus capsules for daily wellness and natural immune support.",
},
{
  id: 6,
  name: "Ness Fat Natural Cream",
  image: nessFatCream,
  category: "Body Care",
  badge: "Best Seller",
  price: 420,
  oldPrice: 480,
  description:
    "Natural body cream enriched with botanical ingredients for smoother, healthier-looking skin.",
}
];

export default products;
