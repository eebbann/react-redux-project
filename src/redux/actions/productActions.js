
 import {ActionType} from '../constants/actionTypes';
 
 export const SetProducts = (products) => {
	 return {
	 type: ActionType.SET_PRODUCTS,
	 Payload:  products,
	  
		}
 }
 
 export const SetProduct = (product) => {
	return {
	type: ActionType.SET_PRODUCT,
	Payload:  product, 
	 }
}