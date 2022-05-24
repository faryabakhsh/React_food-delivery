import React from 'react'
import {} from "@mui/material"
import { SearchRounded, ShoppingCart, ShoppingCartRounded } from '@mui/icons-material';
import './Header.css';
import { useContext } from "react";
import CartContext from '../../store/cart-context';


function Header(props) {

const cartCtx= useContext(CartContext);

const numberOfCartItems = cartCtx.items.reduce((curNumber, item ) => {
  return curNumber + item.amount;
}, 0);

  return (
    <header>
      <div className='logo'>
      {/* <h1>FoodDelve</h1> */}
      </div>

      <div className='inputBox'>
          <SearchRounded className='searchIcon'/>
          <input type="text" placeholder="search"/>
      </div>

      <div className='shoppingCart' onClick={props.onShowCart}>
      
          <ShoppingCartRounded className='cart' />
          <div className='cart_content'>
              <p> {numberOfCartItems}</p>
          </div>
          
      </div>
     
      {/* <div className='profileContainer'>
          <div className='imgBox'>
              <img src="" alt=""/>
          </div>

          <h2 className='userName'>Farya Bakhsh</h2>
      </div> */}
    </header>
  )
}

export default Header
