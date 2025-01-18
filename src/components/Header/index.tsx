import { Link } from 'react-router'
import { Location } from '../Location'
import { CartButton } from './CartButton'

import { CartContext } from '@/context/cart-context'
import { useContext } from 'react'
import { Logo } from '../Logo'

export function Header() {
	const { quantityItems } = useContext(CartContext)

	const isCartEmpty = quantityItems <= 0

	return (
		<div className="absolute top-0 h-16 w-full lg:h-28">
			<div className="container py-4 md:py-8">
				<div className="flex items-center justify-between">
					<Link to="/">
						<Logo />
					</Link>

					<div className="flex gap-2">
						<Location city="Porto Alegre, RS" />
						<Link to="/checkout">
							<CartButton amount={quantityItems} disabled={isCartEmpty} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
