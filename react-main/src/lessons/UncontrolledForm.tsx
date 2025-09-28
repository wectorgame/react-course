import React from 'react'

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props)

    this.cardRef = React.createRef()
    this.emailRef = React.createRef()
  }

  componentDidMount() {
    this.cardRef.current?.focus()
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (this.cardRef.current?.value.length < 16) {
      alert('Invalid card number')
      return
    }

    //send
    this.cardRef.current.value = ''
    this.emailRef.current.value = ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="card" ref={this.cardRef} />
        <input type="email" name="email" ref={this.emailRef} />
        <button type="submit">Send</button>
      </form>
    )
  }
}

export default UncontrolledForm
