import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  header:{
    height: 56,
    backgroundColor: '#a5cb13',
  },
  inner:{
    flex:1,
    //alignItems:'flex-start'
    flexDirection:'row'
  },
  btn:{
    width:56,
    height:56,
  },
  btn_icon:{
    width: 32,
    height:32
  },
  menu_txt:{
    ///alignSelf:'flex-start',
    height:56,
    width:100,
    justifyContent:'center'
  }
});

export default style;