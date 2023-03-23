import React from 'react'
import Handles from './Handles'
import img from '../avataaars.png'
import Esther from '../Esther.JPG'
import Komo from '../komo.JPG'
import Omo from '../omolola.jpg'
import Profiles from './Profiles'
import Pictures from './Pictures'
import './Header.css'
import { Link } from 'react-router-dom'



export default function card() {
  return (
    <>
    <div className='container'>
      <div className='Section'>
        <Pictures image = {img} />
        <Profiles Name={'kingsley'} Address={'Magboro, Nigeria'} gender={'male'} />
        <Handles/>
        </div>
      <div className='Section'>
      <Pictures image = {Esther} />
        <Profiles Name={'esther'} Address={'vi,Lagos'} gender={'Female'} />
        <Handles/>
      </div>
      <div className='Section'>
      <Pictures image = {Komo} />
        <Profiles Name={'komo'} Address={'Oluyole, Ibadan'} gender={'male'} />
        <Handles/>
      </div>
      <div className='Section'>
      <Pictures image = {Omo} />
        <Profiles Name={'omolola'} Address={'Iyannupaja,Lagos'} gender={'Female'} />
        <Handles/>
      </div>
          </div>
    
    </>
  )
}
