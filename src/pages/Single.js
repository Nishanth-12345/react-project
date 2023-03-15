import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import items from '../components/data.js';
import { useCart } from 'react-use-cart';
import {Button, Container, Col, Row, Table} from 'react-bootstrap';
import {BsCartCheck, BsCartX} from 'react-icons/bs';
const Single = () => {
    const {
      isEmpty,
      
      items,
      
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart,
      
    } = useCart();

    

  return (
    <div>

       <Container className="py-4 mt-9">
          <h1 className='text-light-primary my-5 text-center'>
            {isEmpty?'Shop now':'your orders'}
          </h1>
          <Row className='justify-content-center'>
          <Table responsive="sm" striped bordered hover variant='dark'>
                <tbody>
                   {items.map((soundItem,index) =>{
                      const {id,title,price,photo,quantity} = soundItem;
                     
                     return(
                      <tr key={index}>
                      <td>
                      <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <div style={{ padding: '.5rem'}}>
                              <img src={photo} style={{ width: '4rem'}} alt={title} />
                          </div>
                      </div>
                      </td>
                      <td>
                        <h6 style={{whiteSpace:'nowrap', width:"14rem" , overflow: "hidden" , textOverFlow: 'ellipsis'}}>
                           {title}
                        </h6>
                      </td>
                      <td>Rs-- {price}</td>
                      <td>quantity ({quantity})</td>
                      <td>
                            <Button onClick={()=> updateItemQuantity(id, quantity - 1)} class="btn-11" >-</Button>
                            <Button onClick={()=> updateItemQuantity(id, quantity + 1)} class="btn-11" >+</Button>
                            <Button variant="danger" onClick={()=> removeItem(id)} class="btn-22">Remove Item</Button>
                     </td>
                      
                    </tr>
                     
                     )
                   })}
                </tbody> 

          </Table>
           
         
          
          </Row>
          <div className='cart=bottom'>
             <div className='total'>
                <h3>total:</h3>
                <h3>${cartTotal}</h3>
                
             </div> 
          </div>
        </Container>   
             
                  
      
    </div>
  )
}

export default Single;