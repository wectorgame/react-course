import { useEffect, useState } from 'react'

function useLocalStorage(initialState: number, key: string) {
  const get = () => {
    const storage = localStorage.getItem(key)

    return storage ? +storage : initialState
  }

  const [value, setValue] = useState(get)

  useEffect(() => {
    localStorage.setItem(key, value.toString())
  }, [value, key])

  return [value, setValue]
}

export { useLocalStorage }
