import './expenseItem.css'
import DateCard from '../dateCard/DateCard'

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <DateCard date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">
        <p>${props.amount}</p>
      </div>
    </div>
  )
}

export default ExpenseItem
