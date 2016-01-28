import React, {
  View,
  Text,
  Image
} from 'react-native'

import icons from '../../assets/icons'
import styles from '../../assets/styles'
import style from './style'

export default class Header extends React.Component
{
  render(){
    return(
      <View style={[style.header]}>
        <View style={{flex:1,flexDirection:'row'}}>
          <View style={[style.btn, style.btn_menu]}>
            <Image style={style.btn_icon} source={{uri:icons.three_line_menu}}/>
          </View>
          <View style={style.menu_txt}>
            <Text style={style.headerText}>首页</Text>
          </View>
          <View style={style.right}>
            <View style={[style.btn_menu, style.ar]}>
              <Image style={style.btn_icon} source={{uri:icons.bell}}/>
            </View>
            <View style={[style.btn_menu, style.ar]}>
              <Image style={style.btn_icon} source={{uri:icons.three_circle_menu}}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}