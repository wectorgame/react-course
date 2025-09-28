import { useContext } from 'react'
import { CustomContext } from '../lessons/hooks/BookContext'

const Book = ({ id, name, price, children }) => {
  const { removeBook } = useContext(CustomContext)

  return (
    <div>
      <h2 onClick={() => removeBook(id)}>Hello, {name ? name : 'Unknown'}</h2>
      <p>{price}</p>
      {children}
    </div>
  )
}

export default Book
