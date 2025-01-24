import {
	addItemActions,
	addOrderActions,
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
	order: null | any
	quantityItems: number
	addItemToCart: (itemToCart: ShoppingCartItemType) => void
	decrementItemQuantity: (idItem: string) => void
	incrementItemQuantity: (idItem: string) => void
	updateItemQuantity: (idItem: string) => void
	deleteItemCart: (IdItem: string) => void
	addOrder: (order: any) => void
}

interface CartProviderProps {
	children: ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function ShoppingCartProvider({ children }: CartProviderProps) {
	const initialState = {
		items: [],
		order: {},
	}
	
	const [itemsCartState, dispatch] = useReducer(
		shoppingCartReduce,
		initialState,
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

	function addOrder(order: any) {
		dispatch(addOrderActions(order))
	}

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
				deleteItemCart,
				addOrder,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}
