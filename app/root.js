import React, {
  Navigator,
} from 'react-native'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux/native'
import AppView from './containers/AppView'

import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers);

export default class Root extends React.Component
{
  render(){
    return(
      <Provider store={store}>
        {()=><Navigator
          initialRoute={{name:'首页', index:0, component:AppView}}
          renderScene={(route, navigator)=>{
            const Component = route.component;
            return <Component route={route} navigator={navigator}/>
          }}
          />}
      </Provider>
    );
  }
}