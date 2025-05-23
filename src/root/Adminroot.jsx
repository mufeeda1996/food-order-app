import React from 'react'
import HeaderAdmin from '../components/HeaderAdmin'
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function Adminroot() {
  return (
    <div>
        <HeaderAdmin/>
        <Outlet />
        <Footer/>
        
    </div>
  )
}

export default Adminroot