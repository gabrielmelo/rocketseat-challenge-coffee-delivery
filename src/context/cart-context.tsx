import { createContext, useState, type ReactNode } from 'react'

interface CoffeeToCart {
	id: string
	title: string
	image: string
	price: number
	quantity: number
}

interface CartContextType {
	countItemsInCart: number
	itemsInCart: CoffeeToCart[]
	createItemToCart: (data: CoffeeToCart) => void
}

interface CartProviderProps {
	children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
	const [itemsInCart, setNewItemsInCart] = useState<CoffeeToCart[]>([])

	function createItemToCart(data: CoffeeToCart) {
		const { id, title, image, price, quantity } = data

		setNewItemsInCart((state) => [
			...state,
			{
				id,
				title,
				image,
				price,
				quantity,
			},
		])
	}

	const countItemsInCart = itemsInCart.length

	return (
		<CartContext.Provider
			value={{
				countItemsInCart,
				itemsInCart,
				createItemToCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
