import React from 'react'
import MagnifyingGlass from '../images/MagnifyingGlass.png'
import ShoppingCart from '../images/ShoppingCart.png'

const Header = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>C</div>
        <h4>Shoes McGee's Store</h4>
        {/* <img src={MagnifyingGlass}/> */}
        <div className='cart'>
            <img src={ShoppingCart} alt=''/>
            <div></div>
        </div>
    </div>
  )
}

export default Header