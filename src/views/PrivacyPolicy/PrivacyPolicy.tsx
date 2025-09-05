import { Box, Container, Paper, Typography } from "@mui/material";

function PrivacyPolicy() {
  return (
    <Box sx={{ backgroundColor: "#ffffffff", py: 6, minHeight: "100vh" }}>
      <Container maxWidth="xl" sx={{ p: 2 }}>
        <Paper
          elevation={3}
          sx={{ p: 4, borderRadius: 3, backgroundColor: "#fff" }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >
            Privacy Policy
          </Typography>

          <Typography variant="body1" paragraph>
            At <strong>Nexadriveautomation</strong>, your privacy is very
            important to us. This Privacy Policy explains how we collect, use,
            and protect your personal information when you interact with our
            website, services, and products.
          </Typography>

          {/* Data Collection */}
          <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We may collect the following types of information:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Name, email, phone number, and contact details
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Billing and payment information (for purchases)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Technical data such as IP address, browser type, and device
                information
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Usage data including pages visited, time spent, and preferences
              </Typography>
            </li>
          </ul>

          {/* Usage of Data */}
          <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            The information we collect is used for the following purposes:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                To provide and improve our services
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                To communicate with you regarding inquiries, updates, or
                promotions
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                To process transactions securely
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                To ensure security, prevent fraud, and comply with legal
                obligations
              </Typography>
            </li>
          </ul>

          {/* Cookies */}
          <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            Cookies & Tracking
          </Typography>
          <Typography variant="body1" paragraph>
            Our website may use cookies and similar technologies to enhance your
            browsing experience, analyze site traffic, and personalize content.
            You can adjust your browser settings to disable cookies at any time.
          </Typography>

          {/* Security */}
          <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement industry-standard security measures to protect your
            information from unauthorized access, disclosure, or misuse.
            However, please note that no method of data transmission over the
            internet is 100% secure.
          </Typography>

          {/* Third-Party Services */}
          <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            Third-Party Services
          </Typography>
          <Typography variant="body1" paragraph>
            We do not sell or rent your personal data. However, we may share
            information with trusted third-party service providers (such as
            payment processors or analytics tools) only when necessary to
            deliver our services.
          </Typography>

          {/* User Rights */}
          <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Access and request a copy of your data
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Request corrections to inaccurate information
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Request deletion of your personal data (where applicable)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Opt out of marketing communications
              </Typography>
            </li>
          </ul>

          {/* Updates */}
          <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            Changes to This Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date.
          </Typography>

          {/* Footer note */}
          <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
            Last updated: {new Date().toLocaleDateString()}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default PrivacyPolicy;
