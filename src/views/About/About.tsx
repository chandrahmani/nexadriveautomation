import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

function About() {
  return (
    <Box
      sx={{ backgroundColor: "#ffffffff", py: 6, minHeight: "100vh" }}
    >
      <Container maxWidth="xl" sx={{p:2}}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, backgroundColor: "#fff" }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Welcome to <strong>Nexadriveautomation</strong>! We are dedicated
              to providing the best services and solutions to our customers.
              Building on the strong foundation of{" "}
              <strong>SumAutomation</strong>, a leading brand in electricity and
              automation, we bring cutting-edge technologies to power homes,
              industries, and businesses with sustainability in mind.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Our mission is to deliver reliable, efficient, and innovative
              energy and automation products that meet the evolving needs of our
              clients. We believe in collaboration, creativity, and continuous
              improvement—driving progress while ensuring a greener tomorrow.
            </Typography>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                borderRadius: 3,
                background: "linear-gradient(135deg, #1976d2, #42a5f5)",
                color: "#fff",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Why Choose Us?
              </Typography>
              <Typography variant="body1" gutterBottom>
                ✅ Expertise in automation and energy solutions
              </Typography>
              <Typography variant="body1" gutterBottom>
                ✅ Reliable, sustainable, and efficient products
              </Typography>
              <Typography variant="body1" gutterBottom>
                ✅ Innovation-driven approach
              </Typography>
              <Typography variant="body1">
                ✅ Dedicated customer support
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8 }} />

        {/* Extra Info Section */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" color="text.secondary">
              To be a global leader in smart automation and sustainable energy
              solutions, driving digital transformation across industries while
              contributing to a greener planet.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Our Values
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Integrity, innovation, and customer satisfaction are at the heart
              of everything we do. We are committed to building trust and
              long-term relationships with our partners and clients.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Our Expertise
            </Typography>
            <Typography variant="body1" color="text.secondary">
              With years of experience in automation, electrical systems, and
              IoT-driven energy solutions, we empower businesses with smarter
              and more efficient technologies.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8 }} />

        {/* Sustainability & Future Goals */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Sustainability & Innovation
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              At Nexadriveautomation, sustainability isn’t just a choice — it’s
              our responsibility. We actively invest in renewable energy
              projects, eco-friendly product design, and energy-efficient
              automation systems that reduce carbon footprints worldwide.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Our future goal is to revolutionize automation by integrating
              artificial intelligence, machine learning, and IoT technologies
              into every solution we deliver — shaping smarter industries and
              greener cities.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: "#ffffff",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Industries We Serve
              </Typography>
              <Typography variant="body1">
                🏠 Residential & Commercial
              </Typography>
              <Typography variant="body1">
                🏭 Manufacturing & Industrial Plants
              </Typography>
              <Typography variant="body1">
                ⚡ Power & Renewable Energy
              </Typography>
              <Typography variant="body1">
                🌆 Smart Cities & Infrastructure
              </Typography>
              <Typography variant="body1">🚘 Automotive & Robotics</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 8 }} />

        {/* Team Section */}
        <Box textAlign="center" sx={{ mt: 6 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Meet Our Team
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Behind Nexadriveautomation is a team of passionate innovators,
            engineers, and industry experts driving progress every day.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              { name: "Amit Sharma", role: "Founder & CEO" },
              { name: "Priya Verma", role: "Head of Operations" },
              { name: "Rahul Mehta", role: "Chief Engineer" },
            ].map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    textAlign: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      margin: "0 auto",
                      mb: 2,
                      bgcolor: "#1976d2",
                    }}
                  >
                    {member.name.charAt(0)}
                  </Avatar>
                  <Typography variant="h6" fontWeight="bold">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default About;
