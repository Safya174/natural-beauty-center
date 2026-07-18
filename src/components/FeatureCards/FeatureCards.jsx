import { features } from "./features";
import FeatureCard from "./FeatureCard";
import Grid from "@mui/material/Grid";

export default function FeaturesCards() {
  return (
    <Grid container spacing={4}>
      {features.map((f) => (
        <Grid size={{ xs: 12, sm:6, lg: 3 }} key={f.title}>
          <FeatureCard
            icon={f.icon}
            title={f.title}
            description={f.description}
          />
        </Grid>
      ))}
    </Grid>
  );
}