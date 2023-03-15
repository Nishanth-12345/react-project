import React from 'react';
import { Link } from 'react-router-dom';
import {useCart} from 'react-use-cart';

//import {plus} from 'react-icons';

//import singleProd from './components/singleProd.js';

const Product = ({item}) => {

  const {addItem} = useCart();
  
  return (
    <div className="cocktails-center">
     
          {item.map((soundItem) => {
             const {id,title,price,photo} = soundItem;
             

             const addtocart = () => {
                addItem(soundItem);
             }
              return  <article key={id} className='cocktail'>
                 <div className='img-container'>
                   <img src={photo} alt={title} />
                 </div>
                 <div className='cocktail-footer'>
                   <h3>{title}</h3>
                   <h4>{price}</h4>

                 <Link to= {`product/:${id}`}>
                    <button class='btn-11' onClick={()=> addtocart()}>
                      shop now
                  
                    </button>
                 </Link>
                  
                    
                 </div>
                 
              </article>

             
                  
          })}
            
        
    </div>
  )

};
export default Product;