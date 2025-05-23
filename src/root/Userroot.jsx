import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import App from '../App';

function Userroot() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Userroot