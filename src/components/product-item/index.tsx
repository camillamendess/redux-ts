import React from "react";
import { BsCart } from "react-icons/bs";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";

interface ProductProps {
  id: string;
  price: number;
  name: string;
  imageUrl: string;
}

const ProductItem: React.FC<{ product: ProductProps }> = ({ product }) => {
  const dispatch = useDispatch();
  const handleProductClick = () => {
    dispatch(addProductToCart({ products: [product], productsTotalPrice: product.price }));
  };

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton
          onClick={handleProductClick}
          startIcon={<BsCart />}
        >
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
