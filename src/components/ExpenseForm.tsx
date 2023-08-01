import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpenseItem } from '../services/reducers/expenseReducer'

export interface Expense {
    id: number;
    title: string;
    amount: number;
    date: string;
    [key: string]: string | number;
}

type State = {
    form: boolean,
    formData?: Expense
}
const ExpenseForm: React.FC = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState<State>({ form: false,  })
    const { form, formData } = state
    const handleForm = () => {
        setState({ ...setState, form: !form })
    }
    const saveForm = () => {
        setState({ ...setState, form:!form})
        if(!formData){
            alert("Please enter required fields")
        }else dispatch(addExpenseItem({...formData, id: new Date().getTime()}))
    }

    const handleChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target 

        setState({ ...state, formData: {...formData, [name]: value} as Expense })
    }
    
    return (
        <div className='mt-6 text-end mb-2'>
            {
                form ?
                    <div className='w-full flex justify-between flex-wrap gap-2 mb-2'>
                        <input onChange={ handleChange } name='title' value={formData?.title} type="text" placeholder='Description'/>
                        <input onChange={ handleChange } name='amount' value={formData?.amount} type="number" placeholder='Amount' />
                        <input onChange={handleChange } name='date' value={formData?.date} type="date" />
                        <button onClick={saveForm} className='border px-3 rounded-md border-white'>Save</button>
                        <button onClick={saveForm} className='border px-3 rounded-md border-white'>Cancel</button>
                    </div>
                    :
                    <>
                    <button onClick={handleForm} className='border text-right border-white px-3 py-1 rounded-md  '>Add expense</button>
                    </>
            }

        </div>
    )
}

export default ExpenseForm