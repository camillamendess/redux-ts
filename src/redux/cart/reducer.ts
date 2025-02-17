import CartActionTypes from "./action-types";

interface ProductProps {
  id: string;
  price: number;
  name: string;
  imageUrl: string;
  quantity: number;
}

interface initialStateProps {
  products: ProductProps[];
  productsTotalPrice: number;
}

interface ActionCart {
  type: string;
  payload?: any;
}

const initialState: initialStateProps = {
  products: [],
  productsTotalPrice: 0,
};

const cartReducer = (state = initialState, action: ActionCart): initialStateProps => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:

      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      let updatedProducts;

      if (productIsAlreadyInCart) {
        updatedProducts = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        updatedProducts = [...state.products, { ...action.payload, quantity: 1 }];
      }

      // Calcular o total dinamicamente
      const updatedTotalPrice = updatedProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );

      return {
        ...state,
        products: updatedProducts,
        productsTotalPrice: updatedTotalPrice, // Atualiza o total corretamente
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      }

    case CartActionTypes.INCREASE_PRODUCT:

      return {
        ...state,
        products: state.products.map(product => product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
        )
      }

    case CartActionTypes.DECREASE_PRODUCT:
      return {
        ...state,
        products: state.products
          .map(product => product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product)
          .filter(product => product.quantity > 0) // Remove o produto se a quantidade for 0
      }

    default:
      return state;
  }
};

export default cartReducer;
