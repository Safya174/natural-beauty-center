import FeatureCard from "../../FeatureCards/FeatureCard";
import Grid from "@mui/material/Grid";
import { values } from "./OurValues";

export default function OurMissionCard() {
  return (
    <Grid container spacing={4}>
      {values.map((value) => (
        <Grid size={{ xs: 12, sm: 6 }} key={value.id}>
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
