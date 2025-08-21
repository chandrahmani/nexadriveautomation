
import { Box, Container, Typography, Link, Stack, Grid, } from '@mui/material';


function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: (theme) =>
					theme.palette.mode === 'light'
						? theme.palette.grey[200]
						: theme.palette.grey[800],
				py: 3,
				mt: 'auto', // Push footer to the bottom of the page
			}}
		>
			<Container >
				<Grid container spacing={3} alignItems="center">
					<Grid item xs={12} md={6}>
						<Typography variant="h6" sx={{ fontWeight: 800 }}>SumAutomation</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Stack direction="row" justifyContent={{ xs: "flex-start", md: "flex-end" }} spacing={3}>
							<Link href="/about" underline="hover">About Us</Link>
							<Link href="/privacy" underline="hover">Privacy Policy</Link>
							<Link href="/terms" underline="hover">Terms & Conditions</Link>
						</Stack>

					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default Footer;