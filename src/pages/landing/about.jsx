import { Container, Grid, Typography, Button, TextField } from "@mui/material";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import about from "../../assets/imgs/about.jpg";

const About = () => {
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
            <article>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Find The World's Best Remote Job
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "text.secondary" }}>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </article>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <img src={about} alt="" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
