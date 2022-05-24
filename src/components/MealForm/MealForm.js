import React, { useRef } from 'react'
import "./MealForm.css"
import Input from '../Input/Input';
import {useState} from "react"
import { AddRounded } from '@mui/icons-material'

function MealForm(props) {
  const[amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler =event =>{
    event.preventDefault ();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5)
    {
      setAmountIsValid (false);
      return;
    };

    props.onAddToCart(enteredAmountNumber);
  };
    return (
        <form className="form" onSubmit={submitHandler}>
          <Input
          ref = {amountInputRef}
            label='Amount'
            input={{
              id: 'amount_' + props.id,
              type: 'number',
              min: '1',
              max: '5',
              step: '1',
              defaultValue: '1',
            }}
          />
           <div className="addtocart">
            <button><AddRounded/></button>
        </div>
         {!amountIsValid && <p> please entered a valid amount</p>} 
        </form>
      );
    };
export default MealForm
