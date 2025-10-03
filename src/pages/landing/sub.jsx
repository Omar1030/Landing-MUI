import { Container, Typography, TextField } from "@mui/material";

const Sub = () => {
  return (
    <section>
      <Container sx={{ py: 5, mt: 6, bgcolor: "primary.light" }}>
        <Typography variant="h4" gutterBottom sx={{ color: "primary.contrastText", fontWeight: "bold", textAlign: "center" }}>
          Subscribe to our newsletter
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: "primary.contrastText", textAlign: "center", maxWidth: "800px", mx: "auto" }}>
          Fill out the form below to find your next job, it takes less than a minute.
        </Typography>
        <form action="" className="flex justify-center items-center mt-6">
          <TextField id="outlined-basic" label="Enter your email" variant="outlined" type="email" sx={{ color: "primary.contrastText", width: "100%", maxWidth: "800px" }} />
        </form>
      </Container>
    </section>
  );
};

export default Sub;
