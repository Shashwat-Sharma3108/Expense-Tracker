import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import React, {useState} from 'react';

const ExpenseItem=(props) => {
  const [title, setTitle] = useState(props.title);
  const [color, setColor] = useState("blue");
  function handleHover(){
    setColor("purple");
  }
  function handleLeave(){
    setColor("blue");
  }
  function clickHandler(){
    setTitle("Updated!"); 
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick ={clickHandler} onMouseEnter={handleHover} onMouseLeave={handleLeave} style={{color:color}}> Click Me! </button>
    </Card>
  );
}

export default ExpenseItem;
