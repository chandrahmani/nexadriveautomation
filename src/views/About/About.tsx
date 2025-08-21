import { Box, Container, Typography, Paper, Avatar, Grid } from '@mui/material';

function About() {
  return (
    <Container  sx={{ p: 8 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>  
        Welcome to our company! We are dedicated to providing the best services and
        solutions to our customers.
        SumAutomation is a leading brand in electricity and automation
        solutions. Our mission is to deliver reliable, efficient, and
        innovative energy products that power homes, industries, and
        businesses with sustainability in mind.
      </Typography>
      <Typography variant="body1" paragraph>
        Our mission is to innovate and deliver high-quality products that meet the
        needs of our clients. We believe in collaboration, creativity, and
        continuous improvement.
      </Typography>

    </Container>
  );
}

export default About;