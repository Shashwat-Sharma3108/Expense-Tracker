import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import React from 'react';

const ExpenseItem=(props) => {
  // const [title, setTitle] = useState(props.title);
  // const [color, setColor] = useState("blue");
  // function handleHover(){
  //   setColor("purple");
  // }
  // function handleLeave(){
  //   setColor("blue");
  // }
  // function clickHandler(){
  //   setTitle("Updated!"); 
  // }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      
    </Card>
  );
}

export default ExpenseItem;
