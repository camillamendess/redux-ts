import React from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

// Styles
import * as Styles from "./styles";

import { useDispatch } from "react-redux";
import { removeProductFromCart, increaseProduct, decreaseProduct } from "../../redux/cart/actions";

interface ProductProps {
  id: string;
  price: number;
  name: string;
  imageUrl: string;
  quantity?: number;
}

const CartItem: React.FC<{ product: ProductProps }> = ({ product }) => {
  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.id));
  };

  const handleIncreaseClick = () => {
    dispatch(increaseProduct(product.id));
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseProduct(product.id));
  };

  return (
    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={product.imageUrl} />

      <Styles.CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <Styles.CartItemQuantity>
          <AiOutlineMinus
            color="black"
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            color="black"
            size={20}
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </Styles.CartItemQuantity>
      </Styles.CartItemInfo>

      <Styles.RemoveButton
        onClick={handleRemoveClick}
        aria-label={`Remove ${product.name}`}
      >
        <AiOutlineClose size={25} />
      </Styles.RemoveButton>
    </Styles.CartItemContainer>
  );
};

export default CartItem;
