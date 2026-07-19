import Box from "@mui/material/Box";
import AboutImage from "../../assets/AboutS.png";
export default function AboutImagep() {
  return (
    <Box
      component="img"
      src={AboutImage}
      alt="Natural Beauty Center"
      sx={{
        borderRadius: "32px",
        boxShadow: "0 20px 50px rgba(127, 166, 98, 0.18)",
        transition: ".4s ease",
        width: "80%",
        ml: "auto",
        mt:3,
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 30px 70px rgba(127, 166, 98, 0.28)",
        },
      }}
    ></Box>
  );
}
