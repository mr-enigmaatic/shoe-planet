import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProductSection from './components/Home/ProductSection';

function App() {

  useEffect(()=>{

    fetch('https://dummyjson.com/products/search?q=shoe')
.then(res => res.json())
.then(console.log);

  },[])

  return (
    <>
    <Header/>
    <Hero/>
    <ProductSection/>
    <Footer/>
    </>
  );
}

export default App;
