import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"

  const products = [
    { title: "Smart Meter", desc: "Advanced smart meters for accurate energy monitoring.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHD9RL60CurvHfqrD7KhEpNa0NWLLLEF5Gg&s" },
    { title: "Solar Inverter", desc: "Efficient inverters for solar power systems.", img: "https://image.made-in-china.com/365f3j00tGsWMVicnFoh/ISO-CE-Certified-6000W-Pure-Sine-Wave-off-Grid-Solar-Power-Inverter.webp" },
    { title: "Power Controller", desc: "High-performance power control devices.", img: "https://image.made-in-china.com/2f0j00OjSauNKykRYe/Wgp-Lb-300kw-Smart-Dummy-Load-Bank.webp" },
    { title: "Coming soon", desc: "Coming soon New Products", },
  ];

const Products = () => {
    return(
        <Box sx={{ pt: 9, pb:3 ,mx:2}}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily:'serif'}}>
          Electricals Products
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {products.map((p, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{
                  borderRadius: 3,
                  boxShadow: 4,
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                  background: '#ffffffff',
                }}>
                <CardMedia component="img" height="200" image={p.img} alt={p.title} />
                <CardContent>
                  <Typography variant="h4" gutterBottom sx={{ fontFamily:'serif'}}>{p.title}</Typography>
                  <Typography variant="h6" gutterBottom sx={{ fontFamily:'fantasy'}}>Price: Coming Soon</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily:'unset'}}>{p.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    )
}

export default Products