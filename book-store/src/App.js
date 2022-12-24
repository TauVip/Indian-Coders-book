import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import AddBook from './components/AddBook'
import BookDetail from './components/Book/BookDetail'
import Books from './components/Book/Books'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddBook />} />
          <Route path='/books' element={<Books />} />
          <Route path='/books/:id' element={<BookDetail />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </>
  )
}
export default App
