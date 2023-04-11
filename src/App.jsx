
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Todos } from './components/Todos'

export function App () {
  return (
    <div className='card-todo'>
      <Header />
      <Todos />
      <Footer />
    </div>
  )
}

export default App
