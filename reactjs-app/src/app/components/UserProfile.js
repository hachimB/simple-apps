"use client"
import React from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'

const UserProfile = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
    <h1>{user.name}</h1>
    <h1>{user.age}</h1>
    </div>
  )
}

export default UserProfile