"use client";
import React from 'react'
import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {setCount((prev)=> prev + 1)}

  return (
    <div>
        <h1>{count}</h1>
        <button className='border-solid border-2 border-black' onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter