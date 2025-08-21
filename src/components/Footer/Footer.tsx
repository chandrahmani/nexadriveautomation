
import { Box, Container, Typography, Link, Stack, Grid, } from '@mui/material';


function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: '#e2e2deff',
				py: 3,
				mt: 'auto', // Push footer to the bottom of the page
			}}
		>
			<Box sx={{pl:4 , pr:4}}>
				<Grid container spacing={3} alignItems="center">
					<Grid item xs={12} md={6}>
						<Typography variant="h6" sx={{ fontWeight: 800 }}>
							<img src="/pre.png" alt="Logo" style={{ height: "100px", width: "200px", }} />
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Stack direction="row" justifyContent={{ xs: "flex-start", md: "flex-end" }} spacing={3}>
							<Link href="/about" underline="hover" sx={{ color: 'black' }}>About Us</Link>
							<Link href="/privacy" underline="hover" sx={{ color: 'black' }}>Privacy Policy</Link>
							<Link href="/terms" underline="hover" sx={{ color: 'black' }}>Terms & Conditions</Link>
						</Stack>

					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default Footer;