import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import TextField from "@mui/material/TextField";
import hero from "../../assets/imgs/vecteezy_e-commerce-shop-for-the-world-s-online-shopping-transactions_.jpg";
import img1 from "../../assets/imgs/one.png";
import img2 from "../../assets/imgs/two.png";
import img3 from "../../assets/imgs/three.png";
import img5 from "../../assets/imgs/five.png";

const Hero = () => {
  return (
    <section>
      <Container sx={{ padding: "4rem" }}>
        <Grid
          container
          spacing={5}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <article>
              <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
                Find The World's Best Remote Job
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "text.secondary" }}>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <fieldset>
                <Button variant="contained" color="primary" sx={{ mt: 3, mr: 2 }}>
                  Explore
                </Button>
                <Button color="primary" sx={{ mt: 3 }}>
                  <SlowMotionVideoIcon />
                  Watch the video
                </Button>
                <TextField id="outlined-basic" variant="outlined" sx={{ display: "block", mt: 3, height: "60px", width: "100%" }} />
              </fieldset>
            </article>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <img src={hero} alt="" />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Grid size={{ md: 2 }}>
            <img src={img1} alt="img1" className="w-[100px]" />
          </Grid>
          <Grid size={{ md: 2 }}>
            <img src={img2} alt="img2" className="w-[100px]" />
          </Grid>
          <Grid size={{ md: 2 }}>
            <img src={img3} alt="img3" className="w-[100px]" />
          </Grid>
          <Grid size={{ md: 2 }}>
            <img src={img5} alt="img4" className="w-[100px]" />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              What is it about ?
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "text.secondary" }}>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus,
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Who is it for ?
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "text.secondary" }}>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus,
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );  
};

export default Hero;
