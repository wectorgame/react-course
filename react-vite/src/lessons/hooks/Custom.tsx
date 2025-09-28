import { useLocalStorage } from './useLocalStorage'
import { usePrevious } from './usePrevious'

export const Custom = () => {
  const [count, setCount] = useLocalStorage(0, 'key2')

  const prevCount = usePrevious(count)

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Update</button>
      <h2>Current: {count}</h2>
      <h2>Previous: {prevCount}</h2>
    </div>
  )
}
