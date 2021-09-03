/* eslint-disable no-unused-vars */
import React from 'react'

import NewExpenseForm from '../newExpenseForm/NewExpenseForm'
import './formWrapper.css'

const FormWrapper = (props) => {
  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    }
    console.log(expenseData)

    //lifting data up to app.js
    props.onAddExpense(expenseData)
  }

  return (
    <div className="form-wrapper">
      <NewExpenseForm onSaveExpense={saveExpenseDataHandler} />
    </div>
  )
}

export default FormWrapper
