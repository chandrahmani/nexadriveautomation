import { BrowserRouter, Route, Routes } from 'react-router'
import { Box, ThemeProvider } from '@mui/material'
import { configureRoute, DASHBOARD_NESTED_ROUTES, MAIN_ROUTES } from './config/router.config'
import { theme } from './utils/theme.utils'
import ErrorBoundary from './ErrorBoundary'
import { Navigation } from './components'
import Footer from './components/Footer/Footer'
import DashboardLayout from './layout/DashboardLayout'

import About from './views/About'
import PrivacyPolicy from './views/PrivacyPolicy'
import TermsConditions from './views/TermsConditions'
import { ProtectedRoute } from './config/ProtectedRoute'

export default function Root() {
	return (
		<main>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<ErrorBoundary>
						<Navigation />
					</ErrorBoundary>

					{/* Recommend to use  ErrorBoundary to the specific section*/}
					<ErrorBoundary>
						<Box component="section" minHeight="60vh">
							<Routes>
								{configureRoute(MAIN_ROUTES)}
								<Route element={<ProtectedRoute/>}>
									{/* dashboard nested routes */}
									<Route path='about' element={<About />} />
									<Route path='privacy' element={<PrivacyPolicy />}/>
									<Route  path='terms' element={<TermsConditions />}/>
									<Route path="dashboard" element={<DashboardLayout />}>
										{configureRoute(DASHBOARD_NESTED_ROUTES)}
									</Route>
								</Route>


							</Routes>
						</Box>
					</ErrorBoundary>


					<ErrorBoundary>
						<Footer />
					</ErrorBoundary>
				</ThemeProvider>
			</BrowserRouter>
		</main>
	)
}

