// import { Counter } from '../Counter'

interface CoffeeListProps {
	id: string
	title: string
	image: string
	price: number
}

export function CoffeeList({ image, title, price }: CoffeeListProps) {
	return (
		<div className="flex justify-between">
			<div className="flex gap-5">
				<div className="h-16 w-16 overflow-hidden rounded-full">
					<img src={image} alt="" className="w-full object-cover" />
				</div>

				<div>
					<span className="font-bold font-sans text-base text-neutral-800">
						{title}
					</span>
					<div>
						{/* <Counter
							onDecrement={decrementQuantity}
							onIncrement={incrementQuantity}
							quantity={quantity}
						/> */}

						<button type="button">remover</button>
					</div>
				</div>
			</div>

			<span className="font-bold font-sans text-base text-neutral-800">
				{price}
			</span>
		</div>
	)
}
