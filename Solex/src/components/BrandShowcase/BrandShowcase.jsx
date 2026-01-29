import React from 'react'
import "./BrandShowcase.css"
import shoe_bs from "../../assets/shoe_hero.png"

const BrandShowcase = () => {
  return (
    <section className="brand-showcase">
        {/* background-circle */}
        <span className="bs-circle bs-circle-one"></span>
        <span className="bs-circle bs-circle-two"></span>
        <span className="bs-circle bs-circle-three"></span>

        <div className="container bs-inner">
            {/* image */}
            <div className="bs-image-wrapper">
                <img src={shoe_bs} alt="Shoe" />
            </div>

            {/* text */}
            <div className="bs-text">
                <h2>Comfort that keeps up with your lifestyles</h2>
                <p>
                    Crafted with precision and premium materials, our sneakers are designed to deliver all-day comfort, flexibility, and street-ready style.
                </p>

                <button>Explore Collection</button>
            </div>
        </div>
    </section>
  )
}

export default BrandShowcase
