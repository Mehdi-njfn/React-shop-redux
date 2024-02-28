import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { shopContext } from "../context/shopContext";
import './nav.css'

const Nav = () => {
  // const {cartItems, isAuth}=useContext(shopContext);


  // const itemsCount = cartItems?.reduce((prev, current)=>{
  //   return prev + current.count;
  // },0);

  const logout=()=>{
    localStorage.removeItem('token');
    window.location = '/login';
  }

  return (
  <>
    <div className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link to='/' className="navbar-brand">React Shop</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/'className="nav-link">Shop</Link>
          </li>
           <li className="nav-item">
            <Link to='/login' className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to='/cart' className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart}/>
              <span className="items-count">0</span>
            </Link>
          </li>
          <li className="nav-item">
            <button onClick={logout} className="btn btn-danger btn-sm mt-1 mx-3 text-black">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </>  );
}
 
export default Nav;