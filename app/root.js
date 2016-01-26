import React from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux/native'
import App from './containers/App'

import reducers from './reducers'

const store = createStore(reducers);

export default class Root extends React.Component
{
  render(){
    return(
      <Provider store={store}>
        {()=><App/>}
      </Provider>
    );
  }
}