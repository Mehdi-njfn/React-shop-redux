import { useContext, useState } from "react";
import { shopContext } from "../../context/shopContext";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, reduceOfCart, update } from '../../redux/cartSlice';
import Aler from "../../aler";

const Product = (props) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.shopCart.cart);

  const product = props.data;

  const isCart = props.c;

  function tempAlert(msg, duration) {
    var el = document.createElement("div");
    el.setAttribute("style",
      "position:absolute;top:1%;left:50%;background-color:#176bb5;font: bold;font-weight: 600;padding: 15px;color: white;border-radius: 5px;box-shadow: black;opacity: 100%;");
    el.innerHTML = msg;
    setTimeout(function () {
      el.parentNode.removeChild(el);
    }, duration);
    document.body.appendChild(el);
  }
  function add() {
    dispatch(addToCart(product));
    if (!isCart) {
      // alert(`${product.pName} added to cart`);
      tempAlert(`${product.pName} added to cart`, 2500)
    }
  }
  function reduce() {
    dispatch(reduceOfCart(product));
    if (!isCart) {
      tempAlert(`${product.pName} reduce of cart`, 2500)
    }
  }
  function isIncart() {
    if (cart?.find((i) => i.id === product.id && i.count > 0)) {
      return true;
    } else return false;
  }

  return (
    <>
      <div className="col-3">
        <img className="w-100" src={product.pImg} alt={product.pImg} />
        <h3>{product.pName}</h3>
        <h5>price: {product.price}$</h5>
        <button onClick={add} className="btn btn-success btn-sm ">+</button>
        {isCart && <span className="mx-1">{product.count}</span>}
        {isIncart() && <button onClick={reduce} className="btn btn-danger btn-sm">-</button>}
        {isCart && <div className="my-2">price : {product.count * product.price} $</div>}
      </div>
    </>
  )
}

export default Product;