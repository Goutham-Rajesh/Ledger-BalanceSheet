import React from "react";

interface TransactionHistoryProps {
    transactions: {
        id: number;
        type: 'credit' | 'debit';
        amount: number;
        date: string;
    }[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
    return (
        <ul>
            {transactions.map(transaction => (
                <li key={transaction.id}>
                    {transaction.date}: {transaction.type} ${transaction.amount.toFixed(2)}
                </li>
            ))}
        </ul>
    );
};

export default TransactionHistory;
