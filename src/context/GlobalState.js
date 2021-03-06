import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

// Inintial state
const initialState = {
    transactions: [
        /*
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
        */
    ],
    error: null,
    loading: false
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    const getTransactions = async () => {
        dispatch({ type: 'LOADING' })
        try {
            const res = await axios.get('/api/v1/transactions')
            const { data } = res.data
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    const deleteTransaction = async (id) => {
        dispatch({ type: 'LOADING' })
        try {
            await axios.delete(`/api/v1/transactions/${id}`)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    const addTransaction = async (transaction) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        dispatch({ type: 'LOADING' })
        try {
            const newTransaction = await axios.post('/api/v1/transactions', transaction, config)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: newTransaction.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            error: state.error,
            loading: state.loading,
            getTransactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}