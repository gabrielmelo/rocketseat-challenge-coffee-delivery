import { CartButton } from '../CartButton'
import { Location } from '../Location'

import { Logo } from '../Logo'

export function Header() {
	return (
		<div className="absolute top-0 h-16 w-full lg:h-28">
			<div className="container py-4 md:py-8">
				<div className="flex items-center justify-between">
					<Logo />

					<div className="flex gap-2">
						<Location city="Porto Alegre, RS" />
						<CartButton amount={2} />
					</div>
				</div>
			</div>
		</div>
	)
}
