import ExpenseItem from './ExpenseItem';

const Expenses = ({ expenses }) => {

    return (
        <div>
            <h2>Let's get started!!</h2>
            {expenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
            {/* <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount} />
            <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount} />
            <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount} /> */}
        </div>
    );
}

export default Expenses;