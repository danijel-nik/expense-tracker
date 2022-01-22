import './App.css'
import { useContext } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import LoadingSpinner from './components/LoadingSpinner'
import { GlobalContext } from './context/GlobalState'

function App() {
    const { loading } = useContext(GlobalContext)
    return (
        <>
            {loading && <LoadingSpinner />}
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />                
            </div>
        </>
    )
}

export default App;
