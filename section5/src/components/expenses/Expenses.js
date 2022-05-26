import ExpenseItem from './ExpenseItem';
import ExpensesChart from './ExpensesChart'

const Expenses = ({ expenses }) => {


    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpensesChart expenses={expenses} />
            {expenses.map((expense) => <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />)}
        </div>
    );
}

export default Expenses;