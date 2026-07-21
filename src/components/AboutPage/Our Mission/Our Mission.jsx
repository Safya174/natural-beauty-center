import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import OurMissionContent from './Our MissionContent'
import spacing from "../../../theme/spacing";
import OurMissionCard from './OurMissionCards';


export default function OurMissionSection() {
  return (
    <Box component="section"  sx={{ py: spacing.section.py,backgroundColor:"white"}}>
      <Container maxWidth="lg">
        <Grid container spacing={10} alignItems="center">
          <Grid size={{ xs: 12 }}>
            <OurMissionContent/>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <OurMissionCard/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
