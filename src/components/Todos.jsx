import '../styles/todos.css'
import { Todo } from './Todo'
import { useContext, useEffect } from 'react'
import { TodoContext } from '../context/todo'
import todosList from '../mocks/todos.json'
import { useFilters } from '../hooks/useFilters'

export function Todos () {
  const { todos, setTodos } = useContext(TodoContext)

  useEffect(() => {
    setTodos(todosList)
  }, [])

  const { filteredTodos } = useFilters({ todos })

  return (
    <ul className='todo-list'>
      {filteredTodos.map(todo => {
        return (
          <li
            key={todo.id}
          >
            <Todo
              todo={todo}
            />
          </li>
        )
      }
      )}
    </ul>
  )
}
