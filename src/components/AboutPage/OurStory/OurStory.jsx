import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import OurStoryContent from "./OurStoryContent";
import OurStoryImge from "./OurStoryImge";
import spacing from "../../../theme/spacing";
export default function OurStorySection(){
    return(
     <Box component={"section"} sx={{ py: spacing.section.py }}>
        <Container maxWidth="lg">
           <Grid container spacing={10} alignItems="center">
             <Grid size={{ xs: 12, md: 6 }}>
               <OurStoryContent></OurStoryContent>
             </Grid>
               <Grid size={{ xs: 12, md: 6 }}>
                 <OurStoryImge></OurStoryImge>
             </Grid>
           </Grid>
        </Container>

     </Box>
    )
}