import './App.css';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import ProductsList from './components/Product/ProductList';

function App() {
  return (
    <>
    <Header/>
    <Carousel/>
    <ProductsList/>
    <Footer/>
    </>
  );
}

export default App;
