import React from 'react'
import Banner from '../assets/headphones_a_2.webp';
import {Link} from 'react-router-dom';
const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
        <div>
            <p className="beats-solo">small text</p>
            <h3>Mid et</h3>
            <img src={Banner} alt="headphones" className="hero-banner-image" />
            
            <div>
                <Link to='product/ID'>
                    <button type="button">button</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner;