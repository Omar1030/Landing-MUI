import { Container, Grid, Typography, Button, TextField } from "@mui/material";
import online from "../../assets/imgs/online.jpg";
import CheckIcon from "@mui/icons-material/Check";

const Learn = () => {
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
            <img src={online} alt="" />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <article>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                Learn with theFont
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "text.secondary" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Grid
                container
                spacing={1}
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Grid size={{ xs: 12 }}>
                  <CheckIcon sx={{ color: "warning.main", mr: 1 }} />
                  This is the first course
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <CheckIcon sx={{ color: "warning.main", mr: 1 }} />
                  This is the second course
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <CheckIcon sx={{ color: "warning.main", mr: 1 }} />
                  This is the third course
                </Grid>
              </Grid>
            </article>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Learn;
