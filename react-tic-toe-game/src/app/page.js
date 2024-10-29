"use client";
import { useState } from 'react';




function Square({value, onClick}) {
  return <button onClick={ onClick } className="square p-3 pb-6">{value}</button>
}





function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for(let i = 0; i < lines.length; i++) {
    const[a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
      return squares[a];
    }
  }
  return null;
}





function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);

  function onSquareClick(idx) {
    if(square[idx] || calculateWinner(square)) return;
    const newSquare = [...square]; // OR square.slice();
    newSquare[idx] = xIsNext ? 'X' : 'O';
    setxIsNext(!xIsNext);
    setSquare(newSquare);
  }

  const winner = calculateWinner(square);

  return <>
  {winner ? (<p>The winner is: {winner}</p>): (<p>The next player is: {xIsNext ? 'X' : 'O'}</p>)}
  <div className='btn'>
    <Square value={square[0]} onClick={()=>{ onSquareClick(0) }}/>
    <Square value={square[1]} onClick={()=>{ onSquareClick(1) }}/>
    <Square value={square[2]} onClick={()=>{ onSquareClick(2) }}/>
    <Square value={square[3]} onClick={()=>{ onSquareClick(3) }}/>
    <Square value={square[4]} onClick={()=>{ onSquareClick(4) }}/>
    <Square value={square[5]} onClick={()=>{ onSquareClick(5) }}/>
    <Square value={square[6]} onClick={()=>{ onSquareClick(6) }}/>
    <Square value={square[7]} onClick={()=>{ onSquareClick(7) }}/>
    <Square value={square[8]} onClick={()=>{ onSquareClick(8) }}/>
  </div>

  </>
}





export default function Game() {
  return <>
  <Board />
  </>
}