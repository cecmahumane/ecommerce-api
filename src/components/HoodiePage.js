import React from "react";
import Hoodie from '../images/Hoodie.jpg'

const HoodiePage = () => {
  
    const[formData, setFormData] = React.useState();
  
    function handleChange(event) {
      console.log(event)
      setFormData(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData);
    }
  
    return (
        <div className='container'>
        <img className='hoodie' src={Hoodie}/>
        <div className='specs'>
            <h2>Classic</h2>
            <p>$35.00</p>
            <p>So classy it hurts.</p>
            <p>100% combed ring-spun cotton</p>
            <p>Printed on Next Level garment</p>
            <p>Pre-shrunk</p>
            <p>Tear-away label</p>
            <form onSubmit={handleSubmit}>
                <select
                    value={formData}
                    onChange={handleChange}
                    >
                    <option value="">-- Choose Size --</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <br/>
                <br/>
                <button>Add to Cart</button>
            </form>
        </div>
    </div>
  )
}

export default HoodiePage