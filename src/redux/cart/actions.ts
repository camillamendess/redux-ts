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


export const removeProductFromCart = (payload: string) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseProduct = (payload: string) => ({
  type: CartActionTypes.INCREASE_PRODUCT,
  payload,
});

export const decreaseProduct = (payload: string) => ({
  type: CartActionTypes.DECREASE_PRODUCT,
  payload,
})