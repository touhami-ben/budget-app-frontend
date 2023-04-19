import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const API = process.env.REACT_APP_API_URL;

export default function TransactionDetails() {
  const [transaction, setTransaction] = useState({
    name: "",
    amount: 0,
    category: "",
    from: "",
    date: "",
  });

  const { index } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [index]);

  function handleDelete(){
    axios.delete(`${API}/transactions/${index}`)
    .then(() => {
        navigate(`/transactions`);
    }).catch((error) => {
        console.log(error);
    })
  }

  return (
    <div>
        <article>
            <h2>Transaction #{index}</h2>
            <ul>
                <li>Transaction Date: {transaction.date}</li>
                <li>Item Name: {transaction.name}</li>
                <li>Item Amount: {transaction.amount >= 0 ? `$${transaction.amount}` : `-$${transaction.amount * -1}`}</li>
                <li>From: {transaction.from}</li>
                <li>Category: {transaction.category}</li>
            </ul>
            <Button variant="secondary" onClick={() => navigate(`/transactions`)}>Back</Button>
            <Button variant="secondary" onClick={() => navigate(`/transactions/${index}/edit`)}>Edit</Button>
            <Button variant="secondary" onClick={handleDelete}>DELETE</Button>
        </article>
    </div>
  );
}
