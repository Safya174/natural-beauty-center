export const primaryButton = {
  px: 4,
  py: 1.5,
  borderRadius: "999px",
  bgcolor: "primary.main",
  color: "#fff",
  fontWeight: 600,
  boxShadow: "none",
  fontFamily: "Alexandria",
  "&:hover": {
    bgcolor: "primary.dark",
    boxShadow: "0 8px 24px rgba(88,104,65,.18)",
    transform: "translateY(-2px)",
  },
};

export const secondaryButton = {
  px: 4,
  py: 1.5,
  borderRadius: "999px",
  bgcolor: "transparent",
  color: "primary.main",
  border: "1.5px solid",
  borderColor: "secondary.main",
  fontWeight: 600,
  fontFamily: "Alexandria",

  "&:hover": {
    bgcolor: "secondary.main",
    color: "primary.main",
    borderColor: "secondary.main",
    transform: "translateY(-2px)",
  },
};