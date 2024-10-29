"use client"
import React, { useState, useReducer } from 'react'
import { reducer } from './CounterReducer'

const Counterr = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    const [number, setNumber] = useState('');

    const add = () => {
        dispatch({type: "incrementByAmount", payload: Number(number)})
        setNumber('');
    }

    const sub = () => {
        dispatch({type: "decrementByAmount", payload: Number(number)})
        setNumber('');
    }

  return (
    <div>
        <h1>Count: { state.count }</h1>
        <br/>
        <button onClick={() => dispatch({type: "increment"})}>Increment</button>
        <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        <br/>


        <input type="number" placeholder='Enter the number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <button onClick={add}>Add</button>
        <button onClick={sub}>Substract</button> 
    </div>
  )
}

export default Counterr