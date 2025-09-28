import { useEffect, useState } from 'react'

export const State = () => {
  const [state, setState] = useState({ count: 0, isCounting: false })

  //   const [value, setValue] = useState(() => {
  //     const userCount = localStorage.getItem('count')
  //     return Number(userCount) || 0
  //   })

  const handleCount = () => {
    setState({ ...state, count: state.count + 1 })
  }

  const handleStatus = () => {
    setState({ ...state, isCounting: !state.isCounting })
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div>
      State
      <button onClick={handleCount}>Count</button>
      <button onClick={handleStatus}>Status</button>
    </div>
  )
}
