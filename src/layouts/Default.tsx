import { Header } from '@/components/Header'
import { Outlet } from 'react-router'

export function DefaultLayout() {
	return (
		<div className="h-screen bg-slate-50">
			<Header />
			<Outlet />
		</div>
	)
}
