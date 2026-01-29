import React from 'react'
import "./Hero.css"
import shoe from "../../assets/shoe_hero.png"

const Hero = () => {
  return (
    <section className='hero'>
        <div className="container hero-inner">
            <div className="hero-text">
                <h1>
                    Step Into Style & <b>Comfort</b>
                </h1>
                <h2>Designed for everyday moves and all-day wear</h2>
                <p>Premium sneakers designed for everyday wear.</p>
                <button>Shop Now</button>
            </div>
            <span className="shape shape-left-bottom"></span>
            <span className="shape shape-top-center"></span>

            {/* Shoe with background shape */}
            <div className="hero-shoe-wrapper">
            <span className="shape shape-one"></span>
            <span className="shape shape-two"></span>
            {/* Image of shoe */}
            <img src={shoe} alt="Shoe" className='hero-shoe' />
            </div>
        </div>
      
    </section>
  )
}

export default Hero
