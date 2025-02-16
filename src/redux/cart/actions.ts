import CartActionTypes from "./action-types";

interface AddProductToCartPayload {
  id: string;
  price: number;
  name: string;
  imageUrl: string;
  quantity?: number;
}

export const addProductToCart = (payload: AddProductToCartPayload) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});