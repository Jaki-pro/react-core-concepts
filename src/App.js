//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
function App() {

  const products = [
    { name: 'realmer c15', category: 'medium', price: 150 },
    { name: 'redmi', category: 'high', price: 200 },
    { name: 'vivo', category: 'low', price: 140 }
  ]
  return (
    <div>
      <Users></Users>
      <Count></Count>
      {

        products.map(product => <Product dd={product} ></Product>)
      }

    </div>
  )
}
const Product = (prprty) => {
  const { name, category, price } = prprty.dd;
  return (
    <div style={{ border: '2px solid cyan', width: '60%', textAlign: 'center', marginBottom: '5px' }}>
      <h1>Name: {name}</h1>
      <h3>Category: {category}</h3>
      <h4>price: ${price}</h4>
      <button>Bye Now</button>
    </div>
  )
}
const Count = () => {
  const [count, setCount] = useState(10)
  const newCount = () => setCount(count + 1);
  const dCount = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={newCount}>incrs</button>
      <button onClick={dCount}>dcrs</button>
    </div>
  )
}

//users api
const Users = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h2>Dynamic User: { }</h2>
      <ul>
        {
          users.map(user => <li>{user.id}</li>)
        }
      </ul>

    </div>
  )
}

export default App;
