import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters ({ todos }) {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterTodos = ({ todos }) => {
    if (filters === 'all') {
      return todos
    }
    if (filters === 'active') {
      const filtered = todos.filter(todo => !todo.completed)
      return filtered
    }
    if (filters === 'completed') {
      const filtered = todos.filter(todo => todo.completed)
      return filtered
    }
  }

  const filteredTodos = filterTodos({ todos })

  return { filters, filterTodos, filteredTodos, setFilters }
}
