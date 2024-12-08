import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { DefaultLayout } from './layouts/Default'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/checkout" element={<Checkout />} />
			</Route>
		</Routes>
	)
}
