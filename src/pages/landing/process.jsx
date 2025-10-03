import { Container, Typography, Button, Grid, Box } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import EditIcon from "@mui/icons-material/Edit";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import CasesIcon from "@mui/icons-material/Cases";

const Process = () => {
  return (
    <section>
      <Container sx={{ py: 6 }}>
        <article>
          <Typography variant="subtitle1" gutterBottom sx={{ textAlign: "center", color: "warning.main", fontWeight: "bold" }}>
            PROCESS
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
            Our process to find you a new job is fast
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ textAlign: "center", color: "text.secondary", maxWidth: "800px", mx: "auto" }}>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 3, mx: "auto", display: "block" }}>
            Start Searching
            <ArrowRightAltIcon sx={{ ml: 2 }} />
          </Button>
        </article>
        <article>
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
              <EditIcon sx={{ fontSize: "2rem", color: "primary.main", mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Complete your application
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto" }}>
                Quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <AdsClickIcon sx={{ fontSize: "2rem", color: "primary.main", mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Select companies
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto" }}>
                Quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CasesIcon sx={{ fontSize: "2rem", color: "primary.main", mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Choose your offer
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto" }}>
                Quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Grid>
          </Grid>
        </article>
      </Container>
    </section>
  );
};

export default Process;
