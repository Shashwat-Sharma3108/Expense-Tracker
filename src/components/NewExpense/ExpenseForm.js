import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // const [changeTitle, setChangeTitle] = useState("");
    // const [changeAmount, setChangeAmount] = useState("");
    // const [changeDate, setChangeDate] = useState("");
    
    const [userInput,setUserInput] = useState({
        title : "",
        amount : "",
        date : ""
    });

    function titleHandler(event) {
    // setUserInput({...userInput, title: event.target.value});
    setUserInput(prevState=>{
        return { ...prevState, title : event.target.value };
    });
  }
  
  function amountHandler(event) {
    // setUserInput({...userInput, amount: event.target.value});
    setUserInput(prevState=>{
        return { ...prevState, amount : event.target.value };
    });
  }

  function dateHandler(event) {
    // setUserInput({...userInput, date: event.target.value});
    const inputDate = event.target.value;
    setUserInput(prevState=>{
        return { ...prevState, date :(inputDate)};
    });
  }

  function handleSubmit(event){
      event.preventDefault();
      userInput.date = new Date(userInput.date); 
      // console.log(userInput);
      props.onSaveExpenseData(userInput);
      setUserInput({date : "", title : "", amount : ""}); 
    //   console.log(changeAmount);
    //   console.log(changeDate);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__contorl">
          <label>Title</label>
          <input type="text" value={userInput.title} onChange={titleHandler} />
        </div>
        <div className="new-expense__contorl">
          <label>Amount</label>
          <input type="number" min="1" step="1" value={userInput.amount} onChange={amountHandler} />
        </div>
        <div className="new-expense__contorl">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            onChange={dateHandler}
            
            value={userInput.date}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit" >Submit</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
