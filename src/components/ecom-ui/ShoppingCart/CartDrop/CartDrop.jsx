import { useNavigate } from "react-router-dom";
import { Loading } from "../../../Layout";
import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import useGetProductsByItems from "../../../../hooks/use-get-products-by-items";

const { container, cartItem, button ,cart} = styles;

const CartDrop = ({ close }) => {
  const navigate = useNavigate();
  const { loading, error, products, cartItems } = useGetProductsByItems();

  const navigateHandler = () => {
    navigate("shopping-cart");
    close();
  };
const cartitems =!products.length ?'yourcart is empty' :products.map((product)=>{
  const quantity=cartItems[product.id]
  return(
    <div key={product.id}>
      <div className={cartItem} key={product.id}>
          <img src={product.img} alt={product.title} />
          <h2>{product.title}</h2>
          <h3>
            {product.price} EGP x {quantity}
          </h3>
        </div>
    </div>
  ) 
  
})
  return (
    <div className={container} onClick={navigateHandler}>
      <Loading loading={loading} error={error}>
        <div className={cart}>{cartitems}</div>
      </Loading>
      <Button className={button} variant="dark" >
        Go to checkout
      </Button>
    </div>
  );
};

export default CartDrop;
