import React from 'react'
import './Header.css'

function Pictures (props) {
  return (
    <>
     <img src= {props.image} alt="profile-name" className='img' />
    </>
  )
}
export default Pictures