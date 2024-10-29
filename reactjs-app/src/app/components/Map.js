import React from 'react'

export const Map = () => {
  const numbers = [87, 12, 34, 4];
  return (
    <div>
        {numbers.map((num)=> (
            <ul key={num}>
            <li>{num}</li>
            </ul>
        ))}
    </div>
  )
}
