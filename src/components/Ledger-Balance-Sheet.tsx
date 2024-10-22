import React, { useState } from "react";
import Transaction from "./TransactionHistory"; // Ensure this component is set up to display the transactions

interface TransactionType {
    id: number;
    type: 'credit' | 'debit';
    amount: number;
    date: string;
}

const Ledger: React.FC = () => {
    const [balance, setBalance] = useState(20000);
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState<'credit' | 'debit'>('credit');
    const [transactions, setTransactions] = useState<TransactionType[]>([]);
    const [transactionId, setTransactionId] = useState(1);

    const handleTransaction = () => {
        const newTransaction: TransactionType = {
            id: transactionId,
            type,
            amount,
            date: new Date().toLocaleString(),
        };

        setTransactions([...transactions, newTransaction]);
        setBalance(balance + (type === 'credit' ? amount : -amount));
        setAmount(0); // Reset the amount input
        setTransactionId(transactionId + 1); // Increment transaction ID
    };

    return (
        <div>
            <h1>Ledger Balance Sheet</h1>
            <p>Current Balance: ${balance.toFixed(2)}</p>
            <div className="Transaction">
                <label>Select the type of Transaction:
                    <select value={type} onChange={(e) => setType(e.target.value as 'credit' | 'debit')}>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                    </select>
                </label>
            </div>
            <div className="Enter Amount">
                <label>Enter the amount:
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(parseFloat(e.target.value))}
                    />
                    <button onClick={handleTransaction}>Submit</button>
                </label>
            </div>
            <div>
                <h2>Transaction History</h2>
                <Transaction transactions={transactions} />
            </div>
        </div>
    );
}

export default Ledger;
