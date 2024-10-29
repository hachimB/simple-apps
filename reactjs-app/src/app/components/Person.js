import React from 'react'

const Person = ({name, age}) => {  // const Person = (props) and access with props.name ...
  return (
    <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
    </div>
  )
}

export default Person