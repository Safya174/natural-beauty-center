import SessionsCard from "./sessionsCard";
import Grid from "@mui/material/Grid";
import {sessionsData} from "./sessionsData";
import spacing from "../../../theme/spacing";

export default function SessionsGrid() {
 
  return (
    <Grid
      container
      spacing={4}
      sx={{
        py: spacing.section.py
      
      }}
    >
      {sessionsData.map((session) => (
        <Grid size={{ xs: 12, sm: 6, lg: 6}} key={session.name}>
          <SessionsCard session={session}/>
        </Grid>
      ))}
    </Grid>
  );
}
