import { useContext } from "react";
import { shopContext } from "../../context/shopContext";


const Product = (props) => {
  const { id, pName, pImg, price } = props.data;
  // const {cartItems, add, remove}=useContext(shopContext);
  // const isIncart = cartItems?.some((i)=>i.id===id);

  // const  = cartItems?.filter((row)=> row.id===id)[0]?.count;
  return (
    <>
      <div className="col-3">
        <img className="w-100" src={pImg} alt={pImg} />
        <h3>{pName}</h3>
        <h5>price: {price}$</h5>
        <button onClick={() => { }} className="btn btn-primary btn-sm">+</button>
        <span className="mx-1">0</span>
        {/*isIncart*/1 && <button onClick={() => { }} className="btn btn-primary btn-sm">-</button>}
        <div className="my-2">price : price * count $</div>
      </div>
    </>
  );
}

export default Product;