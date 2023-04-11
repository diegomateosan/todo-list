import '../styles/filters.css'
import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function Filters () {
  const { setFilters } = useContext(FiltersContext)

  return (
    <section className='todo-filters'>
      <button className='todo-filter todo-filter-all' onClick={() => setFilters('all')}>Todos</button>
      <button className='todo-filter todo-filter-active' onClick={() => setFilters('active')}>Activos</button>
      <button className='todo-filter todo-filter-completed' onClick={() => setFilters('completed')}>Completados</button>
    </section>
  )
}
