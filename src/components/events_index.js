import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { readEvents } from '../actions'

class EventsIndex extends Component {

  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event => {
      return (
        <tr key={ event.id }>
          <td>{ event.id }</td>
          <td>{ event.title}</td>
          <td>{ event.body }</td>
        </tr>
      )
    })
    
  }

  render(){
    const props = this.props
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          { this.renderEvents() }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
//   double: () => dispatch(double())
// })
const mapDispatchToProps = ({ readEvents })
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

