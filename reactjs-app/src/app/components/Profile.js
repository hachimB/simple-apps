"use client"
import React from 'react'
import { useState } from 'react'

const Profile = () => {
    const [user, setUser] = useState({name:'', age: ''});
    
    // const updateProfile = ()=> {
    //     setUser({name:user.name, age:user.age})
    // }

  return (
    <div>
        <p>name: {user.name} age: {user.age}</p>
        <input
        placeholder='Enter your name'
        type="text"
        value={user.name}
        onChange={(e)=>setUser((prevUser)=>({...prevUser, name:e.target.value}))}
        />

        <input
        placeholder='Enter your age'
        type="number"
        value={user.age}
        onChange={(e)=>setUser((prevUser)=>({...prevUser, age: e.target.value}))}
        />

        {/* <button type="button" onClick={updateProfile}>Save</button> */}

    </div>
  )
}

export default Profile