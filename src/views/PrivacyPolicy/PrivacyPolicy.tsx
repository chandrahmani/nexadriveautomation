import { Box, Container, Typography, Paper, Avatar, Grid } from '@mui/material';

function PrivacyPolicy() {
  return (
    <Container sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          At SumAutomation, we value your privacy. Any personal data collected, 
          such as name, email, and contact information, will be used solely for 
          communication and service purposes.
        </Typography>
        <Typography variant="body1" paragraph>
          We do not sell or share customer data with third parties, except where 
          required by law. Security measures are in place to safeguard your 
          information.
        </Typography>
      </Container>
  );
}

export default PrivacyPolicy;