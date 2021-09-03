import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
// import ExpenseFrom from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props){
    const [handleClick, setHandleclick] = useState(true);
    const saveExpenseHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setHandleclick(false);
    }

    function handleFormCancel(){
        setHandleclick(true);
    }

    const handleButtonClick = (event) => {
        setHandleclick(false);
    }
    return <div className="new-expense">
        {handleClick && <button onClick={handleButtonClick}> Add Expense</button>}
        {!handleClick && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancle = {handleFormCancel}/>}
    </div>
}

export default NewExpense;