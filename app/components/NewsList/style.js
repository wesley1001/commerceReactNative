import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
  listView:{
    marginLeft:8,
    marginRight:8,
  },
  container:{
    padding:10,
    backgroundColor:'white',
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
    borderRadius:5
  },
  thumb:{
    width:100,
    height:75
  },
  rightCon:{
    flex:1,
    marginLeft:10
  },
  title:{
    fontSize:20,
    height:70,
    overflow:'hidden',
    marginBottom:8,
    marginTop:5,
    lineHeight:23,
    textAlign:'auto',
    color:'#333'
  },
  des:{

  },
  footer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:40,
  },
  footer_icon:{
    width:20,
    height:20
  },
  footer_txt:{
    fontSize:14,
    color:'#999',
    marginLeft:10,
  }
});

export default style;