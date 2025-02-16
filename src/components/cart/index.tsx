import React from "react";
// Styles
import * as Styles from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import CartItem from "../cart-item";

interface CartProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<CartProps> = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const cartState = useSelector((state: RootState) => state.cartReducer);
  console.log("Cart state:", cartState);

  // Acesse os produtos dentro dos objetos
  const allProducts = cartState.products;
  console.log("Produtos renderizados:", allProducts);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {allProducts.map((product) => <CartItem key={product.id} product={product} />)}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
