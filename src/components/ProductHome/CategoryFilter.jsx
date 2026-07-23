import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { categories } from "./categories";

export default function Filters() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        flexWrap: "wrap",
        mt: 6,
      

        bgcolor: "#F6F4EF",
        p: 1,
        borderRadius: 5,
        width: "fit-content",
        mx: "auto",
      }}
    >
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => setSelectedCategory(category.value)}
          sx={{
            minWidth: 170,
            py: 1.5,
            px: 3,

            borderRadius: 4,

            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",

            transition: "all .3s ease",

            bgcolor:
              selectedCategory === category.value
                ? "primary.main"
                : "transparent",

            color:
              selectedCategory === category.value
                ? "#fff"
                : "text.primary",

            "&:hover": {
              bgcolor:
                selectedCategory === category.value
                  ? "primary.dark"
                  : "secondary.main",

              color:
                selectedCategory === category.value
                  ? "#fff"
                  : "text.primary",
            },
          }}
        >
          {category.name}
        </Button>
      ))}
    </Box>
  );
}