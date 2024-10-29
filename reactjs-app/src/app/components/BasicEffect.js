"use client";
import React from 'react'
import { useState, useEffect } from 'react'

const BasicEffect = () => {
    const [value, setValue] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Hello');
        document.title = `BasicEffect`;
    }, [value])

    const increment = () => {setValue((prev) => prev + 1)};
    const inc = () => {setCount((prev) => prev + 1)};

    return (
    <div>
        <h1>{value}</h1>
        <button onClick={increment}>Click Me</button>
        <br/>
        <br/>
        <h1>{count}</h1>
        <button onClick={inc}>Click Me</button>
    </div>
  )
}

export default BasicEffect