// import { shoppingCartReduce } from '@/reduces/shopping-cart/reduce'
import {
	ActionsTypes,
	addItemActions,
	decrementItemQuantityActions,
	deleteItemActions,
	incrementItemQuantityActions,
	updateQuantityActions,
} from '@/reduces/shopping-cart/actions'
import {
	type ShoppingCartItemType,
	shoppingCartReduce,
} from '@/reduces/shopping-cart/reduce'
import { type ReactNode, createContext, useEffect, useReducer } from 'react'

type ShoppingCartContextType = {
	items: ShoppingCartItemType[]
	order: null
	quantityItems: number
	addItemToCart: (itemToCart: ShoppingCartItemType) => void
	decrementItemQuantity: (idItem: string) => void
	incrementItemQuantity: (idItem: string) => void
	updateItemQuantity: (idItem: string) => void
	removeItemCart: (IdItem: string) => void
}

interface CartProviderProps {
	children: ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function ShoppingCartProvider({ children }: CartProviderProps) {
	const [itemsCartState, dispatch] = useReducer(
		shoppingCartReduce,
		{
			items: [],
			order: null,
		},
		(initialState) => {
			const localStorageStateJSON = localStorage.getItem(
				'@coffee-delivery:items-cart-state',
			)

			if (localStorageStateJSON) {
				return JSON.parse(localStorageStateJSON)
			}

			return initialState
		},
	)

	useEffect(() => {
		const stateJSON = JSON.stringify(itemsCartState)

		localStorage.setItem('@coffee-delivery:items-cart-state', stateJSON)
	}, [itemsCartState])

	function addItemToCart(itemToCart: ShoppingCartItemType) {
		dispatch(addItemActions(itemToCart))
	}

	function updateItemQuantity(idItem: string) {
		dispatch(updateQuantityActions(idItem))
	}

	function decrementItemQuantity(idItem: string) {
		dispatch(decrementItemQuantityActions(idItem))
	}

	function incrementItemQuantity(idItem: string) {
		dispatch(incrementItemQuantityActions(idItem))
	}

	function deleteItemCart(idItem: string) {
		dispatch(deleteItemActions(idItem))
	}

	const { items, order } = itemsCartState

	const quantityItems = items.length

	return (
		<ShoppingCartContext.Provider
			value={{
				items,
				order,
				quantityItems,
				addItemToCart,
				updateItemQuantity,
				decrementItemQuantity,
				incrementItemQuantity,
				removeItemCart: deleteItemCart,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}
