import {StyleSheet} from 'react-native'
import Dimensions from 'Dimensions'

const w = Dimensions.get('window').width
const h = 200

const style = StyleSheet.create({
  container:{
    width:w,
    height:h,
    backgroundColor:'rgba(0,0,0,0.3)'
  },
  image:{
    width:w,
    height:h,
  },
  txtw:{
    position:'absolute',
    bottom:20,
    left:0,
    paddingLeft:15,
    paddingRight:15,
    justifyContent:'center',
  },
  txt:{
    fontSize:22,
    color:'#fff'
  }
});

export default style;