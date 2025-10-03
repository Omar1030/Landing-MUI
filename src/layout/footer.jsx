import { Box, Container, Divider, Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", color: "primary.contrastText", mt: 8 }}>
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <Typography variant="h6" fontWeight={700}>
                MyApp
              </Typography>
              <Typography variant="body2" color="primary.contrastText">
                Building delightful experiences with React and MUI.
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                <IconButton size="small" color="inherit" href="#" aria-label="facebook">
                  <FacebookIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" color="inherit" href="#" aria-label="twitter">
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" color="inherit" href="#" aria-label="linkedin">
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" color="inherit" href="#" aria-label="github">
                  <GitHubIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={0.75}>
              <Link href="#" color="inherit" underline="hover" variant="body2">
                Home
              </Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">
                About
              </Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">
                Services
              </Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">
                Contact
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
              Resources
            </Typography>
            <Stack spacing={0.75}>
              <Link href="#" color="inherit" underline="hover" variant="body2">
                Docs
              </Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">
                Blog
              </Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">
                FAQ
              </Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">
                Support
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
              Contact
            </Typography>
            <Stack spacing={0.5}>
              <Typography variant="body2" color="primary.contrastText">
                Email: hello@myapp.dev
              </Typography>
              <Typography variant="body2" color="primary.contrastText">
                Phone: +1 (555) 012-3456
              </Typography>
              <Typography variant="body2" color="primary.contrastText">
                Location: Remote • Worldwide
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ borderColor: "primary.contrastText" }} />
      <Container sx={{ py: 2 }}>
        <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" justifyContent="space-between" spacing={1}>
          <Typography variant="caption" color="primary.contrastText">
            © {year} MyApp. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="#" color="grey.400" underline="hover" variant="caption">
              Privacy
            </Link>
            <Link href="#" color="grey.400" underline="hover" variant="caption">
              Terms
            </Link>
            <Link href="#" color="grey.400" underline="hover" variant="caption">
              Status
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
