import React from 'react'

import './newExpenseForm.style.css'

const NewExpenseForm = () => {
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">
              Title:
              <input type="text" />
            </label>
          </div>

          <div className="new-expense__control">
            <label htmlFor="">
              Price:
              <input type="number" min="0.01" step="0.01" />
            </label>
          </div>

          <div className="new-expense__control">
            <label htmlFor="">
              Date:
              <input type="date" min="2019-01-01" max="2025-12-31" />
            </label>
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
