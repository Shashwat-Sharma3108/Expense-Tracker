import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
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
    setUserInput(prevState=>{
        return { ...prevState, date : event.target.value };
    });
  }

  function handleSubmit(event){
      event.preventDefault();

      console.log(userInput);
    //   console.log(changeAmount);
    //   console.log(changeDate);
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__contorl">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense__contorl">
          <label>Amount</label>
          <input type="number" min="1" step="1" onChange={amountHandler} />
        </div>
        <div className="new-expense__contorl">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
