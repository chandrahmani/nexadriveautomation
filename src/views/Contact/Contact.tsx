import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const handleWhatsAppClick = () => {
  const whatsappNumber = "8709517725"; // replace with your number
  const message =
    "Hello, I’d like to know more about NexaDriveAutomation services.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

function Contact() {
  return (
    <Box
      id="contact"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Paper elevation={4} sx={{ p: { xs: 3, sm: 5 }, borderRadius: 3 }}>
          {/* Header */}
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            We’d love to hear from you. Reach out via the form, phone, or
            WhatsApp.
          </Typography>

          <Grid container spacing={5}>
            {/* Left: Contact Form */}
            <Grid item xs={12} md={7}>
              <Box component="form" noValidate autoComplete="off">
                <Grid container spacing={3}>
                  {/* Name */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      required
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      variant="outlined"
                      required
                    />
                  </Grid>

                  {/* Mobile Number */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Mobile Number"
                      type="tel"
                      variant="outlined"
                      required
                    />
                  </Grid>

                  {/* Subject */}
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Subject" variant="outlined" />
                  </Grid>

                  {/* Message */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={5}
                      variant="outlined"
                      required
                    />
                  </Grid>

                  {/* Buttons */}
                  <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent="center"
                    gap={2}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        borderRadius: 3,
                        px: 5,
                        py: 1.5,
                        fontWeight: "bold",
                        textTransform: "none",
                      }}
                    >
                      Send Message
                    </Button>

                    <Button
                      onClick={handleWhatsAppClick}
                      variant="outlined"
                      size="large"
                      // startIcon={<WhatsAppIcon />}
                      sx={{
                        borderRadius: 3,
                        px: 4,
                        py: 1.5,
                        fontWeight: "bold",
                        textTransform: "none",
                        color: "#25D366",
                        borderColor: "#25D366",
                        "&:hover": {
                          backgroundColor: "#25D366",
                          color: "#fff",
                        },
                      }}
                    >
                      WhatsApp
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Right: Company Info */}
            <Grid item xs={12} md={5}>
              <Typography variant="h6" gutterBottom>
                Our Office
              </Typography>
              <Box display="flex" alignItems="center" mb={2}>
                {/* <LocationOnIcon color="primary" sx={{ mr: 1 }} /> */}
                <Typography>123 Nexa Street, Delhi, India</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                {/* <PhoneIcon color="primary" sx={{ mr: 1 }} /> */}
                <Typography>+91 98765 43210</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                {/* <EmailIcon color="primary" sx={{ mr: 1 }} /> */}
                <Typography>support@nexadriveautomation.com</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                {/* <AccessTimeIcon color="primary" sx={{ mr: 1 }} /> */}
                <Typography>Mon – Sat: 9:00 AM – 6:00 PM</Typography>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Map Embed */}
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.5078970985!2d77.068899!3d28.527280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b5b5d5e4db%3A0x12345!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1675678901234!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "10px" }}
                loading="lazy"
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default Contact;
