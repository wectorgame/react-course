import React from 'react'

export default class App extends React.Component {
  state = {
    email: '',
    isAgreeWithTerms: false,
  }

  handleSend = () => {
    if (
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(this.state.email)
    ) {
      alert('Email must be a valid email')
      return
    }

    if (!this.state.isAgreeWithTerms) {
      alert('You must agree with terms and conditions')
      return
    }

    alert('Great!')
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.checked })
  }

  render() {
    const { email, isAgreeWithTerms } = this.state

    return (
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isAgreeWithTerms"
            checked={isAgreeWithTerms}
            onChange={this.handleCheckboxChange}
          />
          I agree with terms and conditions
        </label>
        <br />
        <button onClick={this.handleSend}>Send</button>
      </div>
    )
  }
}
