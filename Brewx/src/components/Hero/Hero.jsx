import React from 'react'
import "./Hero.css"
import coffee from "../../assets/coffee_cup.png"

const Hero = () => {
  return (
    <section className="hero">
      {/* Background shapes */}
      <div className="bg-shape bg-shape-1"></div>
      <div className="bg-shape bg-shape-2"></div>
      <div className="bg-shape bg-shape-3"></div>
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>
            Taste the <b>Perfect Brew</b>
          </h1>
          <h3>Freshly roasted coffee for your everyday ritual</h3>
          <p>Discover aromatic blends that energize your mornings</p>
          <button>Order Now</button>
        </div>

        {/* coffee imaage */}
        <div className="hero-coffee-wrapper">
          <img src={coffee} alt="coffee cup" className='hero-coffee' />
        </div>
      </div>
    </section>
  )
}

export default Hero
