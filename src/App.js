import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import './bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';


import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProductSection from './components/Home/ProductSection';
import ProductDetails from './components/Home/ProductDetails';
import ScrollToTopOnRouteChange from './utils/ScrollToTopOnRouteChange';
import ForMen from './components/categories/ForMen';
import ForWomen from './components/categories/ForWomen';
import Error404 from './components/Error/Error404';
import { getProducts } from './redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from './utils/ProtectedRoute';


function App() {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state)=> state.authUser.isAuthenticated);

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
        // Update the products state in redux with the fetched data
        dispatch(getProducts(data.products))
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
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path='*' element={<Error404/>}/>
        <Route path='/' element={<><Hero/><ProductSection/></>}/>

        {/* Protected Routes */}
        <Route path='/details/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated}><ProductDetails/></ProtectedRoute>}/>
        <Route path='/men' element={<ProtectedRoute isAuthenticated={isAuthenticated}><ForMen/></ProtectedRoute>}/>
        <Route path='/women' element={<ProtectedRoute isAuthenticated={isAuthenticated}><ForWomen/></ProtectedRoute>}/>
      </Routes>
      
      <Footer />
    </Router>
      
      
    
  );
}

export default App;
