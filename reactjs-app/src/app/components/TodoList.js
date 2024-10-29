"use client"
import React from 'react'
import { useState } from 'react';

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] =useState('');

  const addTask = () => {
    if (task.length === 0) {
      alert("A task can't be empty")
      return;
    }
    setTodo([...todo, task])
    setTask('');
  }


  return (
    <div>
        <form>
          <input 
          id='todo'
          type='text' 
          placeholder='Enter a new task'
          value = {task}
          onChange={(e)=>(setTask(e.target.value))}
          />
          <button type="button" onClick={addTask}>Add the task</button>

          <ul>
            {todo.map((task, index)=>(
              <li key={index}>{task}</li>
            ))}
          </ul>

        </form>
    </div>
  )
}

export default TodoList