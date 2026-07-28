import { features } from "./features";
import FeatureCard from "./FeatureCard";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
export default function FeaturesCards() {
   const { t } = useTranslation();
  return (
    <Grid container spacing={4}>
      {features.map((f) => (
        <Grid size={{ xs: 12, sm:6, lg: 3 }} key={f.title}>
          <FeatureCard
            icon={f.icon}
            title={t(f.titleKey)}
            description={t(f.descKey)}
          />
        </Grid>
      ))}
    </Grid>
  );
}