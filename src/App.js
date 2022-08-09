import {useState, React} from 'react'
import './App.css';
import Header from './components/Header';
import ProductBox from './components/ProductBox';
import TshirtPage from './components/TshirtPage';
import HoodiePage from './components/HoodiePage';

function App() {
  
  return (
    <div className='main-container'>
      <Header/>
      <div className='body'>
        {/* <TshirtPage/> */}
        <HoodiePage />
       {/* <ProductBox/> */}
      </div>
    </div>
  );
}

export default App;
