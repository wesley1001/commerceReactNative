import {StyleSheet, Platform} from 'react-native'

var style = StyleSheet.create({
  container:{
    height:Platform.OS == 'ios' ? 20 : 0,
    backgroundColor:'#a5cb13'
  }
})

export default style;