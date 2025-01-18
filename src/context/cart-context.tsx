import { addItemToCartAction } from '@/reduces/items-cart/actions'
import {
	type ItemCartType,
	itemsCartReducer,
} from '@/reduces/items-cart/reduce'
import { type ReactNode, createContext, useReducer } from 'react'

interface CartContextType {
	itemsCart: ItemCartType[]
	quantityItems: number
	addItemToCart: (data: ItemCartType) => void
}

interface CartProviderProps {
	children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
	const [ItemsCartState, dispatch] = useReducer(itemsCartReducer, {
		itemsCart: [],
		order: null,
	})

	const { itemsCart } = ItemsCartState

	function addItemToCart(itemToCart: ItemCartType) {
		dispatch(addItemToCartAction(itemToCart))

		// const itemAlreadyAdded = itemsCart.find((item) => item.id === data.id)
		// if (!itemAlreadyAdded) {
		// }

		// const updateQuantity = itemsCart.map((item) => {
		// 	if (item.id === data.id) {
		// 		return {
		// 			...item,
		// 			quantity: item.quantity + data.quantity,
		// 		}
		// 	}

		// 	return item
		// })

		// dispatch({
		// 	type: 'ADD_ITEM_CART',
		// 	payload: {
		// 		data: updateQuantity,
		// 	},
		// })
	}

	const quantityItems = itemsCart.length

	return (
		<CartContext.Provider
			value={{
				itemsCart,
				quantityItems,
				addItemToCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
