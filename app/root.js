import React, {
  Navigator,
} from 'react-native'
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
        {()=><Navigator
          initialRoute={{name:'首页', index:0, component:App}}
          renderScene={(route, navigator)=>{
            const Component = route.component;
            return <Component route={route} navigator={navigator}/>
          }}
          />}
      </Provider>
    );
  }
}