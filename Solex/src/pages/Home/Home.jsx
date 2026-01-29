import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import BrandShowcase from '../../components/BrandShowcase/BrandShowcase'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='homepage'>
        <Navbar/>
        <Hero/>
        <ExploreCategory/>
        <ProductDisplay/>
        <BrandShowcase/>
        <Footer/>
    </div>
  )
}

export default Home
