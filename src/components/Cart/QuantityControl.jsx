import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function QuantityControl({
  quantity,
  onIncrease,
  onDecrease,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: "30px", // جعل الحواف دائرية أكثر لشكل أجمل
        overflow: "hidden",
        width: "fit-content", // هذا هو السطر الأهم! يمنعه من التمدد بشكل مفرط
        minWidth: 110, // عرض أدنى لضمان ظهور الأزرار والرقم بوضوح
        px: 0.5,
        py: 0.25,
        backgroundColor: "background.paper", // خلفية بيضاء لتمييزه
      }}
    >
      <IconButton size="small" onClick={onDecrease}>
        <RemoveIcon fontSize="small" />
      </IconButton>

      <Typography
        sx={{
          px: 1,
          textAlign: "center",
          fontWeight: 600,
          fontFamily: "Alexandria",
          userSelect: "none",
          minWidth: 40, 
        }}
      >
        {quantity}
      </Typography>

      <IconButton size="small" onClick={onIncrease}>
        <AddIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}