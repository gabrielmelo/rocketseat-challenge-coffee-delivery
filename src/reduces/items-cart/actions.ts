import type { ItemCartType } from "./reduce";

export enum ActonsTypes {
	ADD_ITEM_CART = "ADD_ITEM_CART",
	DELETE_ITEM_CASE = "DELETE_ITEM_CASE"
}

export function addItemToCartAction(itemToCart: ItemCartType) {
	return {
		type: ActonsTypes.ADD_ITEM_CART,
		payload: {
			itemToCart,
		},
	}
}
