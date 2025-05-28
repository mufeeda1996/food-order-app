import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import App from '../App';
import Hero from '../components/Hero';

function Userroot() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Userroot