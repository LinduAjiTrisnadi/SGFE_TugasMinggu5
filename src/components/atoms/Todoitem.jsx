import React from 'react'
import Button from '../Button'
import { FaTrash } from 'react-icons/fa'

export default function Todoitem({sortedTodo,deleteTodo }) {
  return (
    <ul id='todo-list' className='todo-list'>
      {sortedTodo.map((element,index) => {
        return(
          <li key={index}>
            <span>
              <b>{element.id}</b> {element.deskripsi}
            </span>
            <Button variant='danger'onClick={()=> deleteTodo(element.id)} >
              <FaTrash />
            </Button>
          </li>
        )
      })}
    </ul>
  )
}
