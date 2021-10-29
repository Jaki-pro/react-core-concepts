//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
function App() {

  const friends = [
    {name: 'Jaki', address: 'Mymensing'},
    {name: 'Fardin', address: 'Mymensing'},
    {name: 'Taijul', address: 'Kishorgonj'},
    {name: 'Sazzad', address: 'Haluaghat'},
    {name: 'Arafat', address: 'Mymensing'},
    {name: 'Arafat', address: 'Mymensing'}
      
  ] 
  //dsdfsd
  return (
    <div>
      <Counter></Counter>
      <Users></Users>
      {
        friends.map(frnd => <Friend details={frnd}></Friend>)
      }
    </div>
  )
}
const Users=()=>{
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
  
}

const Counter = ()=>{
  const [count, setCount] = useState(2865786);
  const ddd =()=> {
    setCount(count+1);
  };
  const mmm =()=> {
    if (count>0)
      setCount(count-1);
  };
  return( 
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={ddd}>increased</button>
      <button onClick={mmm}>decreased</button>
    </div>
  )
}
 
//product function
const Friend = props=>{
  const {name, address} = props.details;
  return(  
    <div className='kk'>
      <h3 style={{textAlign: 'center'}}>Name: {name}</h3>
      <h4 style={{textAlign:'center'}}>Address: {address}</h4>
      <button>Click to see profile</button>
    </div>
  )
}    

export default App;
