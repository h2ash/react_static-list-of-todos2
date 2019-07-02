import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from "./components/TodoList"

console.log(todos);
console.log(users);


const todosWithUser = todos.map(todo => { // добавили в каждую todo нужного user
  return {
    ...todo,
    user: users.find(user => user.id === todo.userId)
  }
}
)

function App() { // в приложении передаём отфильтрованный массив TodoList
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList 
        todos={todosWithUser}
      />
    </div>
  );
}

export default App;
