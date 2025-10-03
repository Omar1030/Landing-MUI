import { Container, Typography, Button, Grid, Card, CardContent, CardActions, Badge } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Projects = () => {
  return (
    <section className="mt-[4rem]">
      <Container>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Top developer jobs listed in our portal
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: "text.secondary" }}>
          We get thoughts of job posting, but only accept the openings at the top companies
          <Button color="primary">
            Set career interests <ArrowRightAltIcon sx={{ ml: 1 }} />
          </Button>
        </Typography>
        <Grid
          container
          spacing={3}
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            mt: 4
          }}
        >
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
              <CardContent sx={{ p: 2, pb: 0 }}>
                <Typography variant="overline" gutterBottom sx={{ display: "inline", bgcolor: "primary.main", px: 2, py: 1, borderRadius: 2, color: "primary.contrastText" }}>
                  Project One
                </Typography>
                <Typography variant="h6" component="div" sx={{ mb: 0, mt: 1, fontWeight: "bold" }}>
                  Web Developer Intern
                </Typography>
              </CardContent>
              <CardActions sx={{ color: "text.secondary" }}>
                <ul>
                  <li className="mb-2">
                    <LocationPinIcon sx={{ mr: 1 }} />
                    Milan, Italy
                  </li>
                  <li>
                    <AccessTimeIcon sx={{ mr: 1 }} />
                    Full-time
                  </li>
                </ul>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
              <CardContent sx={{ p: 2, pb: 0 }}>
                <Typography variant="overline" gutterBottom sx={{ display: "inline", bgcolor: "secondary.main", px: 2, py: 1, borderRadius: 2, color: "primary.contrastText" }}>
                  Project One
                </Typography>
                <Typography variant="h6" component="div" sx={{ mb: 0, mt: 1, fontWeight: "bold" }}>
                  Web Developer Intern
                </Typography>
              </CardContent>
              <CardActions sx={{ color: "text.secondary" }}>
                <ul>
                  <li className="mb-2">
                    <LocationPinIcon sx={{ mr: 1 }} />
                    Milan, Italy
                  </li>
                  <li>
                    <AccessTimeIcon sx={{ mr: 1 }} />
                    Full-time
                  </li>
                </ul>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
              <CardContent sx={{ p: 2, pb: 0 }}>
                <Typography variant="overline" gutterBottom sx={{ display: "inline", bgcolor: "error.main", px: 2, py: 1, borderRadius: 2, color: "primary.contrastText" }}>
                  Project One
                </Typography>
                <Typography variant="h6" component="div" sx={{ mb: 0, mt: 1, fontWeight: "bold" }}>
                  Web Developer Intern
                </Typography>
              </CardContent>
              <CardActions sx={{ color: "text.secondary" }}>
                <ul>
                  <li className="mb-2">
                    <LocationPinIcon sx={{ mr: 1 }} />
                    Milan, Italy
                  </li>
                  <li>
                    <AccessTimeIcon sx={{ mr: 1 }} />
                    Full-time
                  </li>
                </ul>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
              <CardContent sx={{ p: 2, pb: 0 }}>
                <Typography variant="overline" gutterBottom sx={{ display: "inline", bgcolor: "warning.main", px: 2, py: 1, borderRadius: 2, color: "primary.contrastText" }}>
                  Project One
                </Typography>
                <Typography variant="h6" component="div" sx={{ mb: 0, mt: 1, fontWeight: "bold" }}>
                  Web Developer Intern
                </Typography>
              </CardContent>
              <CardActions sx={{ color: "text.secondary" }}>
                <ul>
                  <li className="mb-2">
                    <LocationPinIcon sx={{ mr: 1 }} />
                    Milan, Italy
                  </li>
                  <li>
                    <AccessTimeIcon sx={{ mr: 1 }} />
                    Full-time
                  </li>
                </ul>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
              <CardContent sx={{ p: 2, pb: 0 }}>
                <Typography variant="overline" gutterBottom sx={{ display: "inline", bgcolor: "info.main", px: 2, py: 1, borderRadius: 2, color: "primary.contrastText" }}>
                  Project One
                </Typography>
                <Typography variant="h6" component="div" sx={{ mb: 0, mt: 1, fontWeight: "bold" }}>
                  Web Developer Intern
                </Typography>
              </CardContent>
              <CardActions sx={{ color: "text.secondary" }}>
                <ul>
                  <li className="mb-2">
                    <LocationPinIcon sx={{ mr: 1 }} />
                    Milan, Italy
                  </li>
                  <li>
                    <AccessTimeIcon sx={{ mr: 1 }} />
                    Full-time
                  </li>
                </ul>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
              <CardContent sx={{ p: 2, pb: 0 }}>
                <Typography variant="overline" gutterBottom sx={{ display: "inline", bgcolor: "success.main", px: 2, py: 1, borderRadius: 2, color: "primary.contrastText" }}>
                  Project One
                </Typography>
                <Typography variant="h6" component="div" sx={{ mb: 0, mt: 1, fontWeight: "bold" }}>
                  Web Developer Intern
                </Typography>
              </CardContent>
              <CardActions sx={{ color: "text.secondary" }}>
                <ul>
                  <li className="mb-2">
                    <LocationPinIcon sx={{ mr: 1 }} />
                    Milan, Italy
                  </li>
                  <li>
                    <AccessTimeIcon sx={{ mr: 1 }} />
                    Full-time
                  </li>
                </ul>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
              <CardContent sx={{ p: 2, pb: 0 }}>
                <Typography variant="overline" gutterBottom sx={{ display: "inline", bgcolor: "secondary.main", px: 2, py: 1, borderRadius: 2, color: "primary.contrastText" }}>
                  Project One
                </Typography>
                <Typography variant="h6" component="div" sx={{ mb: 0, mt: 1, fontWeight: "bold" }}>
                  Web Developer Intern
                </Typography>
              </CardContent>
              <CardActions sx={{ color: "text.secondary" }}>
                <ul>
                  <li className="mb-2">
                    <LocationPinIcon sx={{ mr: 1 }} />
                    Milan, Italy
                  </li>
                  <li>
                    <AccessTimeIcon sx={{ mr: 1 }} />
                    Full-time
                  </li>
                </ul>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
              <CardContent sx={{ p: 2, pb: 0 }}>
                <Typography variant="overline" gutterBottom sx={{ display: "inline", bgcolor: "warning.main", px: 2, py: 1, borderRadius: 2, color: "primary.contrastText" }}>
                  Project One
                </Typography>
                <Typography variant="h6" component="div" sx={{ mb: 0, mt: 1, fontWeight: "bold" }}>
                  Web Developer Intern
                </Typography>
              </CardContent>
              <CardActions sx={{ color: "text.secondary" }}>
                <ul>
                  <li className="mb-2">
                    <LocationPinIcon sx={{ mr: 1 }} />
                    Milan, Italy
                  </li>
                  <li>
                    <AccessTimeIcon sx={{ mr: 1 }} />
                    Full-time
                  </li>
                </ul>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
              <CardContent sx={{ p: 2, pb: 0 }}>
                <Typography variant="overline" gutterBottom sx={{ display: "inline", bgcolor: "primary.main", px: 2, py: 1, borderRadius: 2, color: "primary.contrastText" }}>
                  Project One
                </Typography>
                <Typography variant="h6" component="div" sx={{ mb: 0, mt: 1, fontWeight: "bold" }}>
                  Web Developer Intern
                </Typography>
              </CardContent>
              <CardActions sx={{ color: "text.secondary" }}>
                <ul>
                  <li className="mb-2">
                    <LocationPinIcon sx={{ mr: 1 }} />
                    Milan, Italy
                  </li>
                  <li>
                    <AccessTimeIcon sx={{ mr: 1 }} />
                    Full-time
                  </li>
                </ul>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Button variant="contained" sx={{ mt: 6, display: "block", mx: "auto" }} color="primary">View All <ArrowRightAltIcon sx={{ ml: 0.5 }} /></Button>
      </Container>
    </section>
  );
};

export default Projects;
