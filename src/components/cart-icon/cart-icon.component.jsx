import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/toggleCart.context";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className="cart-icon-container" onClick={toggleIsOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
