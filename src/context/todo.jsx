import { createContext, useState } from 'react'

export const TodoContext = createContext()

export function TodoProvider ({ children }) {
  const [todos, setTodos] = useState([])

  const handleRemoveTodo = ({ id }) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }) => {
    const newTodo = {
      id: window.crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const handleCompletedTodos = ({ id, evt }) => {
    const completed = evt.target.checked
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
      handleAddTodo,
      handleRemoveTodo,
      handleCompletedTodos
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}
