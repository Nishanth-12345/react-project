import React from 'react'
import Banner from '../assets/headphones_a_2.webp';
import {Link} from 'react-router-dom';
const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
        <div>
            <p className="beats-solo">Online shopping</p>
            <h3>Best Price</h3>
            <img src={Banner} alt="headphones" className="hero-banner-image" />
            
            <div>
                <Link to='product/ID'>
                    <button type="button">Buy now</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner;