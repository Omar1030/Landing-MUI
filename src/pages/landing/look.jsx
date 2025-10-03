import { Container, Typography, Grid, Stack, Avatar } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import avatar from "../../assets/imgs/avatar.jpeg";
const Look = () => {
  return (
    <section>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
          Take a look at our jobs
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: "center", color: "text.secondary", maxWidth: "800px", mx: "auto" }}>
          Fill out the form below to find your next job, it takes less than a minute.
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
              <ChatIcon sx={{ fontSize: "2rem", color: "primary.main", mb: 2 }} />
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto", textAlign: "center" }}>
              Quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
              <Avatar src={avatar}></Avatar>
              <div>
                <Typography variant="subtitle2" gutterBottom sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto", mb: 0 }}>
                  Clara Johnson
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto" }}>
                  Frontend Developer
                </Typography>
              </div>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
              <ChatIcon sx={{ fontSize: "2rem", color: "primary.main", mb: 2 }} />
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto", textAlign: "center" }}>
              Quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
              <Avatar src={avatar}></Avatar>
              <div>
                <Typography variant="subtitle2" gutterBottom sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto", mb: 0 }}>
                  Clara Johnson
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto" }}>
                  Frontend Developer
                </Typography>
              </div>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
              <ChatIcon sx={{ fontSize: "2rem", color: "primary.main", mb: 2 }} />
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto", textAlign: "center" }}>
              Quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
              <Avatar src={avatar}></Avatar>
              <div>
                <Typography variant="subtitle2" gutterBottom sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto", mb: 0 }}>
                  Clara Johnson
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto" }}>
                  Frontend Developer
                </Typography>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Look;
