import { useContext, useState } from 'react'
import { TodoContext } from '../context/todo'
import '../styles/header.css'

export function Header () {
  const [inputValue, setInputValue] = useState('')
  const { handleAddTodo } = useContext(TodoContext)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    handleAddTodo({ title: inputValue })
    setInputValue('')
  }

  const handleChange = (evt) => {
    const newTodo = evt.target.value
    setInputValue(newTodo)
  }

  return (
    <form className='todo-header' onSubmit={handleSubmit}>
      <h1 className='todo-header-title'>Todo App</h1>
      <input
        className='new-todo'
        value={inputValue}
        type='text'
        onChange={handleChange}
        placeholder='¿Qué quieres hacer?'
        autoFocus
      />
    </form>
  )
}
