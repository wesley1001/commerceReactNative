import React,{
  View,
  Text,
  WebView,
} from 'react-native'
import {connect} from 'react-redux/native'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions'

import {
  DetailHeader,
  StatusBar,
} from '../components'

import styles from '../assets/styles'

function mapStateToProps(state){
  return {

  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

/**
 * 内容视图
 */
class DetailView extends React.Component
{

  render(){
    return(
      <View style={styles.container}>
        <StatusBar />
        <DetailHeader
          route={this.props.route}
          navigator={this.props.navigator}
          />

        <WebView
          automaticallyAdjustContentInsets={true}
          style={styles.webView}
          url={this.props.route.href}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={false}
          scalesPageToFit={false}
          />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);