import CartActionTypes from "./action-types";

interface ProductProps {
  id: string;
  price: number;
  name: string;
  imageUrl: string;
}

interface initialStateProps {
  products: ProductProps[];
  productsTotalPrice: number;
}

const initialState: initialStateProps = {
  products: [],
  productsTotalPrice: 0
}

interface ActionCart {
  type: string;
  payload?: any;
}

const cartReducer = (state = initialState, action: ActionCart): initialStateProps => {
  switch (action.type) {

    case CartActionTypes.ADD_PRODUCT:
      return {
        ...initialState,
        products: [...initialState.products, action.payload],
      };

    default:
      return state;
  }
}

export default cartReducer;