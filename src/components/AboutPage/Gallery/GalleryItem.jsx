import { Card, CardMedia } from "@mui/material";

export default function GalleryItem({ image, alt, sx, animation, delay }) {
  return (
    <Card
      data-aos={animation}
      data-aos-delay={delay}
      sx={{
        
        overflow: "hidden",
        height: "100%",
        cursor: "pointer",
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform .5s ease",
        },

        "&:hover img": {
          transform: "scale(1.08)",
        },

        ...sx,
      }}
    >
      <CardMedia component="img" image={image} alt={alt} />
    </Card>
  );
}
