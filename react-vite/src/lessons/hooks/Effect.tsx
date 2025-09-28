import { useEffect } from 'react'

const Effect = () => {
  useEffect(() => {
    const handler = () => {}

    document.addEventListener('click', handler)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

  useEffect(function initPlugin() {
    console.log('initPlugin')
  }, [])

  return <div>Effect</div>
}

export default Effect
