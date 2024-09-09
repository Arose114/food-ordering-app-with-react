import React from 'react'
import './menu.css'
import { menu_list } from '../../assets/assests'

const Menu = () => {
  return (
    <div className='menu-content'>
         <h1>Explore our Menu</h1>
        <p className='menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your diring experience. One delicious meal at a time</p>
        <div className='menu-list'>
          {menu_list.map((item,index)=>{
            return(
              <div key={index} className='menu-item'>
                <img src={item.menu_image} alt='Menu'/>
                <p>{item.menu_name}</p>

                </div>
            )
          })}
        </div>
        
        </div>
  )
}

export default Menu