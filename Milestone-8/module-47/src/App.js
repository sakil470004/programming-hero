import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const singer1 = { name: 'Mahfujur Rahman', job: 'Singer' }
  const singer2 = { name: 'Luna Laila', job: 'Singer2' }
  const singerStyle = {
    color: 'blue',
    backgroundColor: 'red'
  }
  const users = [
    { name: 'Luna Laila', job: 'Singer2' },
    { name: 'LILA', job: 'FUNMAKER' },
    { name: 'Sakil', job: 'Programer' },
  ]
  const nayoks = ['Rubel', 'BappaRaz', 'Joshim']
  return (
    <div className="App">
      <ExternalUsers />
      <section className='container'>
        <h1>Here is the list of Singer</h1>
        {/* <p style={singerStyle}>Name :{singer1.name} --- JOB : {singer1.job}</p>
        <p style={{ color: 'green', backgroundColor: 'gray' }}>Name :{singer2.name} --- JOB : {singer2.job}</p>
        <p style={{ ...singerStyle, fontSize: '2rem' }}>Name :{singer1.name} --- JOB : {singer1.job}</p>
         */}
      </section>

      {/* <Person name="Rubel" job="Nayok" />
      <Person name="BappaRaj"/>
      <Person name=""/> */}
      <h1>Nayok using loop</h1>
      {
        nayoks.map(nayok => <Person name={nayok} />)
      }
      <h5>New Component</h5>
      <Friend name="Funder" dialog='ata mazi satakle' />
      <Friend />
      <h1>Here is all users with object + array map</h1>
      {
        users.map(user => <User name={user.name} job={user.job} />)
      }
      <Counter />
    </div>
  );
}
function Person(props) {
  return (
    <div className='person'>
      <h1>Name : {props?.name ? props.name : 'No Name Yet'}</h1>
      <p>Job : {props?.job ? props.job : "Beker"}</p>
    </div>
  )
}
function Friend(props) {
  return (
    <div className='friend'>
      <h1>Name:{props.name}</h1>
      <p>Dialog:{props.dialog}</p>
    </div>
  )
}
function User(props) {
  return (
    <div className='person'>
      <h1>Name : {props.name}</h1>
      <p>JOB : {props.job}</p>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)
  return (
    <div className='person'>
      <h1 style={{ color: 'white' }}>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
function ExternalUsers() {
  const [users, setUsers] = useState([])
  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }
    , [])
  return (
    <div>
      <h2>External Users</h2>
      {
        users.map(user => {
          return (<div key={user.id} className='person'>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
          )
        })
      }
    </div>
  )
}
export default App;
