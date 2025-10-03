import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-4">
      <Container fixed>
        <Stack
          direction="row"
          spacing={4}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>MyApp</div>
          <ul className="list-none">
            <Stack
              direction="row"
              spacing={3}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <li>
                <a href="#landing">Landing</a>
              </li>
              <li>
                <a href="#company">Company</a>
              </li>
              <li>
                <a href="#account">Account</a>
              </li>
              <li>
                <a href="#pages">Pages</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <Button variant="contained" color="primary">
                  Buy Now
                </Button>
              </li>
            </Stack>
          </ul>
        </Stack>
      </Container>
    </nav>
  );
};

export default Navbar;
