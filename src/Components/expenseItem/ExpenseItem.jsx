import './expenseItem.css'
import DateCard from '../dateCard/DateCard'
import React, { useState } from 'react'

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)

  const buttonHandler = () => {
    setTitle('Updated!')
    console.log(title)
  }

  return (
    <div className="expense-item">
      <DateCard date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">
        <p>${props.amount}</p>
      </div>
      <button onClick={buttonHandler}>Change title</button>
    </div>
    //asdsad
  )
}

export default ExpenseItem
