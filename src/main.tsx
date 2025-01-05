import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './styles/main.css'

import { Router } from './Router.tsx'
import { CartProvider } from './context/cart-context.tsx'

// biome-ignore lint: noUnusedVariables
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<CartProvider>
				<Router />
			</CartProvider>
		</BrowserRouter>
	</StrictMode>,
)
