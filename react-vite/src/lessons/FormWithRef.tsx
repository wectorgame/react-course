import React from 'react'

class FormWithRef extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      card: '',
    }

    this.cardRef = React.createRef()
    this.emailRef = React.createRef()
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      () => ({ [e.target.name]: e.target.value }),
      () => {
        if (this.state.card.length === 16) {
          this.emailRef.current?.focus()
        }
      }
    )
  }
  componentDidMount() {
    this.cardRef.current?.focus()
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="card"
          ref={this.cardRef}
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="email"
          ref={this.emailRef}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default FormWithRef
