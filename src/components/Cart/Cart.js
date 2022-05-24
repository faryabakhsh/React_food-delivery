
import  Modal from '../Modal/Modal'
import React from 'react'
import "./Cart.css"

function Cart(props) {
    const cartItems =<ul className='cart-items'> {[{id: "c1", name: "sushi", amount: 2}].map((item) => <li>{item.name}</li>)} </ul>;


  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className='total'>
      <span>total amount</span>
      <span>678</span>
      </div>
      
      <div className='actions'>
          <button className='button--alt' onClick={props.onClose}>Close</button>
          <button className="button">checkout</button>
      </div>
      </Modal>
  )
}

export default Cart
