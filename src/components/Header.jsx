import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../public/images/logo.png';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

import { removeFromCart } from '../redux/productSlice.js';
import { useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm';



function Header() {
  const [mode, setMode] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [showCart, setShowCart] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    document.body.className = mode ? 'dark-mode' : 'light-mode';
  }, [mode]);
  const dispatch = useDispatch();

  const handleDeleteCart = (item) => {
  dispatch(removeFromCart(item.id)); }
  return (
    <div>
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-stone-900 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              {/* <li><a>About us</a></li>
              <li><a>Contact us</a></li> */}
              <li><a>Testimonials</a></li>
              <li><button onClick={() => setMode(!mode)}>Switch to {mode ? 'Light' : 'Dark'} Mode</button></li>
            </ul>
          </div>
          <a className='flex items-center'><img src={logo} alt="Logo" width={100} /></a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center text-md font-semibold">
            <li><a>Home</a></li>
            {/* <li><a>About us</a></li>
            <li><a>Contact us</a></li> */}
            <li><a>Testimonials</a></li>
          </ul>
        </div>

        <div className="navbar-end">
          <button className='btn mr-2' onClick={() => setMode(!mode)}>
            {mode ? 'Light' : 'Dark'} Mode
          </button>
          <button className="btn mr-2" onClick={() => setShowSignIn(true)}>Sign in</button>
          <button className="btn relative" onClick={() => setShowCart(!showCart)}>
          <FaShoppingCart size={20} /> ({cartCount})
          </button>
        </div>
      </div>

      {showCart && (
        <div className="absolute right-4 top-20 z-50 w-80 bg-white rounded shadow-lg p-4">
          <h2 className="text-lg font-bold mb-2">Cart Items</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b py-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm">Qty: {item.quantity}</p>
                </div>
                <img src={item.image} alt={item.name} className="w-10 h-10 rounded object-cover" />
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleDeleteCart(item)}
                >
                  <FaTrash />
                </button>
                <Link
                to="/checkout"
                className="flex items-center gap-2 px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                Checkout
               </Link>
              </div>
             
            ))
          ) : (
            <p className="text-sm text-gray-500">Cart is empty.</p>
          )}
        
        </div>
      )}
        {showSignIn && <SignInForm onClose={() => setShowSignIn(false)} />}
    </div>
  );
}

export default Header;
