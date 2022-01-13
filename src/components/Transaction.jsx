import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Transaction = ({ id, text, amount }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    return (
        <li className={amount > 0 ? "plus" : "minus"}>
            {text} <span>
                {amount < 0 ? "- " : "+ "}
                ${amount < 0 ? amount*(-1) : amount}</span>
                <button 
                    className="delete-btn"
                    onClick={() => deleteTransaction(id)}
                >x</button>
        </li>
    )
}

export default Transaction
