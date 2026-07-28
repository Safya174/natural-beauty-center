import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export const features = [
  {
    id: 1,
    icon: <SpaOutlinedIcon fontSize="large" />,
    titleKey: "whyUs.features.naturalProducts.title",
    descKey: "whyUs.features.naturalProducts.description",
  },
  {
    id: 2,
    icon: <LocalFloristOutlinedIcon fontSize="large" />,
    titleKey: "whyUs.features.organicIngredients.title",
    descKey: "whyUs.features.organicIngredients.description",
  },
  {
    id: 3,
    icon: <WorkspacePremiumOutlinedIcon fontSize="large" />,
    titleKey: "whyUs.features.trustedExperience.title",
    descKey: "whyUs.features.trustedExperience.description",
  },
  {
    id: 4,
    icon: <FavoriteBorderOutlinedIcon fontSize="large" />,
    titleKey: "whyUs.features.personalizedCare.title",
    descKey: "whyUs.features.personalizedCare.description",
  },
];