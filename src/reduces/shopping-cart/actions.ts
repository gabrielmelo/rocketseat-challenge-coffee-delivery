// import type { ItemCartType } from './reduce'

import type { ShoppingCartItemType } from './reduce'

export enum ActionsTypes {
	ADD_ITEM_CART = 'ADD_ITEM_CART',
	ADD_ORDER = 'ADD_ORDER',
	UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY',
	DELETE_ITEM_CASE = 'DELETE_ITEM_CASE',
	INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
	DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
}

export function addItemActions(itemToCart: ShoppingCartItemType) {
	return {
		type: ActionsTypes.ADD_ITEM_CART,
		payload: {
			itemToCart,
		},
	}
}

export function updateQuantityActions(idItem: string) {
	return {
		type: ActionsTypes.UPDATE_ITEM_QUANTITY,
		payload: {
			idItem,
		},
	}
}

export function decrementItemQuantityActions(idItem: string) {
	return {
		type: ActionsTypes.DECREMENT_ITEM_QUANTITY,
		payload: {
			idItem,
		},
	}
}

export function incrementItemQuantityActions(idItem: string) {
	return {
		type: ActionsTypes.INCREMENT_ITEM_QUANTITY,
		payload: {
			idItem,
		},
	}
}

export function deleteItemActions(idItem: string) {
	return {
		type: ActionsTypes.DELETE_ITEM_CASE,
		payload: {
			idItem,
		},
	}
}

export function addOrderActions(order: any) {
	return {
		type: ActionsTypes.ADD_ORDER,
		payload: {
			order,
		}
	}
}
