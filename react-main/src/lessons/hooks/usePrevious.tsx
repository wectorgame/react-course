import { useRef, useEffect } from 'react'

function usePrevious(value) {
  const ref = useRef() // {current: null}

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

export { usePrevious }
