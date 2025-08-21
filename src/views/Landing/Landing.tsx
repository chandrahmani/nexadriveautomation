import { FC } from 'react';
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import ImageSlider from '@/components/ImageSlider/ImageSlider';


const images = [
  {
    img: 'https://aflak.com.sa/images/blog/honeywell-advanced-solutions.jpg',
  },
  {
    img: 'https://www.slideegg.com/image/catalog/800220-electricity-slide.png',
  },
  {
    img: 'https://media.istockphoto.com/id/1483406871/photo/smart-home-concept-hand-of-man-using-smart-home-control-app-on-mobile-phone-remote-home.jpg?s=612x612&w=0&k=20&c=R3COVnfKDxTVfeMHvg_PpMy8WX2NDOIh6zBOthcm608=',
  },
];

const Landing: FC = () => {
  return <Box  gap={3}>
    <ImageSlider  images={images.map((image) => image.img)}/>
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <Typography variant="h2" fontWeight={900} lineHeight={1.1}>
              Reliable Electricals for <br /> Modern Industry
            </Typography>
            <Typography variant="h6" color="text.secondary">
              From switchgear to smart metering, SumAutomation delivers certified, efficient and durable solutions for factories, plants and infrastructure.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button size="large" variant="contained" href="/products"    >
                Explore Products
              </Button>
              <Button size="large" variant="outlined" href="/contact">Get a Quote</Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ p: 1.5, borderRadius: 4, overflow: "hidden" }}>
            <img
              src="https://image.made-in-china.com/2f0j00OjSauNKykRYe/Wgp-Lb-300kw-Smart-Dummy-Load-Bank.webp"
              alt="SumAutomation industrial panels and components"
              style={{ width: "100%", display: "block", borderRadius: 16 }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>

  </Box>
};

export default Landing;
