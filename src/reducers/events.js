import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (state = {}, action) => {
  // console.log(action)
  // // console.log(_.mapKeys(action.response.data, 'id'))
  // console.log(action.response)
  switch (action.type){
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return state
  }
}