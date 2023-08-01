import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ExpenseState, addBalance } from '../services/reducers/expenseReducer'
import { useAppDispatch } from '../helper/hooks'

const Portfolio: React.FC = () => {
    const dispatch = useAppDispatch()
  const { totalExpense, balance } = useSelector(( state: { expenseReducer: ExpenseState } ) => state.expenseReducer)
  const [ state, setState] = useState({ balance: ''})

  const handleBalance = () => {
    dispatch(addBalance(+state.balance))
    setState({...state, balance: ''})

  }
  const handleChange = (e : React.ChangeEvent<HTMLInputElement> ) => {
    const { value } = e.target;
    setState({...state, balance: value})
  }

    return (
        <div className=' shadow-2xl bg-gradient-to-br from-[#3f3f3f] to-black/90 backdrop:blur-md lg:w-1/3 rounded-xl p-6'>
            <div className='flex justify-between'>
                <p>Overview</p>
                
            </div>

            <div className='flex bg-[#4062ff] mt-3 rounded-xl'>
                <div className='w-1/2 h-1/2 p-3'>
                    <div className='w-32 h-32 flex flex-col justify-center items-center rounded-full bg-gradient-to-br from-[#3f3f3f] to-black/90 '>
                        <div>Remaining</div>
                        <div>{balance - totalExpense}</div>
                    </div>
                </div>
                <div className='p-3 flex flex-col justify-between w-1/2 [&>*]:bg-[#3f3f3f3] [&>*]:rounded-lg [&>*]:p-2'>
                    <div className=' flex flex-col items-center my-1'>
                        <span>Your Balance</span>
                        <span className=' font-sm'>{ balance }</span>

                    </div>
                    <div className='flex items-center flex-col '>
                        <span>Your expense</span>
                        <span className=''>{ totalExpense }</span>

                    </div>
                </div>
            </div>

            <div className='mt-6'>

                {
                    [1, 2, 3, 5].map(() => {
                        return (
                            <div className='flex justify-between py-5'>
                            </div>
                        )
                    })
                }
            <input value={state.balance} onChange={ handleChange } type='number' />
            <button className='btn bg-[#4062ff]' onClick={ handleBalance }>Add balance</button>
            </div>
        </div>
    )
}

export default Portfolio