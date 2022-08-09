import MagnifyingGlass from '../images/MagnifyingGlass.png'
import ShoppingCart from '../images/ShoppingCart.png'

const Header = ({cartCount}) => {
  return (
    <div className='nav'>
        <div className='nav-logo'>S</div>
        <h4>Shoes Mcgee's Store</h4>
        {/* <img src={MagnifyingGlass}/> */}
        <div className='cart'>
            <img src={ShoppingCart} alt=''/>
            <div className='cart-counter'>{cartCount}</div>
        </div>
    </div>
  )
}

export default Header