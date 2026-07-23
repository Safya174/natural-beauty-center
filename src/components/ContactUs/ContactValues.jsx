import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
//import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const ContactData = [
  {
    id: 1,
    title: "Opening Hours",
    icon: <AccessTimeOutlinedIcon sx={{ fontSize: 46 }} />,
    description: "9:00 AM - 6:00 PM",
  },

  {
    id: 2,
    title: "Address",
    icon: <LocationOnOutlinedIcon sx={{ fontSize: 46 }} />,
    description: "12 Ali Fahmy Kamel El Nozha, Cairo",
  },

  {
    id: 3,
    title: "Email",
    icon: <EmailOutlinedIcon sx={{ fontSize: 46 }} />,
    description: "naturalbeautycenter@gmail.com",
  },

 /* {
    id: 4,
    title: "Phone",
    icon: <LocalPhoneOutlinedIcon sx={{ fontSize: 42 }} />,
    description: "+20 100 000 0000",
  },*/

  {
    id: 5,
    title: "WhatsApp",
    icon: <WhatsAppIcon sx={{ fontSize: 46 }} />,
    description: "+20 103 343 8385",
  },
];
