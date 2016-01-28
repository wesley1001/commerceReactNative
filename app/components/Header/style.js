import { StyleSheet } from 'react-native'

const h = 56;

const style = StyleSheet.create({
  header:{
    height: h,
    backgroundColor: '#a5cb13',
    flexDirection:'row',
    alignItems:'center'
  },
  btn:{
    height:h,
    width:h,
    justifyContent:'center',
    alignItems:'center',
    //backgroundColor:'rgba(0,0,0,0.5)'
  },
  left:{
    width:230,
    flexDirection:'row'
  },
  right:{
    //alignSelf:'flex-end',
    flexDirection:'row',
    flex:1,
    justifyContent:'flex-end',
  },
  ar:{
    height:h,
    width:h,
    justifyContent:'center',
    alignItems:'center',
  },
  btn_menu:{

  },
  btn_icon:{
    width: 32,
    height:32
  },
  menu_txt:{
    ///alignSelf:'flex-start',
    height:h,
    justifyContent:'center',

  },
  headerText: {
    fontSize:16,
    color:'white',
    fontWeight:'600'
  }
});

export default style;