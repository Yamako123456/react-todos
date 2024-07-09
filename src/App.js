
import React, {useState} from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm';

import TodoTable from './components/TodoTable';


function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {
      rowNumber: 1,
      rowDescription: 'Feed dog',
      rowAssigned: 'Eric'
    },
    {
      rowNumber: 2,
      rowDescription: 'Charge phone',
      rowAssigned: 'Eric'
    },
    {
      rowNumber: 3,
      rowDescription: 'Get haircut',
      rowAssigned: 'Eric'
    },
    {
      rowNumber: 4,
      rowDescription: 'Find Miquella',
      rowAssigned: 'Marika'
    },
  ]
  )

  const addTodo = (description, assigned) => {
    let rowNum = 0;
    if (todos.length > 0) {
      rowNum = todos[todos.length - 1].rowNumber + 1
    } else
      rowNum = 1;

    const newTodo= {
      rowNumber: rowNum,  
      rowDescription: description,
      rowAssigned: assigned
    }
    setTodos(todos => [...todos, newTodo]); 
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter( function (value) {
      return value.rowNumber !== deleteTodoRowNumber
    });
    setTodos(filtered); 
  }


  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}  deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary' >
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm && 
            <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
