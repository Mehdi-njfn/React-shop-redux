import { useContext, useState } from "react";
import { shopContext } from "../../context/shopContext";
import Product from "../shop/product";
import PRODUCT  from "../../data/products";


const Cart = () => {
  // const {cartItems, reset} = useContext(shopContext);

  // const itemsCount = cartItems?.reduce((prev, current)=>{
  //   return prev + current.count;
  // },0);

  const list = {};

//   const total =()=>{
   
//     PRODUCT.map((p)=>{
//       if( cartItems?.some((i)=> i.id===p.id)){
//         list.push(p.price)
//     }
//   }) 
//   let a = list?.reduce((prev, current)=>{
//     return prev + current;
//   },0);
//   console.log();
  
// }

  return ( 
    <>      
      <h1>your cart:</h1>
      <div className="row ">
        {/* {PRODUCT.map((p)=>{
            if( cartItems?.some((i)=> i.id===p.id && i.count >0)){
              return <Product key={p.id} data={p}></Product>
            } 
          })

        } */}
      </div>
      <hr />
      {/* <button className="btn btn-warning my-3" onClick={reset}>reset cart</button> */}
      <hr />
      <div className="container col-6">
          <div className="card my-5 p-3">
            {/* <h4>total : {itemsCount} products</h4> */}
            <h3>total price : $</h3>
            <div className="row ">
              <button className="btn btn-success btn-lg mx-5 col-5">Buy</button>
            <button className="btn btn-danger btn-lg  col-5">Cancel</button>
              </div>
          </div>
      </div>
    </>

   );
   
}
 
export default Cart;