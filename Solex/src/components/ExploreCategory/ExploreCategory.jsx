import React from 'react'
import "./ExploreCategory.css"
import {categories} from "../../assets/assets"

const ExploreCategory = () => {
  return (
   <section className="explore-category">
    <div className="container explore-category-container">
        <h2 className="explore-category-title">Explore Categories</h2>

        <div className="category-circle-grid">
            {categories.map((category)=>(
                <div className="category-circle-item" key={category.id}>
                    <div className="category-circle">
                        <img src={category.image} alt={category.name} className='category-circle-image' />
                    </div>
                    <span className='category-circle-text'>
                        {category.name}
                    </span>
                </div>
            ))}
        </div>
    </div>
   </section>
  )
}

export default ExploreCategory
