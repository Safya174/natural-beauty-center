import FeatureCard from "../FeatureCards/FeatureCard"
import Grid from "@mui/material/Grid";
import { ContactData } from "./ContactValues";

export default function ContactusCards() {
  return (
    <Grid container spacing={4}>
      {ContactData.map((value) => (
        <Grid size={{ xs: 12, sm: 3 }} gap={5}  key={value.id}>
          <FeatureCard
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        </Grid>
      ))}
    </Grid>
  );
}
