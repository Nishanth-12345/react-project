import React, {useState} from 'react'
import item from '../components/data.js';
import item2 from '../components/data1.js';
//import { Link } from 'react-router-dom';
import '../styles/globals.css';
import HeroBanner from '../components/HeroBanner.js';
import Product from './Product.js';
import  {FooterBanner}  from '../components/FooterBanner.js';


export default function Home() {
   const[soundItem, setsounditem] = useState(item);
   
   const[earItem, setEaritem] = useState(item2);
  return (
   <>
    <HeroBanner />
     
     <div className="products-heading">
       <h1>best sell </h1>
       <p>speakers</p>
     </div>
     
     <Product item={soundItem} />
     <FooterBanner item2={earItem}/>
  </>  

  )
}
