import React from 'react'
import CartItems from './CartItems'


const CheckoutPage = () => {
  

  
    return (
    <div className='cart-row-box'>
        <h3>Shopping Cart</h3>
        <CartItems/>
        <div className='total-checkout'>
            <div className='total'>
                <p>Subtotal</p>
                <p>$100</p>
            </div>
            <div className='checkout'>
                <button className='checkout-button'>Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutPage