import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import ContactUSContent from "./ContactusContent";
import ContactusCards from "./ContactusCards";
import ContactMap from "./ContactMap";
import spacing from "../../theme/spacing";


export default function ContactUs() {
  
  return (
    <Box component="section"  sx={{ py: spacing.section.py,backgroundColor:"white"}}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid size={{ xs: 12 }}>
             <ContactUSContent/>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <ContactusCards/>
          </Grid>
            <Grid size={{ xs: 12 }}>
            <ContactMap/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
