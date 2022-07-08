import "./App.css";

import { useState } from "react";
import Header from './components/Header/Header';
import BottomMenu from './components/BottomMenu/BottomMenu';
import {} from "@mui/material"
import { HomeRounded, Chat, AccountBalanceWalletRounded, Favorite, SummarizeRounded, Settings } from '@mui/icons-material';
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import CompleteMeals from "./components/CompleteMeals/CompleteMeals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Seller from "./components/Seller/Seller";
import {Route} from "react-router-dom";




function App() {

const [cartIsShown, setCartIsShown] = useState(false);

const showCartHandler = () => {
  setCartIsShown(true);
};

const hideCartHandler = () => {
  setCartIsShown(false);
};
  
  return (
   <div>
    <CartProvider>
    <Route path='/' exact>
    <div className="App">
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      
      <main> 
        <div className="mainContainer ">
        <Banner/>
        <Category name={"Resturants"}/>
        <CompleteMeals />
        
        </div>
      </main>

     <div className='bottomMenu'>
        <ul id="menu">
          
          <BottomMenu link = {'#'} icon = {<HomeRounded />}  isHome/>
          
          <BottomMenu link = {'#'} icon = {<Chat />}  />
          
          <BottomMenu link = {'#'} icon = {<AccountBalanceWalletRounded />}  />
          
          <BottomMenu link = {'#'} icon = {<Favorite />} />
          
          <BottomMenu link = {'#'} icon = {<SummarizeRounded />}  />
          
          <BottomMenu link = {'#'} icon = {<Settings />}  />
          
        </ul>
      </div>  

      
    </div>
    </Route>
    </CartProvider>

<div>
<Route path="/seller">
  <Seller />
</Route>
</div>

</div>

  );
}

export default App;
