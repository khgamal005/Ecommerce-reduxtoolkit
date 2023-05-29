import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Product } from "../components/ecom-ui";
import { GridList } from "../components/Layout";
import { addToCart } from "../store/cart/cartSlice";
import { actFilterProducts, cleanRecords } from "../store/product/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { prefix } = useParams();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(actFilterProducts(prefix));

    return () => {
      dispatch(cleanRecords());
    };
  }, [dispatch, prefix]);
  
  const selectedItem =(data)=>{
    const {id ,max}=data
      dispatch(addToCart({id,max}))
  }

  return (
    <div>
      <GridList error={error} loading={loading} records={products} selectedItem={selectedItem}>
        <Product actionType="add" />
      </GridList>
    </div>
  );
};

export default Products;
