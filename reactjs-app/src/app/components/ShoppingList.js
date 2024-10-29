"use client"
import React from 'react'
import { useState } from 'react'

const ShoppingList = () => {
    const [shop, setShop] = useState([])
    const [productName, setproductName] = useState('')
    const [productQuantity, setproductQuantity] = useState('')

    const addToList = (e)=> {
        e.preventDefault();
        if (productName.length === 0 && productQuantity.length !== 0) {
            alert('You did not provide the product\'s name')
            return;
        }
        else if(productName.length !== 0 && productQuantity.length === 0) {
            alert('You did not provide the product\'s quantity')
            return
        }
        else if (!productName && !productQuantity) {
            alert('You did not provide any information about the product you want to add')
            return
        }
        else {
        setShop([...shop, {name:productName, quantity:productQuantity}])
        }


    }
  return (
    <div>
        <form onSubmit={addToList}>
            <input 
            placeholder='Enter the product name'
            type="text"
            value={productName}
            onChange={(e)=>setproductName(e.target.value)}
            />
            <input 
            placeholder='Enter the product quantity'
            type="number"
            value={productQuantity}
            onChange={(e)=>setproductQuantity(e.target.value)}
            />
            <br />
            <button type="submit">Add to the list</button>
        </form>

        <ul>
            {shop.map((item, index)=>(
                <li key={index}>Name: {item.name} - Quantity: {item.quantity}</li>
            ))}
        </ul>
    </div>
  )
}

export default ShoppingList