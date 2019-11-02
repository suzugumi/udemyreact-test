import _ from 'lodash'
import { 
  READ_EVENTS,
  CREATE_EVENT,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
 } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      console.log(action.response.data)
      const data = action.response.data
      return { ...events, [data.id]:data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
      case DELETE_EVENT:
        delete events[action.id]
        return { ...events }
    default: 
    return events
  }
}