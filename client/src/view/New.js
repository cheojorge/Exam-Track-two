import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../components/Form'
import { Header } from '../components/Header'

export const New = () => {
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
      <Form/>
    </div>
  )
}
