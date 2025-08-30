import { Box, Typography, Stack, Grid, Button } from "@mui/material";
import { Link, useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#e2e2deff",
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
                sx={{ color: "black", fontFamily: "serif" }}
                onClick={() => navigate("/about")}
              >
                About Us
              </Button>
              <Button
                sx={{ color: "black", fontFamily: "serif" }}
                onClick={() => navigate("/privacy")}
              >
                Privacy Policy
              </Button>
              <Button
                sx={{ color: "black", fontFamily: "serif" }}
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
