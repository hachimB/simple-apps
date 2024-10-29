import React from 'react'

const UserList = () => {
    const users = [
        {id: 1, name: 'Al Amine', age: 40},
        {id: 2, name: 'As siddiq', age: 38},
        {id: 3, name: 'Al Farook', age: 36},
    ]
  return (
    <div>
        {users.map(({id, name, age})=>(
        <ul key={id}>
            <li>Name: {name} age: {age}</li>
        </ul>
        ))}
    </div>
  )
}

export default UserList