import FeatureCard from "../../FeatureCards/FeatureCard";
import Grid from "@mui/material/Grid";
import { values } from "./OurValues";
import { useTranslation } from "react-i18next";
export default function OurMissionCard() {
  const { t } = useTranslation();
  return (
    <Grid container spacing={4}>
      {values.map((value) => (
        <Grid size={{ xs: 12, sm: 6 }} key={value.id}>
          <FeatureCard
            icon={value.icon}
            title={t(value.title)}
            description={t(value.description)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
