import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import './bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProductSection from './components/Home/ProductSection';
import ProductDetails from './components/Home/ProductDetails';


function App() {

  const [products, setproducts] = useState([]);

  useEffect(() =>{

    // fetch('https://dummyjson.com/products/search?q=shoe')
    //   .then(res => res.json())
    //   .then((data)=> setproducts(data.products));
    //   console.log(products);

    const fetchProducts = async () => {
      try {
        // Fetch products data from an API
        const response = await fetch('https://dummyjson.com/products/search?q=shoe');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        // Update the products state with the fetched data
        setproducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    // Call the fetchProducts function
    fetchProducts();
  },[])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<><Hero/><ProductSection products={products}/></>}/>
        <Route path='/details/:id' element={<ProductDetails products={products}/>}/>
      </Routes>
      
      <Footer />
    </Router>
      
      
    
  );
}

export default App;
