import { useState, useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

const AddTransaction = () => {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)
    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault()
        const newTransaction = {
            // _id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
        setAmount(0)
        setText("")
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input 
                        id="text"
                        type="text" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Enter text..." 
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)</label>
                    <input 
                        id="amount"
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="Enter amount..." />
                </div>
                <button type="submit" className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
