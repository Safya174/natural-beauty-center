import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function ReviewCard({ image, name }) {
  return (
    <Card
      sx={{
        borderRadius: "24px",
        overflow: "hidden",
         maxWidth: 430,
        border: "1px solid",
        borderColor: "divider",
        transition: "all .35s ease",
        height: "100%",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(59, 86, 48, 0.14)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{
          width: "100%",
          display: "block",
          objectFit: "cover",
        }}
      />
    </Card>
  );
}
