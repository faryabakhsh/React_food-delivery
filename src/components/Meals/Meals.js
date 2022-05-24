import { StarRounded } from '@mui/icons-material'
import MealForm from '../MealForm/MealForm';
import "./Meals.css";
import {useContext} from "react"
import CartContext from '../../store/cart-context';



function Meals({ name, ratings, price, imgSrc, itemId}) {
    const cartCtx=useContext(CartContext);
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id:itemId,
            name: name,
            amount: amount,
            price: price
        })
    };
    
  return (

    <div className="dishItemContainer" id={itemId}>

    <div className='mealsCard' >
        <div className="mealsinfo">
        <div className="title">
            <h4>{name}</h4>
        </div>
        
        <div className="ratings">
            {Array.apply(null, { length : 5 }).map((e,i) => (
                <i key = {i}>
                    <StarRounded ratings={ratings}/>
                </i>
            ))} 
        </div>
        <div className="price">
            <span>${price}</span>
            
        </div>
        
        <div>
            <MealForm onAddToCart ={addToCartHandler}/>
        </div>
        
        
        <div className="image">
             <img src= {imgSrc} />
        {/* </div>
        <MealForm onAddToCart ={addToCartHandler}/>
        </div> */}
      
    </div>
    </div>
</div>
    </div>
  )
}

export default Meals
