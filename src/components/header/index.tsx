import React from "react";
import { useState } from "react";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import UserActionTypes from "../../redux/user/action-types";
import { loginUser, logoutUser } from "../../redux/user/actions";

const Header = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  console.log({ currentUser });

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({ name: "John Doe", email: "John@gmail.com" }));
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? <div onClick={handleLogoutClick}>Sair</div>
          : <div onClick={handleLoginClick}>Login</div>
        }
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;