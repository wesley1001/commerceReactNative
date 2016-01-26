import Immutable from 'immutable'
import types from '../constants'

const initialState = Immutable.fromJS({
  test:1
})

export default function appReducer(state=initialState, action={}){
  switch (action.type){
    case types.TEST:
      return state.updateIn(['test'], value => 2)
    default:
      return state;
  }
}