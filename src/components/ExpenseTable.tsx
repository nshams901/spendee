import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { ExpenseState, deleteExpense, updateExpense } from '../services/reducers/expenseReducer';
import { Expense } from './ExpenseForm';
import { useAppDispatch } from '../helper/hooks';

const ExpenseTable: React.FC = () => {
  const dispatch = useAppDispatch()
  const [state, setState] = useState({ editItem :{} as Expense } );
  const { editItem } = state;
  const { expenseList} = useSelector(({ expenseReducer } : { expenseReducer: ExpenseState })  => expenseReducer)

  const handleEdit = ( item: Expense) => {
    setState({ ...state, editItem: item })
  }

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target;
    setState({...state, editItem: {...editItem, [name]: value } })
    
  }

  const handleSave = ( ) => {
    setState({...state, editItem: {  ...editItem, id: 0 }});
    dispatch(updateExpense(editItem))
  }

  const handleDelete = (item: Expense) => {
    dispatch(deleteExpense(item))
  }
  return (
    <div className='bg-gradient-to-br from-[#3f3f3f] to-black/90 h-full max-h-full rounded-lg w- p-3 px-10'>
      <div className='flex justify-between'>
        <p>You expenses</p>
      </div>
      <table className='w-full mt-3 overflow-auto'>
        <thead>
          <tr>
            <th className='border-b-2 text-left border-white px-3 py-1'>Description</th>
            <th className='border-b-2 text-left border-white px-3 py-1'>Amount</th>
            <th className='border-b-2 text-left border-white px-3 py-1'>Date</th>
            <th className='border-b-2 text-left border-white px-3 py-1'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            expenseList.map((item) => {
              return (
                <>
                  {
                    state.editItem?.id === item.id ?
                      <tr className='border-b-2 border-white/30'>
                        <td><input name='title' onChange={handleUpdate} className='' value={state.editItem?.title} type="text" placeholder='Description' /></td>
                        <td><input name='amount' onChange={handleUpdate} type="number" placeholder='Amount' value={state.editItem.amount}/></td>
                        <td><input name='date' onChange={handleUpdate} type="date" value={state.editItem.date} /></td>
                        <td>
                          <button onClick={ () => handleSave() } className='border px-3 rounded-md border-white'>Save</button>
                          <button className='border px-3 rounded-md border-white mx-2'>Cancel</button>
                        </td>
                      </tr>
                      :

                      <tr>
                        <td className='border-b-2 border-white/30 px-3 py-1'>{item.title}</td>
                        <td className='border-b-2 border-white/30 px-3 py-1'>💵 {item.amount}</td>
                        <td className='border-b-2 border-white/30 px-3 py-1'>{ item.date}</td>
                        <td className='border-b-2 border-white/30 px-3 py-1'>
                          <button className='border border-white/30 px-3 py-1 rounded-md' onClick={() => handleEdit(item)}>Edit</button>
                          <button className='border border-white/30 px-3 py-1 rounded-md mx-2' onClick={() => handleDelete(item)}>Delete</button>
                        </td>
                      </tr>

                  }
                </>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ExpenseTable