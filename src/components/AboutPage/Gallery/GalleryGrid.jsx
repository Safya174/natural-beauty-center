import { Grid } from "@mui/material";
import GalleryItem from "./GalleryItem";
import { galleryData } from "./galleryData";

export default function GalleryGrid() {
  return (
    <Grid container spacing={3}>

      {/* ---------- Row 1 ---------- */}

      {/* Treatment Room */}
      <Grid size={{ xs: 12, md: 8 }}>
        <GalleryItem
          image={galleryData[0].image}
          alt={galleryData[0].alt}
          sx={{ height: 620, borderRadius: 4 }}
          animation="fade-right"
          delay={100}
        />
      </Grid>

      {/* Reception */}
      <Grid size={{ xs: 12, md: 4 }}>
        <GalleryItem
          image={galleryData[1].image}
          alt={galleryData[1].alt}
          sx={{ height: 620 ,borderRadius: 4}}
          animation="fade-left"
          delay={250}
        />
      </Grid>

      {/* ---------- Row 2 ---------- */}

      {/* Device 1 */}
      <Grid size={{ xs: 12, md: 6 }}>
        <GalleryItem
          image={galleryData[4].image}
          alt={galleryData[4].alt}
          sx={{ height: 360 ,borderRadius: 3}}
          animation="fade-right"
          delay={100}
        />
      </Grid>

      {/* Device 2 */}
      <Grid size={{ xs: 12, md: 6 }}>
        <GalleryItem
          image={galleryData[5].image}
          alt={galleryData[5].alt}
          sx={{ height: 360,borderRadius: 3 }}
          animation="fade-left"
          delay={250}
        />
      </Grid>

      {/* ---------- Row 3 ---------- */}

      {/* Product Collection */}
      <Grid size={{ xs: 12, md: 8 }}>
        <GalleryItem
          image={galleryData[2].image}
          alt={galleryData[2].alt}
          sx={{ height: 320,borderRadius: 2}}
          animation="fade-up"
          delay={100}
        />
      </Grid>

      {/* Styling Cream */}
      <Grid size={{ xs: 12, md: 4 }}>
        <GalleryItem
          image={galleryData[3].image}
          alt={galleryData[3].alt}
          sx={{ height: 320 ,borderRadius: 2 }}
          animation="zoom-in"
          delay={250}
        />
      </Grid>

    </Grid>
  );
}