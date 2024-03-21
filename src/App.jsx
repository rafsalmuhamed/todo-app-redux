
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/todoSlice';

function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const todoText = prompt("Enter your todo:");
    if (todoText) {
      dispatch(addTodo({
        id: Date.now(),
        text: todoText,
        completed: false
      }));
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const totalCount = todos.length;

  return (
   <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{border:'5px solid blue',textAlign:'center',marginTop:'200px',width:'500px',borderRadius:'20px'}} >
        <h1 style={{color:'black'}}>Todo App</h1>
        <button style={{border:'2px solid black',background:'green',color:'#fefefe',padding:'10px',borderRadius:'10px'}} onClick={handleAddTodo}>Add Todo</button>
        <ul className="list-group">
          {todos.map(todo => (
            <li key={todo.id}>
              <div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                />
                <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.text}
                </label>
                <button style={{marginLeft:'10px',background:'red',color:'#fefefe',padding:'10px',borderRadius:'10px',marginLeft:'50px'}} onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <p style={{marginTop:'50px'}}>Total Todos: {totalCount}</p>
      </div>
   </div>
  );
}

export default App;

