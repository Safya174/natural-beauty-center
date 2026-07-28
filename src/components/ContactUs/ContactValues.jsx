import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const ContactData = [
  {
    id: 1,
    titleKey: "contact.info.workingHoursTitle",
    descriptionKey: "contact.info.workingHoursValue",
    icon: <AccessTimeOutlinedIcon sx={{ fontSize: 46 }} />,
  },
  {
    id: 2,
    titleKey: "contact.info.addressTitle",
    descriptionKey: "contact.info.addressValue",
    icon: <LocationOnOutlinedIcon sx={{ fontSize: 46 }} />,
  },
  {
    id: 3,
    titleKey: "contact.info.emailTitle",
    descriptionKey: "contact.info.emailValue",
    icon: <EmailOutlinedIcon sx={{ fontSize: 46 }} />,
  },
  {
    id: 5,
    titleKey: "contact.info.whatsappTitle",
    descriptionKey: "contact.info.whatsappValue",
    icon: <WhatsAppIcon sx={{ fontSize: 46 }} />,
  },
];