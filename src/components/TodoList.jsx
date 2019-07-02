import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) { // для todo item передаёт по одной todo
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem 
          todo={todo}
        />
      ))}
    </ul>
  )
};

export default TodoList