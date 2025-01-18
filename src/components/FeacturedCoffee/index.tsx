import { api } from '@/lib/axios'
import { useEffect, useState } from 'react'
import { CardCoffee } from '../CoffeeCard'

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
	const [feacturedCoffee, setFeacturedCoffee] = useState<Coffee[]>([])

	const fetchFeactureCoffee = async () => {
		const response = await api.get('coffees')

		setFeacturedCoffee(response.data)
	}

	useEffect(() => {
		fetchFeactureCoffee()
	})

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
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}
