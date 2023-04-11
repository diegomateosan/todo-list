import '../styles/footer.css'
import { useContext } from 'react'
import { TodoContext } from '../context/todo'
import { Filters } from './Filters'

export function Footer () {
  const { todos } = useContext(TodoContext)
  const activesTodos = todos.filter(todo => !todo.completed).length
  return (
    <div className='todo-footer'>
      <p className='activeTodos'>{activesTodos} tareas por hacer</p>
      <Filters />
    </div>
  )
}
