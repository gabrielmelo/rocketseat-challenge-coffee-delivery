import { useContext } from 'react'

import { Link } from 'react-router'
import { Location } from '../Location'

import { Logo } from '../Logo'
import { CartButton } from './CartButton'

import { ShoppingCartContext } from '@/context/shopping-cart-context'

export function Header() {
	const { quantityItems } = useContext(ShoppingCartContext)

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
						<Link to="/shopping-cart">
							<CartButton amount={quantityItems} disabled={isCartEmpty} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
