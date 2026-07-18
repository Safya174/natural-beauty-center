import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {secondaryButton,primaryButton} from '../../Theme/buttonStyles'
export default function HeroButtons() {
  return (
      <Stack spacing={2} direction="row">
      <Button  variant="contained" sx={primaryButton}>Book Session</Button>
      <Button variant="outlined" sx={secondaryButton}> Explore Products</Button>
    </Stack>
  );
}
