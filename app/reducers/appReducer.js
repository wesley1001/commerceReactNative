import Immutable from 'immutable'
import { APP } from '../constants'

const initialState = Immutable.fromJS({
  test:1
})

export default function appReducer(state=initialState, action={}){
  switch (action.type){
    case APP.TEST:
      return state.updateIn(['test'], value => 2)
    default:
      return state;
  }
}