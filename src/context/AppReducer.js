export default (state, action) => {
    switch (action.type) {
        case 'LOADING': 
            return {
                ...state,
                loading: true
            }
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                transactions: action.payload,
                loading: false
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
                loading: false
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload),
                loading: false
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}