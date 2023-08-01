import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Expense } from "../../components/ExpenseForm";



export interface ExpenseState {
    expenseList: Array<Expense>,
    totalExpense: number,
    balance: number
}
const initialState: ExpenseState = {
    expenseList: [],
    totalExpense: 0,
    balance: 0
}

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpenseItem: function(state, action: PayloadAction<Expense>){
            state.expenseList = [...state.expenseList, action.payload]
            state.totalExpense += +action.payload.amount
        },
        updateExpense: function(state, action: PayloadAction<Expense>){
            const data = state.expenseList.map((item) => {
                if(item.id === action.payload.id){
                    let diff = item.amount - action.payload.amount
                    state.totalExpense -=diff
                    return action.payload
                }else return item;
            });
            state.expenseList = data
        },
        deleteExpense: function(state, action: PayloadAction<Expense>){
            state.expenseList = state.expenseList.filter((item) => {
                if(item.id!== action.payload.id){
                    return true
                }else{
                    state.totalExpense -= item.amount
                    return false
                }
            })
        },
        addBalance: function(state, action: PayloadAction<number>){
            state.balance += action.payload
        }
    }
})

export const { addExpenseItem, updateExpense, deleteExpense, addBalance } = expenseSlice.actions
export default expenseSlice.reducer