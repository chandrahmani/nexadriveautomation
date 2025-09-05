import { FC } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Products from "../Products/Products";
import Contact from "../Contact";

const images = [
  {
    img: "https://aflak.com.sa/images/blog/honeywell-advanced-solutions.jpg",
  },
  {
    img: "https://www.slideegg.com/image/catalog/800220-electricity-slide.png",
  },
  {
    img: "https://media.istockphoto.com/id/1483406871/photo/smart-home-concept-hand-of-man-using-smart-home-control-app-on-mobile-phone-remote-home.jpg?s=612x612&w=0&k=20&c=R3COVnfKDxTVfeMHvg_PpMy8WX2NDOIh6zBOthcm608=",
  },
];

const Landing: FC = () => {
  return (
    <Box gap={3}>
      <ImageSlider images={images.map((image) => image.img)} />
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography
                variant="h3"
                fontWeight={900}
                lineHeight={1.1}
                sx={{ fontFamily: "serif" }}
              >
                Reliable Electricals for <br /> Modern Industry
              </Typography>
              <Typography variant="body1" color="text.secondary">
                From switchgear to smart metering, SumAutomation delivers
                certified, efficient and durable solutions for factories, plants
                and infrastructure.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  size="large"
                  variant="contained"
                  href="/products"
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    "&:hover": {
                      color: "#FF6F61", // coral accent on hover
                      background: "transparent",
                    },
                  }}
                >
                  Explore Products
                </Button>
                <Button size="large" variant="outlined" href="/contact">
                  Get a Quote
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ p: 4, borderRadius: 3, backgroundColor: "#fff" }}
            >
              <img
                src="/image1.png"
                alt="SumAutomation industrial panels and components"
                style={{ width: "100%", display: "block", borderRadius: 16 }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Products />
      <Contact />
    </Box>
  );
};

export default Landing;
