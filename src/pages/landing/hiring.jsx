import { Container, Typography, Grid, Button } from "@mui/material";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";

const Hiring = () => {
  return (
    <section>
      <Container sx={{ mt: 6, py: 6 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
          Hiring? Can't find the job you're looking for?
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: "center", color: "text.secondary", maxWidth: "800px", mx: "auto" }}>
          Lorem ipsum dolor sit amet numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            mt: 12,
          }}
        >
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
              300
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto", textAlign: "center" }}>
              Quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
              45
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto", textAlign: "center" }}>
              Quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
              99
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto", textAlign: "center" }}>
              Quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Grid>
        </Grid>
        <fieldset className="flex justify-center items-center mt-6">
          <Button variant="contained" color="primary" sx={{ mt: 3, mr: 2 }}>
            Explore
          </Button>
          <Button color="primary" sx={{ mt: 3 }}>
            <SlowMotionVideoIcon />
            Watch the video
          </Button>
        </fieldset>
      </Container>
    </section>
  );
};

export default Hiring;
