import React from 'react'


const ProductInfo = () => {
    
    const product = {
        name: "laptop",
        price: "$1200",
        availability: "in stock"
    }

  return (
    <div>
        <p>The {product.name} price is {product.price} and it is {product.availability}.</p>
    </div>
  )
}

export default ProductInfo