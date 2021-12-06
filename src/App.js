import React,{useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';

function App(){
  const name = [
    {name: 'jaki', dept: 'cse', id : '12008035'},
    {name: 'Milan', dept: 'Arch', id : '12008036'},
    {name: 'sadaf', dept: 'ICT', id : '12008037'}
  ]
  return(
    <div>
      {
        name.map(nm=><Friends dd = {nm}></Friends>)
      }
      <IncDec></IncDec>
      <Users></Users>
    </div>
  )
}

const Friends = (props) =>{
  const {name, dept, id} = props.dd;
  return(
    <div>
      <p>name: {name}</p>
      <p>dept: {dept}</p> 
      <h2>ID: {id}</h2>
    </div>
  )
}
const IncDec=()=>{
  const [count, setCount] = useState(0);
  const incount=()=>setCount(count+1)
  const decrease =()=>{
    if (count>0) {
      setCount(count-1)
    }
  }
  return(
    <div> 
      <p>count: {count}</p>
      <button onClick={incount}>increase</button>
      <button onClick={decrease}>decrease</button>
      <DDD cnt = {count}></DDD>
    </div>
    
  )

}
const Users=()=>{
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return(<div>
    <h1>dynamic users: </h1>
    <ul>
      {
        users.map(user=><li>{user.name}</li>)
      }
    </ul>
  </div>)
}
const DDD=(props)=>{
  return(
    <div>
      <h3>number of guys: {props.cnt}</h3>
    </div>
  )
}
export default App;
