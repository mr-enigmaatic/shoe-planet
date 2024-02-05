import { useEffect } from 'react';
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
import Error404 from './components/Error/Error404';
import { getProducts } from './redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from './utils/ProtectedRoute';
import ProductsByCategory from './components/categories/ProductsByCategory';


function App() {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state)=> state.authUser.isAuthenticated);

  useEffect(() =>{

    // fetch('https://dummyjson.com/products/search?q=shoe')
    //   .then(res => res.json())
    //   .then((data)=> setproducts(data.products));
    //   console.log(products);

    // const fetchProducts = async () => {
    //   try {
    //     // Fetch products data from an API
    //     const response = await fetch('https://dummyjson.com/products/search?q=shoe');
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch products');
    //     }
    //     const data = await response.json();

    //     const response2 = await fetch('https://dummyjson.com/products/category/womens-shoes');
    //     if (!response2.ok) {
    //       throw new Error('Failed to fetch products');
    //     }
    //     const data2 = await response2.json();

    //     // Merge the data from both APIs
    //     const mergedData = [...data.products, ...data2.products];

    //     // Update the products state in redux with the fetched data
    //     dispatch(getProducts(mergedData))
    //   } catch (error) {
    //     console.error('Error fetching products:', error.message);
    //   }
    // };

    const fetchAllProducts = async () => {
      try {
        const apiEndpoints = [
          'https://dummyjson.com/products/search?q=shoe',
          'https://dummyjson.com/products/category/womens-shoes',
          'https://dummyjson.com/products/category/mens-shoes'
        ];
    
        // Fetch data from all APIs concurrently
        const responses = await Promise.all(apiEndpoints.map(endpoint => fetch(endpoint)));
    
        // Check if all responses are ok
        const allResponsesOk = responses.every(response => response.ok);
    
        if (!allResponsesOk) {
          throw new Error('Failed to fetch products from one or more APIs');
        }
    
        // Parse JSON from all responses
        const dataPromises = responses.map(response => response.json());
        const allData = await Promise.all(dataPromises);
    
        // Flatten and merge the data from all APIs into a single array
        const mergedData = allData.reduce((acc, curr) => [...acc, ...curr.products], []);
    
        // Update the products state in Redux with the merged data
        dispatch(getProducts(mergedData));
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };
    

    // Call the fetchProducts function
    fetchAllProducts();

  },[dispatch])

  return (
    <Router>
      <Header />
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path='*' element={<Error404/>}/>
        <Route path='/' element={<><Hero/><ProductSection/></>}/>
        <Route path='/latest' element={<ProductSection/>}/>

        {/* Protected Routes */}
        <Route path='/details/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated}><ProductDetails/></ProtectedRoute>}/>
        <Route path='/men' element={<ProtectedRoute isAuthenticated={isAuthenticated}><ProductsByCategory category="mens-shoes"/></ProtectedRoute>}/>
        <Route path='/women' element={<ProtectedRoute isAuthenticated={isAuthenticated}><ProductsByCategory category="womens-shoes"/></ProtectedRoute>}/>
      </Routes>
      
      <Footer />
    </Router>
      
      
    
  );
}

export default App;
