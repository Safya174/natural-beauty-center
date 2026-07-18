import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function FeatureCard({ icon, title, description }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: "100%",
        borderRadius: 4,
        textAlign: "center",

        bgcolor: "#F3F7EF",
        border: "1px solid",
        borderColor: "divider",

        transition:
          "transform .35s ease, box-shadow .35s ease, border-color .35s ease, background-color .35s ease",

        "&:hover": {
          transform: "translateY(-8px)",
          bgcolor: "background.paper",
          borderColor: "primary.main",
          boxShadow: "0 20px 45px rgba(74,107,60,.15)",

          "& .iconBox": {
            bgcolor: "primary.main",
            color: "#fff",
            transform: "scale(1.08)",
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          className="iconBox"
          sx={{
            width: 72,
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            color: "primary.main",
          

            borderRadius: 3,
            mb: 3,

            transition: ".35s ease",
          }}
        >
          {icon}
        </Box>

        <Typography
          variant="h5"
          sx={{
            mb: 2,
            color: "text.primary",
            fontFamily: "Alexandria",
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontFamily: "Alexandria",
            lineHeight: 1.9,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Paper>
  );
}