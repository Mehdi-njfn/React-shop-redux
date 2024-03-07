import { useContext, useState } from "react";
import { shopContext } from "../../context/shopContext";
import Product from "../shop/product";
import PRODUCT from "../../data/products";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../redux/cartSlice";


const Cart = () => {
  const items = useSelector((state) => state.shopCart.cart)
  const { cart, totalPrice, totalQuntity } = useSelector((state) => state.shopCart)
  const dispatch = useDispatch();

  const isCart = true;

  dispatch(getCartTotal());
  return (
    <>
      <h1>your cart:</h1>
      <div className="row ">
        {totalQuntity ? cart.map((p) => {
          if (p.count > 0) {
            return <Product key={p.id} data={p} c={isCart}></Product>
          }

        })
        :<h2>cart is empty!</h2>
        }
      </div>
      <hr />
      {/* <button className="btn btn-warning my-3" onClick={reset}>reset cart</button> */}
      <hr />
      <div className="container col-6">
        <div className="card my-5 p-3">
          {/* <h4>total : {itemsCount} products</h4> */}
          <h3>total price :{totalPrice} </h3>
          <h3>total Quantity :{totalQuntity} </h3>
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