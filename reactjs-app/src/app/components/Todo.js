"use client"
import React, { useState } from 'react'

function Todo() {
    const [input, setInput] = useState('')
    const [task, setTask] = useState([])
    
    const addTask = () => {
        const trimedInput = input.trim();
        if (trimedInput) {
            setTask([...task, trimedInput]);
            setInput('');
        }
    }

    const removeTask = (idxToRemove) => {
        setTask(task.filter((_, idx) => idx !== idxToRemove));
    }

  return (
    <div>
        <input placeholder='Add a new task' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addTask}>Add task</button>

        <ul>
            {task.map((elem, idx)=>(
                <li key={idx}>
                    {elem}
                    <button onClick={() => removeTask(idx)}>X</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo
