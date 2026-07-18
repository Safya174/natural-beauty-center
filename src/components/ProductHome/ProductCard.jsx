import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { primaryButton } from "../../Theme/buttonStyles";

export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 4,
        overflow: "hidden",

        display: "flex",
        flexDirection: "column",
        height: "100%",

        transition: ".35s",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 45px rgba(74,107,60,.15)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        height="300"
        sx={{
          objectFit: "cover",
          transition: ".4s",

          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          p: 3,
        }}
      >
        <Typography variant="h5" color="text.primary" fontWeight={700}>
          {product.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.8,
           
            flexGrow: 1, 
          }}
        >
          {product.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mt: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "primary.main",
              fontFamily: "Alexandria",
            }}
          >
            {product.price}
          </Typography>

          <Typography
            sx={{
              textDecoration: "line-through",
              color: "text.secondary",
              fontSize: "1.2rem",
            }}
          >
            {product.oldPrice}
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            ...primaryButton,
            mt: "auto",
          }}
        >
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
}
