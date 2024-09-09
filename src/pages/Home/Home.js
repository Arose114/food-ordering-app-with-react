import React from 'react'
import Header from './Header'
import Menu from '../../components/Menu/Menu'
import './home.css'

const Home = () => {
  return (
    <div className='hero-section'>
        <Header />
        <Menu />
    </div>
  )
}

export default Home