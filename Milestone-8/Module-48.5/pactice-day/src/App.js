import logo from './logo.svg';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Mobile from './components/Mobile/Mobile';
import { useEffect, useState } from 'react';

function App() {
  const article={
   color:'red',
   border:'2px solid gold',
   fontSize:'2rem',
   padding:'20px'
  }
const [todos,setTodos]=useState([])
 
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res=>res.json())
  .then(data=>setTodos(data))
},[])
return (
    <div className="App">
    <article style={article}>Hi Sakil
    <h2 style={{color:'black'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur quidem fuga iste in sit inventore dicta hic aspernatur? Provident.</h2>
    </article>
    <Mobile/>
    <Blogs/>
    <Todos todos={todos}/>
    </div>
  );
}
function Todos({todos}){
  return (
    <div>
    {
      console.log(todos)
    }
      {todos.map(todo=><h1 key={todo.id}>{todo.title}</h1>)}
    </div>
  ) 
}
export default App;
