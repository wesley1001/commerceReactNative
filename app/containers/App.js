import React,{
  View,
  Text,
} from 'react-native'
import {connect} from 'react-redux/native'
import {bindActionCreators} from 'redux'

import * as actionCreators from '../actions'

const mapStateToProps = state => {
  return {

  }
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

class App extends React.Component
{
  render(){
    return(
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);