import {useState, React} from 'react'
import './App.css';
import Header from './components/Header';
import ProductBox from './components/ProductBox';
import TshirtPage from './components/TshirtPage';
import HoodiePage from './components/HoodiePage';
import CheckoutPage from './components/CheckoutPage';
import Register from './components/Register';

function App() {
  
  return (
    <div className='main-container'>
      <Header/>
      <div className='body'>
        <Register/>
        {/* <CheckoutPage/> */}
        {/* <TshirtPage/> */}
        {/* <HoodiePage /> */}
       {/* <ProductBox/> */}
      </div>
    </div>
  );
}

export default App;
