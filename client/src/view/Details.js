import React from 'react'
import { Link } from 'react-router-dom'
import {Header} from '../components/Header'
import {PetDatails} from '../components/PetDatails'

export const Details = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-8'>
          <Header/>
        </div>
        <div className='col-4'>
          <Link to={"/"}>back to home</Link>
        </div>
      </div>
      
      <PetDatails/>
    </div>
  )
}
