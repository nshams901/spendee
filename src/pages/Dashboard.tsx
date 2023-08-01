import React, { useEffect } from 'react'
import Portfolio from '../components/Portfolio'
import HeadingCard from '../components/ExpenseTable'
import { useAppDispatch } from '../helper/hooks'
import { fetchNseStocks } from '../services/actions/expenseAction'
import ExpenseTable from '../components/ExpenseTable'
import ExpenseForm from '../components/ExpenseForm'
import { useSelector } from 'react-redux'
import { ExpenseState } from '../services/reducers/expenseReducer'


const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { totalExpense } = useSelector(( state: { expenseReducer: ExpenseState } ) => state.expenseReducer)
  useEffect(() => {
    dispatch(fetchNseStocks())
  }, [])
  return (
    <div className='my-6 lg:flex gap-8'>
      <Portfolio />
      <div className='flex-1'>
        <ExpenseTable />
      <div className='mt-auto'>Total Expense: { totalExpense}</div>
        <ExpenseForm />
      </div>
    </div>
  )
}

export default Dashboard