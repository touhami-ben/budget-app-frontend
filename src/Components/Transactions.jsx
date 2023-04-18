import axios from "axios";
import Table from "react-bootstrap/Table";
import  Transaction  from "./Transaction";
import { useState, useEffect } from "react";


const API = process.env.REACT_APP_API_URL;

export default function TransactionS() {
    const[transactions, setTransactions] = useState({});
    const[accountTotal, setAccountTotal] = useState(0)

    useState(() => {
        axios.get(`${API}/transactions`)
        .then(res => {
            setTransactions(res.data)
            // console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    useEffect(() => {
        let total = transactions.length > 0 ? transactions.reduce((sum, transaction) => {
            return sum + Number(transaction.amount)
        }, 0) : 0;
        setAccountTotal(total)
    }, [transactions])

     return (
        <div>
      <h2>Bank Account Total: <span id={accountTotal > 1000 ? "green" : accountTotal >= 0 ? "black" : "red"}>${accountTotal}</span></h2>
      <h3>Transactions</h3>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Edit</th>
          <th>Delete</th>
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