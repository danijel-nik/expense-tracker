import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import { numberWithCommas } from "../utils/format"

const Transaction = ({ id, text, amount }) => {
    const { deleteTransaction } = useContext(GlobalContext)
    const amountValue = amount < 0 ? amount*(-1) : amount

    return (
        <li className={amount > 0 ? "plus" : "minus"}>
            {text} <span>
                {amount < 0 ? "- " : "+ "}
                ${numberWithCommas(amountValue)}</span>
                <button 
                    className="delete-btn"
                    onClick={() => deleteTransaction(id)}
                >x</button>
        </li>
    )
}

export default Transaction
