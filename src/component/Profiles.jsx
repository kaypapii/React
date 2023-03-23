import React from 'react'
import './Header.css'


function Profiles({Name,Address,gender}) {
  return (
  <div>
    <h3>Name: {Name}</h3>
    <h3>Address: {Address}</h3>
    <h3>Gender: {gender}</h3>
  </div>
  )
}
export default Profiles