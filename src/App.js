import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProductBox from './components/ProductBox';

function App() {
  return (
    <div className='main-container'>
      <Header/>
      <div className='body'>
        <ProductBox/>
      </div>
    </div>
  );
}

export default App;
