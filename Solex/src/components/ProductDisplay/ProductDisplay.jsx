import React from 'react'
import "./ProductDisplay.css"
import { products } from '../../assets/assets'
import ProductCard from '../ProductCard/ProductCard'

const ProductDisplay = () => {
  return (
    <section className='products'>
        <div className="container">
            <div className="product-grid">
                {products.map((p)=>(
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default ProductDisplay
