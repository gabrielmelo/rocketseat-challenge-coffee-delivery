import { ActionsTypes } from './actions'

export interface ShoppingCartItemType {
	id: string
	title: string
	image: string
	price: number
	quantity: number
}

interface ShoppingCartState {
	items: ShoppingCartItemType[]
	order: null
}

export function shoppingCartReduce(state: ShoppingCartState, action: any) {
	switch (action.type) {
		case ActionsTypes.ADD_ITEM_CART:
			return {
				...state,
				items: [...state.items, action.payload.itemToCart],
			}

		case ActionsTypes.DELETE_ITEM_CASE: {
			const updateItemsWithoutDeleteOne = state.items.filter(
				(item) => item.id !== action.payload.idItem,
			)

			return {
				...state,
				items: updateItemsWithoutDeleteOne,
			}
		}

		case ActionsTypes.DECREMENT_ITEM_QUANTITY: {
			const updateItemAfterDecreatementQuantity = state.items.map((item) => {
				if (item.id === action.payload.idItem) {
					return {
						...item,
						quantity: item.quantity > 2 ? item.quantity - 1 : 1,
					}
				}

				return item
			})

			return {
				...state,
				items: updateItemAfterDecreatementQuantity,
			}
		}

		case ActionsTypes.INCREMENT_ITEM_QUANTITY: {
			const updateItemAfterIncreatementQuantity = state.items.map((item) => {
				if (item.id === action.payload.idItem) {
					return {
						...item,
						quantity: item.quantity + 1,
					}
				}

				return item
			})

			return {
				...state,
				items: updateItemAfterIncreatementQuantity,
			}
		}

		default:
			return state
	}
}
