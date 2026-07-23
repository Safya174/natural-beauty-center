import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import spacing from "../../theme/spacing";

export default function ContactUSContent() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.hero.contentGap,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Typography
        variant="overline"
        sx={{
          fontFamily: "Alexandria",
          fontSize: "1rem",
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "primary.main",
          fontWeight: 600,
        }}
      >
        Contact us
      </Typography>
      <Typography
        variant="h2"
        color="text.primary"
        sx={{
          fontFamily: "Alexandria",
          fontWeight: 700,
          color: "text.primary",
        }}
      >
        We're Always Here to Help
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: "42rem",
          mt: 0,
          fontFamily: "Alexandria",
          fontWeight: 400,
          lineHeight: 1.9,
        }}
      >
        We’re always happy to hear from you. Whether you have a question, would
        like to book a session, or need personalized guidance, our team is here
        to assist you with complete privacy and professionalism.
      </Typography>
    </Box>
  );
}
