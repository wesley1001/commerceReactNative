import React,{
  View,
  Text,
  Image,
  ListView
} from 'react-native'
import style from './style'
import DetailView from '../../containers/DetailView'

export default class NewsList extends React.Component
{
  constructor(props){
    super(props)
    this.state = {
      loaded: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    }
  }
  componentWillReceiveProps(props){
    this.setState({dataSource: this.state.dataSource.cloneWithRows(props.newsList.lists)});
  }
  render(){
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        style={style.listView}
        />
    );
  }
  renderRow(item){
    return (
      <TouchableOpacity onPress={this._onPress.bind(this)}>
        <View style={style.container}>
          <Image style={style.thumb} source={{uri:item.img}}/>
          <View style={style.rightCon}>
            <Text style={style.title}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  _onPress(){
    this.navigator.push({name:'首页', index:0, component:App});
  }
}