import { useContext, useEffect, useState } from 'react'
import { CardCoffee } from '../CardCoffee'
import { api } from '@/lib/axios'
import { CartContext } from '@/context/cart-context'

interface Coffee {
	id: string
	title: string
	description: string
	image: string
	price: number
	quantity: number
	tags: Array<string>
}

export function FeacturedCoffee() {
	const { createItemToCart } = useContext(CartContext)

	const [feacturedCoffee, setFeacturedCoffee] = useState<Coffee[]>([])

	const fetchFeactureCoffee = async () => {
		const response = await api.get('coffees')

		setFeacturedCoffee(response.data)
	}

	useEffect(() => {
		fetchFeactureCoffee()
	}, [])

	function handleCreateItemToCart(data: Coffee) {
		const { id, title, image, price, quantity } = data

		createItemToCart({
			id,
			title,
			image,
			price,
			quantity,
		})
	}

	return (
		<div className="py-8">
			<div className="container">
				<div className="mb-8">
					<h2 className="font-extrabold text-gray-800 lg:text-4xl">
						Nossos cafés
					</h2>
				</div>

				<div className="grid pt-8 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-16">
					{feacturedCoffee.map((coffee) => {
						return (
							<CardCoffee
								id={coffee.id}
								key={coffee.id}
								title={coffee.title}
								description={coffee.description}
								image={coffee.image}
								tags={coffee.tags}
								price={coffee.price}
								onCreateItemToCart={handleCreateItemToCart}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}
