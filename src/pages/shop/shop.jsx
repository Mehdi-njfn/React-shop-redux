import { useSelector } from "react-redux";
import PRODUCT from "../../data/products";
import Product from "./product";


const Shop = () => {
  const items = useSelector((state)=>state.shopCart.items);
  return ( 
    <div className="container">
      <h1>Shop</h1>
      <div className="row">
        {items.map((p)=>{
          return <Product data={p} key={p.id}/>
        })}
      </div>
    </div>
   );
}
 
export default Shop;