import React from 'react'
import hero_img from '../../public/images/slider-courier-mask.png'
import Categories from './Categories'


function Hero() {
  return (
    <div>
      <div
  className="hero min-h-screen"
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-left">
    <div className="max-w-md-lg">
      <h1 className="mb-5  text-7xl font-bold"><span >Express</span><br></br> Home Delivery</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-dark">Get Started</button>
    </div>
    <div>
        <img src={hero_img}></img>
    </div>
  </div>
</div>  
<Categories/>
    </div>
  )
}

export default Hero