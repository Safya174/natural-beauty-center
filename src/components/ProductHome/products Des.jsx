import horsetailSpray from "../../assets/pro3.WebP";
import sulfateFreeShampoo from "../../assets/pro1.WebP";
import antimonyOil from "../../assets/pro2.WebP";
import stylingCream from "../../assets/pro4.WebP";
import naturalHerbalHairBalm from "../../assets/pro5.WebP";
import spirulinaCapsules from "../../assets/pro6.WebP";
import indianCostusCapsules from "../../assets/pro7.WebP";
import nessFatCream from "../../assets/pro8.WebP";

const products = [
  {
    id: 1,
    nameKey: "productsSection.items.horsetailSpray.title",
    image: horsetailSpray,
    categoryKey: "productsSection.categories.hairCare",
    badgeKey: "productsSection.badges.bestSeller",
    price: 160,
    oldPrice: 195,
    descriptionKey: "productsSection.items.horsetailSpray.description",
  },
  {
    id: 2,
    nameKey: "productsSection.items.sulfateFreeShampoo.title",
    image: sulfateFreeShampoo,
    categoryKey: "productsSection.categories.hairCare",
    badgeKey: "productsSection.badges.natural",
    price: 225,
    oldPrice: 270,
    descriptionKey: "productsSection.items.sulfateFreeShampoo.description",
  },
  {
    id: 3,
    nameKey: "productsSection.items.antimonyOil.title",
    image: antimonyOil,
    categoryKey: "productsSection.categories.naturalOils",
    badgeKey: "productsSection.badges.herbal",
    price: 350,
    oldPrice: 450,
    descriptionKey: "productsSection.items.antimonyOil.description",
  },
  {
    id: 4,
    nameKey: "productsSection.items.stylingCream.title",
    image: stylingCream,
    categoryKey: "productsSection.categories.hairCare",
    badgeKey: "productsSection.badges.premium",
    price: 195,
    oldPrice: 235,
    descriptionKey: "productsSection.items.stylingCream.description",
  },
  {
    id: 5,
    nameKey: "productsSection.items.hairBalm.title",
    image: naturalHerbalHairBalm,
    categoryKey: "productsSection.categories.hairCare",
    badgeKey: "productsSection.badges.natural",
    price: 200,
    oldPrice: 250,
    descriptionKey: "productsSection.items.hairBalm.description",
  },
  {
    id: 6,
    nameKey: "productsSection.items.spirulina.title",
    image: spirulinaCapsules,
    categoryKey: "productsSection.categories.herbalProducts",
    badgeKey: "productsSection.badges.organic",
    price: 350,
    oldPrice: 420,
    descriptionKey: "productsSection.items.spirulina.description",
  },
  {
    id: 7,
    nameKey: "productsSection.items.indianCostus.title",
    image: indianCostusCapsules,
    categoryKey: "productsSection.categories.herbalProducts",
    badgeKey: "productsSection.badges.natural",
    price: 350,
    oldPrice: 420,
    descriptionKey: "productsSection.items.indianCostus.description",
  },
  {
    id: 8,
    nameKey: "productsSection.items.herbalCream.title",
    image: nessFatCream,
    categoryKey: "productsSection.categories.bodyCare",
    badgeKey: "productsSection.badges.bestSeller",
    price: 420,
    oldPrice: 480,
    descriptionKey: "productsSection.items.herbalCream.description",
  },
];

export default products;