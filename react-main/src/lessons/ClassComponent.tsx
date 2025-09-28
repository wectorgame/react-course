import React from 'react'
import { Counter, Posts, Preloader } from '../problems'

interface State {
  posts: { id: string; title: string; body: string }[]
  isLoading: boolean
  comments: any[]
}

class ClassComponent extends React.Component<{}, State> {
  state = {
    posts: [],
    isLoading: true,
    comments: [],
  }

  timerId: number | undefined

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data, isLoading: false }))

    // this.timerId = setInterval(() => {
    //   fetch('https://jsonplaceholder.typicode.com/comments')
    //     .then((response) => response.json())
    //     .then((data) => this.setState({ comments: data }))
    // }, 3000)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.timerId)
  }

  handleDeletePost = (id: string) => {
    this.setState((prevState) => ({
      posts: prevState.posts.filter((post) => post.id !== id),
    }))
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <Counter />

        {this.state.isLoading ? (
          <Preloader />
        ) : (
          <h3>{this.state.posts.length} was loaded</h3>
        )}

        {this.state.posts.length > 0 ? (
          <Posts
            posts={[this.state.posts[0], this.state.posts[1]]}
            handleDeletePost={this.handleDeletePost}
          />
        ) : (
          <Preloader />
        )}
      </div>
    )
  }
}

export default ClassComponent
