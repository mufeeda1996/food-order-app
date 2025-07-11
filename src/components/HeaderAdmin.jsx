import React from 'react'
import logo from '../../public/images/logo.png'

function HeaderAdmin() {
  return (
    <div>
        <div>
        <div className="navbar  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-stone-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a className='text-black'>orders</a></li>
        
        <li><a className='text-black'>Add food</a></li>
      </ul>
    </div>
   
   <a className='flex items-center'><img src={logo} alt="Logo"  width={100}/> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex items-center text-md font-semibold">
      <li><a>Home</a></li>
      {/* <li> */}
        {/* <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details> */}
      {/* </li> */}
      <li><a>orders</a></li>
      <li><a>Add food</a></li>
      <li><a>Add Testimonials</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn mr-4">Sign in</a>
    <a className="btn">cart</a>
  </div>
</div>
    </div>
    </div>
  )
}

export default HeaderAdmin