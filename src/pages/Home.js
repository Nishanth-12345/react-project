import React, {useState} from 'react'
import item from '../components/data.js';
//import { Link } from 'react-router-dom';
import '../styles/globals.css';
import HeroBanner from '../components/HeroBanner.js';
import Product from './Product.js';


export default function Home() {
   const[soundItem, setsounditem] = useState(item);
  return (
   <>
    <HeroBanner />
     
     <div className="products-heading">
       <h1>best sell </h1>
       <p>speakers</p>
     </div>
     
     <Product item={soundItem} />
  
  </>  

  )
}
