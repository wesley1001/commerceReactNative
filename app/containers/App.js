import React,{
  View,
  Text,
} from 'react-native'
import {connect} from 'react-redux/native'
import {bindActionCreators} from 'redux'

import {Header} from '../components'

import * as actionCreators from '../actions'
import styles from '../assets/styles'

const mapStateToProps = state => {
  return {
    test: state.appReducer.get('test')
  }
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

class App extends React.Component
{
  componentDidMount(){
    console.log(this)
  }
  render(){
    return(
      <View style={styles.container}>
        <Header />
        <View style={{backgroundColor:'#ccc',flex:1}}>
          <Text>Hello{this.props.test}</Text>
        </View>

      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);