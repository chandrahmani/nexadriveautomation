import { Box, Typography, Stack, Grid, Button } from "@mui/material";
import { Link, useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(90deg, #0A1F44, #283593, #1A237E)",
        py: 3,
        mt: "auto", // Push footer to the bottom of the page
      }}
    >
      <Box sx={{ pl: 4, pr: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              <Link to={"/"}>
                <img
                  src="/image.png"
                  alt="Logo"
                  style={{ height: "100px", width: "200px" }}
                />
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
              spacing={3}
            >
              <Button
                sx={{
                  color: "white",
                  fontFamily: "serif",
                  "&:hover": {
                    color: "#959595ff", // coral accent on hover
                    background: "transparent",
                  },
                }}
                onClick={() => navigate("/about")}
              >
                About Us
              </Button>
              <Button
                sx={{
                  color: "white",
                  fontFamily: "serif",
                  "&:hover": {
                    color: "#959595ff", // coral accent on hover
                    background: "transparent",
                  },
                }}
                onClick={() => navigate("/privacy")}
              >
                Privacy Policy
              </Button>
              <Button
                sx={{
                  color: "white",
                  fontFamily: "serif",
                  "&:hover": {
                    color: "#959595ff", // coral accent on hover
                    background: "transparent",
                  },
                }}
                onClick={() => navigate("/terms")}
              >
                Terms & Conditions
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;
