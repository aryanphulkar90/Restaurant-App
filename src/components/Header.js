import React from "react";
import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    const {loggedInUser} = useContext(UserContext)

    const cartItems = useSelector((store) => store.cart.items)
    return (
      <div className="flex justify-between shadow-lg bg-pink-100 m-3 h-24 rounded-3xl">
          <div className="logo-container">
              <img
                 className="w-30 h-24 rounded-3xl"
                 src={LOGO_URL}
              />
          </div>
          <div className="flex items-center">
            <ul className="flex p-4 m-4">
              <li className="px-4">
                <Link to="/">Home</Link>
              </li>
              <li className="px-4">
                <Link to="/about">About us</Link>
              </li>
              <li className="px-4">
                <Link to="/contact">Contact us</Link>
              </li>
              <li className="px-4">
                <Link to="/cart">Cart ({cartItems.length} items)</Link>
              </li>
              <li className="px-4">
                <Link to="/grocery">Grocery</Link>
              </li>
              <button 
              className="login-btn font-bold"
              onClick={()=>{
                (btnName==="Login") ? setBtnName("Logout") : setBtnName("Login")
              }}
              >{btnName}</button>
            </ul>
          </div>
      </div>
    )
  }

  export default Header;

  /**
   * Login/Logout Implementation using Formik Library
   */