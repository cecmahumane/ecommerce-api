import Product from "./Product"
import Greyhoodie from '../images/Greyhoodie.png'
import Greytshirt from '../images/Greytshirt.png'
import { nanoid } from 'nanoid'

const ProductBox = () => {

    let greyHoodie = Greyhoodie;
    let greyTshirt = Greytshirt;

    //This is entry point for JSON get all request
    let clothingArray = [greyHoodie, greyTshirt];

    let products = clothingArray.map((product) => {
        return (
            <Product 
                id={nanoid()}
                clothes={product}
                />
        )
    })

  return (
    <div className="product-box">
        {products}
    </div>
  )
}

export default ProductBox