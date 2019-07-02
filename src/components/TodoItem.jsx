import React from 'react'
import User from './User'

function TodoItem(props) { // печатаем полученную информацию
  return (                 // и передаём имя для user, который его напечатает
    <li>
      <input type="checkbox" checked={props.todo.completed}/>
      <div>{props.todo.title}</div>
      <User user={props.todo.user} />
    </li>
  )
};

export default TodoItem