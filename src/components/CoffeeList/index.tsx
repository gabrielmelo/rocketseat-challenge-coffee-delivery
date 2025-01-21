import { ShoppingCartContext } from '@/context/shopping-cart-context'
import { priceFormatter } from '@/utils/formatter'
import { RiDeleteBinLine } from '@remixicon/react'
import { useContext } from 'react'
import { Counter } from '../Counter'

interface CoffeeListProps {
	id: string
	title: string
	image: string
	price: number
	quantity: number
}

export function CoffeeList({
	id,
	image,
	title,
	price,
	quantity,
}: CoffeeListProps) {
	const { removeItemCart, decrementItemQuantity, incrementItemQuantity } =
		useContext(ShoppingCartContext)

	const totalPrice = quantity * price

	function handleIncrementQuantity() {
		incrementItemQuantity(id)
	}

	function handleDecrementQuantity() {
		decrementItemQuantity(id)
	}

	function handleRemoveItemShoppingCart() {
		removeItemCart(id)
	}

	return (
		<div className="flex items-start justify-between">
			<div className="flex gap-5">
				<div className="h-16 w-16 overflow-hidden rounded-full">
					<img src={image} alt="" className="w-full object-cover" />
				</div>

				<div className="flex flex-col gap-2">
					<span className="font-bold font-sans text-base text-neutral-800">
						{title}
					</span>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Counter
								onDecrement={handleDecrementQuantity}
								onIncrement={handleIncrementQuantity}
								quantity={quantity}
							/>

							<button
								type="button"
								className="flex h-9 items-center gap-2 rounded bg-neutral-200 p-3 transition-all duration-150 ease-linear hover:brightness-90"
								onClick={handleRemoveItemShoppingCart}
							>
								<RiDeleteBinLine className="h-4 w-4 fill-violet-600" />

								<b className="text-neutral-600 uppercase">Remover</b>
							</button>
						</div>
					</div>
				</div>
			</div>

			<span className="font-bold font-sans text-base text-neutral-800">
				{priceFormatter.format(totalPrice)}
			</span>
		</div>
	)
}
