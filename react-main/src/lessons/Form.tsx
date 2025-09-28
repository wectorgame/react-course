import React from 'react'

class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    gender: '',
    isSubscribtion: false,
    select: '',
  }

  handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.checked })
  }

  validateName = () => {
    if (this.state.firstName.length < 5) {
      alert('First Name must be at least 5 characters')
    }
  }

  validateEmail = () => {
    if (
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(this.state.email)
    ) {
      alert('Email must be a valid email')
    }
  }

  validateLastName = () => {
    if (this.state.lastName.length < 5) {
      alert('Last Name must be at least 5 characters')
    }
  }

  render() {
    const { firstName, lastName, email, message, isSubscribtion, select } =
      this.state

    return (
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={this.handleChange}
        />
        <br />
        <select name="select" value={select} onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <br />
        <label>
          Subscribtion
          <input
            type="checkbox"
            name="isSubscribtion"
            checked={isSubscribtion}
            onChange={this.handleCheckboxChange}
          />
        </label>
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={this.handleChange}
        />{' '}
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={this.handleChange}
        />{' '}
        Female
      </div>
    )
  }
}

export default Form
