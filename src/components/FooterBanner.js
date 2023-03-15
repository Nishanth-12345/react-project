import React from 'react';
import { Link } from 'react-router-dom';

export const FooterBanner = ({item2}) => {


  return (
    <div className='footer-banner-container'>
        {item2.map((EarItem) => {
            const {sale,largetext1,largetext2,smalltext,MidText,desc,image} = EarItem;
       
        return <article>
            <div className='banner-desc'>
              <div className='left'>
               <p>{sale}</p>
               <h3>{largetext1}</h3>
               <h3>{largetext2}</h3>
               
              </div>
             <div className='right'>
                <p>{smalltext}</p>
                <h3>{MidText}</h3>
                <p>{desc}</p>
                <Link to={'/product/ID'}>
                    <button type='btn-22'>
                        shop now
                    </button>
                </Link>
             </div>
             <img src={image} alt={desc} className="footer-banner-image"></img>
            </div>
        </article>
        
        })}
    </div>
  )
}
