import { ShoppingCartContext } from '@/context/shopping-cart-context'
// import { CartContext } from '@/context/shopping-cart-context'
import { priceFormatter } from '@/utils/formatter'
import { RiShoppingCartLine } from '@remixicon/react'
import { nanoid } from 'nanoid'
import { useContext, useState } from 'react'
import { Counter } from '../Counter'
import { TagCoffee } from '../TagCoffee'

interface CoffeeType {
	id: string
	title: string
	description: string
	image: string
	price: number
}

interface CoffeeCardProps extends CoffeeType {
	tags: Array<string>
}

export function CardCoffee({
	id,
	title,
	description,
	image,
	price,
	tags,
}: CoffeeCardProps) {
	const { addItemToCart } = useContext(ShoppingCartContext)

	const [quantity, setQuantity] = useState(1)

	function decrementQuantity() {
		setQuantity((state) => state - 1)
	}

	function incrementQuantity() {
		setQuantity((state) => state + 1)
	}

	function handleCreateItemToCart() {
		addItemToCart({
			id,
			title,
			image,
			price,
			quantity,
		})
	}

	return (
		<div className="flex flex-col items-center rounded-md border border-gray-100 bg-gray-100 px-6 py-5">
			<div className="flex flex-col items-center gap-3">
				<div className="-mt-14 h-32 w-32 overflow-hidden rounded-full bg-gray-100">
					<img src={image} alt="" className="w-full object-cover" />
				</div>

				<div className="flex items-center justify-center gap-2">
					{tags.map((tag) => (
						<TagCoffee key={nanoid()} text={tag} />
					))}
				</div>
			</div>

			<div className="mt-4">
				<div className="flex flex-col items-center gap-2 text-center">
					<strong className="text-gray-800 text-xl">{title}</strong>
					<span className="font-semibold text-base/tight text-gray-600">
						{description}
					</span>
				</div>
			</div>

			<div className="mt-9 flex items-center justify-between gap-7">
				<div className="flex items-baseline gap-1">
					<b className="text-2xl text-neutral-800">
						{priceFormatter.format(price)}
					</b>
				</div>

				<div className="flex items-center gap-2">
					<Counter
						onDecrement={decrementQuantity}
						onIncrement={incrementQuantity}
						quantity={quantity}
					/>

					<button
						type="button"
						className="flex h-9 items-center justify-center rounded bg-violet-600 p-3 transition-all duration-150 ease-linear hover:brightness-90"
						onClick={handleCreateItemToCart}
					>
						<RiShoppingCartLine className="h-4 w-4 fill-white" />
					</button>
				</div>
			</div>
		</div>
	)
}
