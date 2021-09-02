import React from "react";
import ExpenseForm from "./ExpenseForm";
// import ExpenseFrom from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props){
    const saveExpenseHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            key : Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
    </div>
}

export default NewExpense;