import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Book from './'
import './Book.css'

const URL = 'http://localhost:5000/books'

const fetchHandler = async () => await axios.get(URL).then(res => res.data)

const Books = () => {
  const history = useNavigate()

  const [books, setBooks] = useState(null)

  useEffect(() => {
    fetchHandler().then(data => setBooks(data.books))
  }, [history])

  return (
    <div>
      <ul>
        {books?.map((book, i) => (
          <li className='book' key={i}>
            <Book book={book} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Books
