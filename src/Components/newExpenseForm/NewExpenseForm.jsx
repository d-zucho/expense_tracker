import React, { useState } from 'react'

import './newExpenseForm.style.css'

const NewExpenseForm = (props) => {
  //   const [inputTitle, setInputTitle] = useState('')
  //   const [inputPrice, setInputPrice] = useState('')
  //   const [inputDate, setInputDate] = useState(null)

  // eslint-disable-next-line no-unused-vars
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value }
    })
  }

  const priceChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value }
    })
  }

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    }
    console.log(expenseData)
  }

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title-input">Title:</label>
            <input id="title-input" type="text" onChange={titleChangeHandler} />
          </div>

          <div className="new-expense__control">
            <label htmlFor="price-input">Price: </label>
            <input
              id="price-input"
              type="number"
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
              min="2019-01-01"
              max="2025-12-31"
              onChange={dateChangeHandler}
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
