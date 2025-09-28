import { useState } from 'react'
import { CustomContext } from './BookContext'

export const Context = ({ children }: { children: React.ReactNode }) => {
  const [books, setBooks] = useState([
    { id: 1, name: 'JS', price: 100 },
    { id: 2, name: 'React', price: 200 },
    { id: 3, name: 'NodeJS', price: 300 },
  ])

  const addBook = (book) => {
    setBooks([...books, book])
  }

  const removeBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  const value = {
    books,
    addBook,
    removeBook,
  }

  return (
    <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
  )
}
