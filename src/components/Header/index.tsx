import { Link } from 'react-router'
import { CartButton } from './CartButton'
import { Location } from '../Location'

import { Logo } from '../Logo'
import { useContext } from 'react'
import { CartContext } from '@/context/cart-context'

export function Header() {
	const { countItemsInCart } = useContext(CartContext)

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
							<CartButton amount={countItemsInCart} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
