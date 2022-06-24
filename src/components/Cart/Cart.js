import CartItem from './CartItem';
import  Modal from '../Modal/Modal'
import React from 'react'
import "./Cart.css"
import {useContext} from 'react';
import CartContext from '../../store/cart-context';

const Cart=(props)=> {
const cartCtx = useContext (CartContext);

const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

const cartItemRemoveHandler = (id) => {}
const cartItemAddHandler = (item) => {}


    const cartItems =(
    <ul ul className='cart-items'>
       {cartCtx.items.map((item) => (
      <CartItem 
      key = {item.id} 
      name = {item.name}
      amount = {item.amount}
      price = {item.price} 
      onRemove = {cartItemRemoveHandler.bind(null,item.id)} 
      onAdd ={cartItemAddHandler.bind(null, item)}
      />
       ))} 
       </ul>
       
    );


  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className='total'>
      <span>total amount</span>
      <span>{totalAmount}</span>
      </div>
      
      <div className='actions'>
          <button className='button--alt' onClick={props.onClose}>Close</button>
          <button className="button">checkout</button>
      </div>
      </Modal>
  );
}
;
export default Cart;
