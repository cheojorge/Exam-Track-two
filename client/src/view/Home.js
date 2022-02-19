import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { List } from '../components/List'

export const Home = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-8'>
          <Header/>
        </div>
        <div className='col-4'>
          <Link to={"/pets/new"}>add a pet to the shelter</Link>
        </div>
      </div>
        <List/>
    </div>
  )
}
