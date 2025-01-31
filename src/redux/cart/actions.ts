import CartActionTypes from "./action-types";

interface AddProductToCartPayload {
  products: ProductProps[];
  productsTotalPrice: number;
}

interface ProductProps {
  id: string;
  price: number;
  name: string;
  imageUrl: string;
}

export const addProductToCart = (payload: AddProductToCartPayload) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});