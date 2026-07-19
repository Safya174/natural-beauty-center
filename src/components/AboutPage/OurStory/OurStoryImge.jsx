import Box from "@mui/material/Box";
import OurStoryImg from "../../../assets/OurStory.Webp";
export default function OurStoryImge() {
  return (
    <Box
      component={"img"}
      src={OurStoryImg}
      alt="Natural Beauty Center products"
      sx={{
        borderRadius: "32px",
        boxShadow: "0 20px 50px rgba(127, 166, 98, 0.18)",
        transition: ".4s ease",
        width: "100%",
        ml: "auto",
       
        '&:hover':{
            transform:"translateY(-6px)",
            boxShadow: "0 30px 70px rgba(127, 166, 98, 0.28)",
        }
      }}
    ></Box>
  );
}
