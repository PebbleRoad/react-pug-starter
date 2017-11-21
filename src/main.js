// Load app style
import '@/styles/app.scss'
import 'bootstrap'

// Scripts
import './scripts'
import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      text:''
    }
  }
  render () {
    return (
      <div class='component'>
        <p>Heya - {this.state.text}</p>
        <input type='text' onChange={(event) => this.setState({ text: event.target.value})} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
