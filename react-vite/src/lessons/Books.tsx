import { useContext } from 'react'
import { CustomContext } from './hooks/BookContext'
import { Book } from '../problems'

const Books = () => {
  const { books } = useContext(CustomContext)
  return (
    <div>
      Books
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </div>
  )
}

export default Books
