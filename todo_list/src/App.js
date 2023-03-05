import  React, { useState } from "react";
import logo from './logo.svg';
import './App.css';


function App() {
  const [newTodo, setNewTodo] = useState ("");
  const [todos, setTodos] = useState([]);
  
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text : newTodo,
      complete: false
    }

    setTodos([...todos, todoItem])
    setNewTodo("");
  }

  const handleTodoDelete = (delIdx) => {
    const filterTodos = todos.fulter((_todo, i) => {
      return i !== delIdx;
    });


    setTodos(filterTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => { 
      if (idx == i ) {
      todo.compelte = !todo.complete;
    }
    return todo;
    });
    setTodos(updatedTodos);
  }
  return (
    <div>
      <form onSubmit ={(event) => {
        handleNewTodoSubmit(event)
      }}> 

        <input onChange={(event) => {
          setNewTodo(event.target.value)
        }} type = "text" value = {newTodo}> </input>
      <div>
        <button> Add</button>
      </div>
      </form>

       
      {todos.map((todo,i) => {
      return (
      <div> 
        <input onChange= {(event) => {
          handleToggleComplete(i);
        }} checked={todo.complete} type = "checkbox" /> 
        <span>{todo.text}</span>
        <button onClick={(event) => {
          handleTodoDelete(i);
        }}> </button>
      </div>
      );
      })}
    </div>
  );
}

export default App;
