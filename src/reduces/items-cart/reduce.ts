import { produce } from "immer"
import { ActonsTypes } from "./actions"

export interface ItemCartType {
	id: string
	title: string
	image: string
	price: number
	quantity: number
}

interface ItemsCartState {
	itemsCart: ItemCartType[]
	order: null
}

export function itemsCartReducer(state: ItemsCartState, action: any) {
	switch (action.type) {
		case ActonsTypes.ADD_ITEM_CART: {
			return produce(state, (draft) => {
				const itemCartAlreadyAdded = draft.itemsCart.find(item => item.id === action.payload.itemToCart.id)

				if (itemCartAlreadyAdded) {
					itemCartAlreadyAdded.quantity += action.payload.itemToCart.quantity
				} else {
					draft.itemsCart.push(action.payload.itemToCart)
				}
			})
		}
		case ActonsTypes.DELETE_ITEM_CASE:
			return {
				...state,
				itemsCart: [...state.itemsCart, action.payload.itemToCart],
			}
		default:
			return state
	}
}
