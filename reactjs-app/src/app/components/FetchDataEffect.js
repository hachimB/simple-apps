"use client"
import React, { useState, useEffect } from 'react'

const FetchDataEffect = () => {
    const [f, setF] = useState([]);
    
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            if (data && data.length) setF(data);
        }
        getData();
    },[])

  return (
    <div>
        {/* <ul>{f.map((obj)=> (<li key={obj.id}>{obj.title}</li>))}</ul> */}
        <h1>First post: </h1>
        <p>{f.length ? f[0].title : "loading..."}</p>
    </div>
  )
}

export default FetchDataEffect