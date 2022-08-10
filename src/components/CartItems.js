import React from 'react'

const CartItems = () => {
  return (
    <div>
        <div className='cart-row'>
            <div className='cart-item-description'>
                <img/>
                <div className='item'>
                    <h3>Item</h3>
                    <p>Size:</p>
                </div>
            </div>
            <div className='cart-item-counter'>
                <img/>
                <p>1</p>
                <img/>
            </div>
            <div className='price-and-removal'>
                <p>$35.00</p>
                <img/>
            </div>
        </div>
        <hr/>
    </div>
  )
}

export default CartItems