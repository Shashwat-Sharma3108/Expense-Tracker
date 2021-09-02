import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../Filter/ExpensesFilter';
import './Expenses.css';

const  Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onYearChange = {yearChangeHandler}/>
      {props.items.map(element=>{
         return (<ExpenseItem
         title={element.title}
         amount={element.amount}
         date={element.date}
       /> );
      })}
    </Card>
  );
}

export default Expenses;