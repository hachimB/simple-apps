import React from 'react'

const UserStatus = ({loggedIn, isAdmin, name}) => {
    if (loggedIn && isAdmin) {
        return <div>{"Welcome Admin " + name}</div>
    }
    else if (loggedIn && !isAdmin) {
        return <div>{"Welcome User " + name}</div>
    }
    else {
        return <h1 style={{color:'red'}}>{"You are not loggedIn " + name}</h1>
    }
}

export default UserStatus