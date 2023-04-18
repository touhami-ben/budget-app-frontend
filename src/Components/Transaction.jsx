import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const API = process.env.REACT_APP_API_URL


export default function Transaction({ transaction, i}) {

    let navigate = useNavigate();
    function handleDelete() {
        axios.delete(`${API}/transactions/${i}`)
        .then(() => {
            navigate(`/transactions`);
        })
        .catch((error) => {
            console.log(error);
        })
      }

  return (
    <tr>
      <td>{i}</td>
        <td>{transaction.date}</td>
        <td><Link to ={`/transactions/${i}`}>{transaction.name}</Link></td>
        <td>${transaction.amount}</td>
        <td><Link to={`/transactions/${i}/edit`}></Link></td>
        <td><Button variant="light" onClick={handleDelete}>DELETE</Button></td>
    </tr>
  )
}