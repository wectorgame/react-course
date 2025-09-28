import React, { useState, useRef, useImperativeHandle } from 'react'
import './styles.css'

export const ImperativeHandle = () => {
  return (
    <div className="App">
      <Form />
    </div>
  )
}

interface InputRef {
  focus(): void
}

const TextInput = React.forwardRef<
  InputRef,
  {
    hasError: boolean
    placeholder: string
    value: string
    update: (value: string) => void
  }
>((props, ref) => {
  const { hasError, placeholder, value, update } = props
  console.log(update)
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, (): InputRef => {
    return {
      focus() {
        inputRef.current?.focus()
      },
    }
  })

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => update(e.target.value)}
      placeholder={placeholder}
      style={{
        borderColor: hasError ? 'red' : 'black',
      }}
    />
  )
})

const Form = () => {
  const [card, setCard] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  const cardEl = useRef<HTMLInputElement>(null) // current = {focus() {}}
  const phoneEl = useRef<HTMLInputElement>(null)

  const validate = () => {
    if (card.length < 16) {
      setError('card')
      cardEl.current?.focus() // метод пришел снизу
      return
    }

    if (phone.length < 11) {
      setError('phone')
      phoneEl.current?.focus()
      return
    }
    setError('')
  }

  return (
    <div>
      <h2>useImperativeHandle hook</h2>
      <TextInput
        hasError={error === 'card'}
        placeholder={'Card'}
        ref={cardEl}
        value={card}
        update={setCard}
      />
      <TextInput
        hasError={error === 'phone'}
        placeholder={'Phone'}
        value={phone}
        update={setPhone}
        ref={phoneEl}
      />
      <button onClick={validate}>Validate</button>
    </div>
  )
}
