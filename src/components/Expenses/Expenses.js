import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const  Expenses = (props) => {
  return (
    <Card className="expenses">
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