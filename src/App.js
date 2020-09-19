import React, { Component } from 'react';
const App = () => (<Counter></Counter>)

class Counter extends Component {

  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  clickPlusButton = () => {
    this.setState({ count: this.state.count + 1})
  }

  clickMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  clickMultiButton = () => {
    this.setState({ count: this.state.count * 2})
  }

  render(){
    return (
      <React.Fragment>        
        <div>Counter: { this.state.count }</div>
        <button onClick={this.clickPlusButton}>+1</button>
        <button onClick={this.clickMinusButton}>-1</button>
        <button onClick={this.clickMultiButton}>x2</button>
      </React.Fragment>
    )
  }
}

export default App;

