import axios from "axios";
import Table from "react-bootstrap/Table";
import Transaction from "./Transaction";
import { useState, useEffect } from "react";


const API = process.env.REACT_APP_API_URL;

export default function TransactionS() {
    const[transactions, setTransactions] = useState({});
    const[accountTotal, setAccountTotal] = useState

    useState(() => {
        axios.get(`${API}/transactions`)
        .them(res => {
            setTransactions(res.data)
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    useEffect(() => {
        let total = transactions.length > 0 ? transactions.reduce((sum, transaction) => {
            return sum + transaction.amount
        }, 0) : 0;
        setAccountTotal(total)
    }, [transactions, setAccountTotal])

     return (
        <div>
      <h2>Bank Account Total: <span id={accountTotal > 100 ? "green" : "red"}>${accountTotal}</span></h2>
      <h3>Transactions</h3>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Name</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, i) => {
          return <Transaction key={i} transaction={transaction} i={i} />;
        })}
      </tbody>
    </Table>

    </div>
     )   
}