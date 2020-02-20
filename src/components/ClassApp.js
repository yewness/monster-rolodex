import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      string: 'Hello world',
    }
  }

  render() {
    return (
      <div>
        <div className="hello">{this.state.string}</div>
        <button onClick={() => this.setState({ string: 'hello there' })}>
          Change here
        </button>
      </div>
    )
  }
}

export default App
