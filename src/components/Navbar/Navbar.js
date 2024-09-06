import React from 'react'
import { assets, rose } from '../../assets/assests'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        
        <img src={assets.rose} alt='rossy'/>  
        <ul className='nav-items'>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact Us</li>            
            </ul>  

            <div className='navbar-right'>
                <img src={assets.search1} width="30px" height="30px"/>
                <div className='navbar-cart'>
                    <img src={assets.cart1} width="30px" height="30px"/>
                    <div className='cart-dot'>

                    </div>
                </div>
                <button className='navbar-button'>
                    Sign up
                </button>
                
                </div>    
        </div>

  )
}

export default Navbar