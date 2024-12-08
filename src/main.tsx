import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './styles/main.css'

import { Router } from './Router.tsx'

// biome-ignore lint: noUnusedVariables
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</StrictMode>,
)
