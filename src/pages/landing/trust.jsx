import { Container, Grid, Typography } from "@mui/material";
import img1 from "../../assets/imgs/one.png";
import img2 from "../../assets/imgs/two.png";
import img3 from "../../assets/imgs/three.png";
import img5 from "../../assets/imgs/five.png";

const Trust = () => {
  return (
    <section>
      <Container sx={{ py: 6 }}>
        <Grid
          container
          spacing={5}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Trusted by 100,000+ companies
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "text.secondary" }}>
              We are trusted by 100,000+ companies, and we are here to help you find the best remote job for you.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                mt: 5,
              }}
            >
              <Grid size={{ xs: 12, md: 3 }}>
                <img src={img2} alt="img2" className="w-[100px]" />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <img src={img1} alt="img1" className="w-[100px]" />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <img src={img2} alt="img2" className="w-[100px]" />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <img src={img3} alt="img3" className="w-[100px]" />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <img src={img5} alt="img4" className="w-[100px]" />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <img src={img2} alt="img2" className="w-[100px]" />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <img src={img1} alt="img1" className="w-[100px]" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Trust;
