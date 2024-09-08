import React from 'react'
import { assets} from '../../assets/assests'
import './navbar.css'

const Navbar = () => {
    const [active,setActive]=React.useState('Home')

  return (
    <div className='navbar'>
        
        <img src={assets.rose} alt='rossy'/>  
        <ul className='nav-items'>
            <li onClick={()=>setActive('Home')} className={active==='Home' ? 'active' : ''}>Home</li>
            <li onClick={()=>setActive('Menu')} className={active==='Menu' ? 'active' : ''} >Menu</li>
            <li onClick={()=>setActive('About')} className={active==='About'? 'active' : ''} >About</li>
            <li onClick={()=>setActive('Contact-us')} className={active==='Contact-us'? 'active' : ''} >Contact Us</li>            
            </ul>  

            <div className='navbar-right'>
                <img src={assets.search1} width="30px" height="30px"/>
                <div className='navbar-cart'>
                    <img className='img-cart' src={assets.cart1} width="30px" height="30px"/>
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