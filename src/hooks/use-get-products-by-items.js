import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/cart/cartSlice";

const useGetProductsByItems = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  const sendRequest = useCallback(async () => {
    if (!Object.keys(cartItems).length) {
      setLoading(false);
      return;
    }

    const ids = Object.keys(cartItems)
      .map((el) => `id=${el}`)
      .join("&");

      try {
        setLoading(true);
        const res = await fetch(`https://different-cultured-chair.glitch.me/items?${ids}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error.message || "Can not get items full data");
      }

    setLoading(false);
  }, [cartItems]);

  useEffect(() => {
    sendRequest(cartItems);
  }, [ cartItems, sendRequest]);

  
  const removeItems = useCallback((id) => {
    setProducts((prev) => prev.filter((el) => el.id !== id));
    dispatch(removeItem(id));

  }, [dispatch]);
  return { loading, error, products, cartItems, removeItems , sendRequest };
};

export default useGetProductsByItems;
