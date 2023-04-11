import { useContext } from 'react'
import { TodoContext } from '../context/todo'
import '../styles/todo.css'

export function Todo ({ todo }) {
  const { todos, setTodos } = useContext(TodoContext)
  const { handleCompletedTodos, handleRemoveTodo } = useContext(TodoContext)

  const onChangeInput = ({ evt, id }) => {
    const { name, value } = evt.target
    const editData = todos.map((todo) => todo.id === id && name ? { ...todo, [name]: value } : todo)
    setTodos(editData)
  }

  return (
    <div className='todo'>
      <input
        className='toggle'
        checked={todo.completed}
        type='checkbox'
        onChange={(evt) => handleCompletedTodos({ id: todo.id, evt })}
      />

      <label>
        <input
          className={`todo-title ${todo.completed ? 'completed' : ''}`}
          name='title'
          value={todo.title}
          onChange={(evt) => onChangeInput({ evt, id: todo.id })}
        />
      </label>

      <button className='remove-todo' onClick={() => handleRemoveTodo({ id: todo.id })}>
        ❌
      </button>
    </div>
  )
}
