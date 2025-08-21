import { Box, Button, Container, Grid, InputAdornment, Link, Paper, Stack, TextField, Typography } from "@mui/material"

function Contact() {
  return (
<Box id="contact" sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}>
<Container maxWidth="lg">
<Grid container spacing={4}>
<Grid item xs={12} md={6}>
<Stack spacing={2}>
<Typography variant="h4" fontWeight={900}>Get a Quote</Typography>
<Typography color="text.secondary">Share your requirements and our team will get back within 1 business day.</Typography>
<TextField label="Name" fullWidth />
<TextField label="Company" fullWidth />
<TextField label="Email" type="email" fullWidth InputProps={{ startAdornment: <InputAdornment position="start">Email</InputAdornment> }} />
<TextField label="Phone" fullWidth InputProps={{ startAdornment: <InputAdornment position="start">Phone Number</InputAdornment> }} />
<TextField label="Requirements" fullWidth multiline minRows={4} />
<Stack direction="row" spacing={2}>
<Button variant="contained">Submit</Button>
<Button variant="text">Download Catalog</Button>
</Stack>
</Stack>
</Grid>
<Grid item xs={12} md={6}>
<Paper variant="outlined" sx={{ p: 3, borderRadius: 3, height: "100%" }}>
<Typography variant="h6" fontWeight={800} gutterBottom>Contact</Typography>
<Stack spacing={1}>
<Typography>SumAutomation Pvt. Ltd.</Typography>
<Typography color="text.secondary">Plot 21, Industrial Area, Pune, MH 411001</Typography>
<Typography>Phone: +91 98765 43210</Typography>
<Typography>Email: sales@sumautomation.com</Typography>
<Link href="#" underline="hover">GST: 27ABCDE1234F1Z5</Link>
</Stack>
</Paper>
</Grid>
</Grid>
</Container>
</Box>
  )
}

export default Contact