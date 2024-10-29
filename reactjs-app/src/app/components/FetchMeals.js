"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const FetchMeals = () => {
    const [items, setItems] = useState([])

    useEffect(()=> {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((response)=> {setItems(response.data.meals)})
        .catch((error) => {throw new Error(error)})}, [])
  return (
    <div>
        {items.map((data, idx)=>(
            <div key={idx}>
                <img src={data.strMealThumb}></img>
                <figcaption>{data.strMeal}</figcaption>
                <p>@{data.idMeal}</p>
            </div>
        ))}
    </div>
  )
}

export default FetchMeals