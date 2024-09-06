import React from 'react'
import { assets, rose } from '../../assets/assests'

const Navbar = () => {
  return (
    <div>
        
        <img src={assets.rose} alt='rossy'/>  
        <ul className='nav-items'>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact Us</li>            
            </ul>  

            <div className='navbar-right'>
                <img src={assets.rose}/>
                <div className='navbar-cart'>
                    <img src={assets.rose}/>
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