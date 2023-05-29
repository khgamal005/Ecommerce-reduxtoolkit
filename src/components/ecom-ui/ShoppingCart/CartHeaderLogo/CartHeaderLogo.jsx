import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import shoppingCartImg from  "../../../../assets/shopping-card.svg"
import CartDrop from "../CartDrop/CartDrop";
import { useCallback } from "react";
import { cartTotalQuantity } from "../../../../store/cart/cartSlice";


const {
  shoppingCart,
  shoppingCartCounter,
  pumpCart
} = styles;


const CartHeaderLogo = () => {
  const [openCartDrop, setOpenCartDrop] = useState(false);
  const [isAnimateCart, setIsAnimateCart] = useState(false);
  const totalQuantity = useSelector(cartTotalQuantity);
  const cartClasses = `${shoppingCartCounter} ${isAnimateCart ? pumpCart : ""}`;
  
  const closeCartDrop = useCallback(() => {
    setOpenCartDrop(false);
  }, []);

  
  useEffect(() => {
    if (totalQuantity === 0) return;
    setIsAnimateCart(true);
    const debounce = setTimeout(() => {
      setIsAnimateCart(false);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [totalQuantity]);

  return (
    <div>
    <div
     className={shoppingCart}
     onClick={() => setOpenCartDrop((prev) => !prev)}

     >
      <img alt="" src={shoppingCartImg} width="30" />
      <div className={cartClasses}>{totalQuantity}</div>
    </div>
    {openCartDrop ? <CartDrop   close={closeCartDrop} /> : null}
    </div>
  )
}

export default CartHeaderLogo
