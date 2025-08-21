import { Box, Container, Typography, Paper, Avatar, Grid } from '@mui/material';

function TermsConditions() {
  return (
    <Container sx={{ p: 8 }}>
        <Typography variant="h4" gutterBottom>
          Terms & Conditions
        </Typography>
        <Typography variant="body1" paragraph>
          By accessing and using SumAutomation’s services and products, you agree 
          to comply with our terms and conditions. All products are subject to 
          warranty policies and should be used as per the provided guidelines. 
          Unauthorized resale or misuse of our products is strictly prohibited.
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to update these terms at any time. Customers are 
          encouraged to review this section periodically.
        </Typography>
    </Container>
  );
}

export default TermsConditions;