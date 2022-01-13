import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import Transaction from "./Transaction"

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)
    
    return (
        <>
            <h3>History</h3>
            {transactions.length > 0 ? (
                <ul className="list">
                {transactions.map(transaction => (
                    <Transaction
                        key={transaction.id}
                        id={transaction.id}
                        text={transaction.text}
                        amount={transaction.amount}
                    />
                ))}
            </ul>
            ) : "You have no transactions yet"}
        </>
    )
}

export default TransactionList
