import React, { useState } from 'react'
// import { db } from '../../firebase/firebase.config'
// import { collection, addDoc } from 'firebase/firestore'

import './newExpenseForm.style.css'

const NewExpenseForm = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  const titleChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredTitle: e.target.value,
    })
  }

  const priceChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredAmount: e.target.value,
    })
  }

  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate + 'T00:00'),
    }

    // hands off expense data to FormWrapper, then to App
    props.onSaveExpense(expenseData)

    // reset form input values
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    })
  }

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title-input">Title:</label>
            <input
              value={userInput.enteredTitle}
              id="title-input"
              type="text"
              onChange={titleChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label htmlFor="price-input">Price: </label>
            <input
              id="price-input"
              type="number"
              value={userInput.enteredAmount}
              min="0.01"
              step="0.01"
              onChange={priceChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label htmlFor="date-input">Date:</label>
            <input
              id="date-input"
              type="date"
              min="01/01/2019"
              max="12/31/2031"
              onChange={dateChangeHandler}
              value={userInput.enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button className="new-expense__button" type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewExpenseForm
