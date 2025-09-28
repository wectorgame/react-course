import React, { useEffect, useRef, useReducer } from 'react'

const countReducer = (
  state: { count: number; isCounting: boolean },
  { type, payload }: { type: string; payload?: number }
) => {
  switch (type) {
    case 'SET':
      return {
        ...state,
        count: payload ?? 0,
      }
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'CLEAR':
      return {
        count: 0,
        isCounting: false,
      }
    case 'START':
      return {
        count: state.count + 1,
        isCounting: true,
      }
    case 'STOP':
      return {
        ...state,
        isCounting: false,
      }
    default:
      return state
  }
}

const FuncCounter: React.FC = () => {
  const [{ count, isCounting }, dispatch] = useReducer(countReducer, {
    count: 0,
    isCounting: false,
  })

  const timerId = useRef<number | undefined>(undefined)

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const handleStopTimer = () => {
    if (timerId.current) {
      clearInterval(timerId.current)
      timerId.current = undefined
    }
    dispatch({ type: 'STOP' })
  }

  const handleClearTimer = () => {
    dispatch({ type: 'CLEAR' })
    handleStopTimer()
  }

  const handleStartTimer = () => {
    timerId.current = setInterval(() => {
      dispatch({ type: 'INCREMENT' })
    }, 1000)
    dispatch({ type: 'START' })
  }

  useEffect(() => {
    const savedCount = localStorage.getItem('count')
    if (savedCount) {
      dispatch({ type: 'SET', payload: Number(savedCount) })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('count', count.toString())
  }, [count])

  useEffect(() => {
    return () => {
      handleStopTimer()
    }
  }, [])

  return (
    <>
      {isCounting ? (
        <button onClick={handleStopTimer}>Stop</button>
      ) : (
        <button onClick={handleStartTimer}>Start</button>
      )}

      <button onClick={handleClearTimer}>Clear</button>
      <button onClick={handleDecrement}>-</button>
      <span style={{ display: 'inline-block', margin: '0 0.5rem' }}>
        {count}
      </span>
      <button onClick={handleIncrement}>+</button>
    </>
  )
}

export default FuncCounter
