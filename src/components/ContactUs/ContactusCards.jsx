import FeatureCard from "../FeatureCards/FeatureCard";
import Grid from "@mui/material/Grid";
import { ContactData } from "./ContactValues";
import { useTranslation } from "react-i18next";


export default function ContactusCards() {
  const { t } = useTranslation();
  
  return (
    <Grid container spacing={4}>
      {ContactData.map((value) => (
        <Grid size={{ xs: 12, sm: 3 }} gap={5} key={value.id}>
          <FeatureCard
            icon={value.icon}
            title={t(value.titleKey)}
            description={t(value.descriptionKey)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
