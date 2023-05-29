import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import Loading from "../components/ecom-ui/Loading/Loading";
import { CartList, CartTotalPrice } from "../components/ecom-ui";
import useGetProductsByItems from "../hooks/use-get-products-by-items";
import { changeQuantity , cartTotalPrice} from "../store/cart/cartSlice";

const ShoppingCart = () => {
  const { loading, error, products,removeItems } = useGetProductsByItems();
  const dispatch = useDispatch();


  const totalPrice = useSelector((state) => cartTotalPrice(state, products));





  const changeQuantityHandler = useCallback(
    (data) => {
      dispatch(changeQuantity(data));
    },
    [dispatch]
  );

  const removeItemHandler=useCallback(
    (data)=>{
    const {id}=data
    removeItems(id);

  },[removeItems])


  return (
    <div>
    <Loading loading={loading} error={error}>
        <CartList
           products={products}
           changeQuantityHandler={changeQuantityHandler}
           removeItemHandler={removeItemHandler}
        />
        <CartTotalPrice totalPrice={totalPrice}/>
      </Loading>
    </div>
  )  
  
};

export default ShoppingCart;
