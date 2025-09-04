import {
  Box,
  Container,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";

function TermsConditions() {
  return (
    <Box sx={{ p: 2 }}>
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: "#fafafa",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Terms & Conditions
          </Typography>

          <Typography variant="body1" paragraph>
            By accessing and using <strong>SumAutomation</strong> and{" "}
            <strong>NexaDriveAutomation</strong> services and products, you
            agree to comply with the following terms and conditions. Please read
            them carefully before making use of our offerings.
          </Typography>

          <Typography variant="h6" gutterBottom>
            1. Use of Products & Services
          </Typography>
          <Typography variant="body1" paragraph>
            All products are intended for professional and authorized use only.
            Customers are required to:
          </Typography>
          <List dense>
            <ListItem>
              Follow installation and usage guidelines provided by us.
            </ListItem>
            <ListItem>
              Avoid modifications, reverse engineering, or tampering.
            </ListItem>
            <ListItem>
              Refrain from unauthorized resale or distribution.
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom>
            2. Warranty & Support
          </Typography>
          <Typography variant="body1" paragraph>
            Products are covered under warranty as per the policies specified at
            the time of purchase. Warranty does not apply if:
          </Typography>
          <List dense>
            <ListItem>Products are misused, mishandled, or modified.</ListItem>
            <ListItem>
              Damage is caused by external factors beyond our control.
            </ListItem>
            <ListItem>Unauthorized repairs or services are attempted.</ListItem>
          </List>

          <Typography variant="h6" gutterBottom>
            3. Intellectual Property
          </Typography>
          <Typography variant="body1" paragraph>
            All trademarks, brand names, product designs, and content related to
            SumAutomation and NexaDriveAutomation are protected under applicable
            intellectual property laws. Unauthorized copying, reproduction, or
            redistribution is strictly prohibited.
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. Liability
          </Typography>
          <Typography variant="body1" paragraph>
            We are not liable for damages or losses arising from the misuse of
            our products or services. Customers are responsible for ensuring
            proper installation, maintenance, and safe operation of equipment.
          </Typography>

          <Typography variant="h6" gutterBottom>
            5. Changes to Terms
          </Typography>
          <Typography variant="body1" paragraph>
            We reserve the right to update, amend, or replace these terms at any
            time without prior notice. Customers are encouraged to review this
            section regularly to stay updated.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ mt: 3, fontStyle: "italic", textAlign: "center" }}
          >
            Last updated: September 2025
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default TermsConditions;
