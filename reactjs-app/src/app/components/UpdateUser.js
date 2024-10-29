"use client"
import React from 'react'
import { useContext, useState } from 'react'
import { UserContext } from './UserContext'

const UpdateUser = () => {
    const { updateUser } = useContext(UserContext);

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const updateUserData = (e) => {
        e.preventDefault();
        userName.trim();
        updateUser(userName, userAge)
        setUserName('');
        setUserAge('');
    }

  return (
    <div>
        <form onSubmit={updateUserData}>
            <input placeholder='Enter the new Name' value={userName} 
            onChange={(e)=>setUserName(e.target.value)} type="text"/>

            <input placeholder='Enter the new Age' value={userAge} 
            onChange={(e)=>setUserAge(e.target.value)} type="Number"/>   

            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default UpdateUser