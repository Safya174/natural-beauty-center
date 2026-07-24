import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function QuantityControl({
  quantity = 1,
  onIncrease,
  onDecrease,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        overflow: "hidden",
        width: "fit-content",
      }}
    >
      <IconButton onClick={onDecrease}>
        <RemoveIcon />
      </IconButton>

      <Typography
        sx={{
          minWidth: 40,
          textAlign: "center",
          fontWeight: 600,
          fontFamily: "Alexandria",
        }}
      >
        {quantity}
      </Typography>

      <IconButton onClick={onIncrease}>
        <AddIcon />
      </IconButton>
    </Box>
  );
}