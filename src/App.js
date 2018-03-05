import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { increment, decrement } from './actions/counterActions'
import { bindActionCreators } from 'redux'

class App extends Component {
  render () {
    // console.log(this.props.increment())
    console.log()

    return (
      <div className='App'>
        <p>{this.props.counter.counter}</p>
        <button onClick={() => this.props.increment()}>INCREMENT</button>
        <button onClick={() => this.props.decrement()}>DECREMENT</button>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    counter: state
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      increment,
      decrement
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
