import SessionsCard from "./sessionsCard";
import Grid from "@mui/material/Grid";
import {sessionsData} from "./sessionsData";

export default function SessionsGrid({limit,py=12}) {
 let displaySessions = limit ? sessionsData.slice(0,4) : sessionsData
  return (
    <Grid
      container
      spacing={4}
      sx={{
        py: py
      
      }}
    >
      {displaySessions.map((session) => (
        <Grid size={{ xs: 12, sm: 6, lg: 6}} key={session.name}>
          <SessionsCard session={session}/>
        </Grid>
      ))}
    </Grid>
  );
}
