
import { Box, Container, Typography, Link, Stack } from '@mui/material';

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
			<Container maxWidth="lg">
				<Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" spacing={2} alignItems={{ xs: "flex-start", sm: "center" }}>
					<Stack direction="row" spacing={1} alignItems="center">

						<Typography fontWeight={800}>SumAutomation</Typography>
					</Stack>
					<Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} SumAutomation. All rights reserved.</Typography>
				</Stack>
			</Container>
		</Box>
	);
}

export default Footer;