import React from 'react';
import {useState} from "react";
import "./Seller.css";

function Seller(props) {

  
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value)};

      const amountChangeHandler = (event) => {
          setEnteredAmount(event.target.value)};

  
  const submitHandler = (event) => {
    event.preventDefault();
  

  const expenseData = {
    title: enteredTitle,
    amount: enteredAmount,
   
};
console.log("expenseData")
  


setEnteredTitle('');                // this way we can override when the form was submitted and set the satte back to ""
setEnteredAmount('');

  };
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">

          <div className="new-expense__control">

            <label>title</label>
            <input type="text" 
            value={enteredTitle}
            onChange={titleChangeHandler}/>
          </div>

          <div className="new-expense__control">
            <label>amount</label>
            <input type="number"
             min="0.01" 
             step="0.01"
             value={enteredAmount}              // two way binding  ---> it allows us to gather user input and then change it e.g. upon form submission
              onChange={amountChangeHandler}/>
          </div>
      
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Meal</button>
        </div>
  
      </form>
    );
    
  
};

export default Seller;
