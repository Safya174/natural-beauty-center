import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SessionsSecContent from "./SessionsSecHeader";
import SessionsGrid from '../sessionsGrid/SessionsGrid'
import spacing from '../../../Theme/spacing';

export default function SessionsSection() {
  return (
    <Box component="section"  sx={{ py: spacing.section.py }}>
      <Container maxWidth="lg">
        <Grid container spacing={10} >
          <Grid size={{ xs: 12}}>
             <SessionsSecContent/>
          </Grid>
           
          <Grid size={{ xs: 12 }}>
             <SessionsGrid limit={4} py={0}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

