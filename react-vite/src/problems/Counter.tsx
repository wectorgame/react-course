import React from 'react'

class Counter extends React.Component<
  {},
  { count: number; isCounting: boolean }
> {
  timerId: number | undefined

  state = {
    count: 0,
    isCounting: false,
  }

  //   this.handleSub = this.handleSub.bind(this)

  handleStopTimer = () => {
    clearInterval(this.timerId)
    this.setState({ isCounting: false })
  }

  handleClearTimer = () => {
    localStorage.removeItem('count')
    this.setState({ count: 0 })
    this.handleStopTimer()
  }

  handleStartTimer = () => {
    this.timerId = setInterval(() => {
      this.handleIncrement()
    }, 1000)
    this.setState({ isCounting: true })
  }

  componentDidMount(): void {
    this.setState({ count: Number(localStorage.getItem('count')) || 0 })
  }

  componentDidUpdate(): void {
    localStorage.setItem('count', this.state.count.toString())
  }

  componentWillUnmount(): void {
    this.handleStopTimer()
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }
  handleDecrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }))
  }

  render() {
    return (
      <>
        {this.state.isCounting ? (
          <button onClick={this.handleStopTimer}>Stop</button>
        ) : (
          <button onClick={this.handleStartTimer}>Start</button>
        )}

        <button onClick={this.handleClearTimer}>Clear</button>
        <button onClick={() => this.handleDecrement()}>-</button>
        <span style={{ margin: '0 10px' }}>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </>
    )
  }
}

export default Counter
