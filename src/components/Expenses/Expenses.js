import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";
import "./Expenses.css";
import ExpensesLists from "./ExpensesList";
import ExpenesesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // console.log(filteredYear);

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onYearChange={yearChangeHandler}
          />
          <ExpenesesChart expenses={filteredExpenses}/>
          <ExpensesLists items={filteredExpenses} />
        </Card>
      </li>
    </div>
  );
};

export default Expenses;
