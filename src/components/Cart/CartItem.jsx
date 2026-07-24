import { Box, Card, Typography, IconButton } from "@mui/material";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import QuantityControl from "./QuantityControl";
import horsetailSpray from "../../assets/pro3.WebP";
import CardMedia from "@mui/material/CardMedia";
export default function CartItem() {
  const item = {
    name: "Horsetail Spray",
    category: "Hair Care",
    image: horsetailSpray,
    price: 160,
  };
  return (
    <Card
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        minHeight:220,
        transition: ".35s",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 45px rgba(74,107,60,.15)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Delete */}

          <IconButton
            sx={{
              alignSelf: "flex-start",
              mb: 2,
            }}
          >
            <DeleteOutlineTwoToneIcon />
          </IconButton>

          {/* Category */}

          <Typography variant="caption" color="text.secondary">
            {item.category}
          </Typography>

          {/* Name */}

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontFamily: "Alexandria",
              mt: 1,
            }}
          >
            {item.name}
          </Typography>

          {/* Price */}

          <Typography
            variant="h6"
            color="primary.main"
            sx={{
              fontWeight: 700,
              mt: 2,
            }}
          >
            {item.price} EGP
          </Typography>

          {/* Quantity */}

          <Box sx={{ mt: 3 }}>
            <QuantityControl />
          </Box>
        </Box>

        {/* Image */}

        <Box sx={{borderRadius:4}}
        
        >
         <CardMedia
             component="img"
          src={item.image}
          alt={item.name}
          sx={{
            width: 140,
            height: 140,
            borderRadius: 4,
            objectFit: "contain",
            transition: ".4s",

            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
       
      />
       </Box>
      </Box>
    </Card>
  );
}
