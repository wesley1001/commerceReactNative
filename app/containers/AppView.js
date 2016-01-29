import React,{
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native'
import {connect} from 'react-redux/native'
import {bindActionCreators} from 'redux'
import Drawer from 'react-native-drawer'

import {
  Header,
  MainCarousel,
  NewsList,
  DrawerContent,
} from '../components'

import actionCreators from '../actions'
import styles from '../assets/styles'

const mapStateToProps = state => {
  const id = state.appReducer.get('currentMenuId');
  let newsList = state.appReducer.get('newsList_' + id);
  newsList = typeof newsList==='undefined'?{
    page:1,perPage:5,list:[]
  }: newsList.toJS();

  return {
    currentMenuId: id,
    menuItems:state.appReducer.get('menuItems').toJS(),
    carouselImages: state.appReducer.get('carouselImages').toJS(),
    newsList:newsList
  }
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

/**
 * 主视图
 */
class AppView extends React.Component
{
  constructor(props){
    super(props)
    this.state = {
      isRefreshing: false,
      loadingTitle: '下拉刷新',
      loaded: 0,
      rowData: Array.from(new Array(20)).map(
        (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
    }

    //初始化数据请求
    props.actions.fetchCarouselImages()
    props.actions.fetchNewsList(props.currentMenuId, 1, props.newsList.perPage)
  }
  componentDidMount(){
    //console.log(this)
  }
  componentWillReceiveProps(props){
    //菜单切换并且当前没有数据
    if(this.props.currentMenuId != props.currentMenuId
      && props.newsList.list.length==0
    ){
      props.actions.fetchNewsList(props.currentMenuId, 1, props.newsList.perPage)
    }
  }
  render(){

    return(
      <Drawer
        ref="drawer"
        type="overlay"
        openDrawerOffset={0}
        tapToClose={true}
        content={<DrawerContent
          currentMenuId={this.props.currentMenuId}
          menuItems={this.props.menuItems}
          closeDrawer={this.closeDrawer.bind(this)}
          setCurrentMenuId={this.props.actions.setCurrentMenuId}
          />}
        >
        <View style={styles.container}>
          <Header
            openDrawer={this.openDrawer.bind(this)}
            currentMenuId={this.props.currentMenuId}
            menuItems={this.props.menuItems}
            />
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this._onRefresh.bind(this)}
                tintColor="#ff0000"
                title={this.state.loadingTitle}
                colors={['#ff0000', '#00ff00', '#0000ff']}
                progressBackgroundColor="#ffff00"
              />
            }
            >

            {this.getFirstPageContent()}

            <NewsList
              newsList={this.props.newsList}
              route={this.props.route}
              navigator={this.props.navigator}
              />

          </ScrollView>
        </View>
      </Drawer>
    );
  }
  //首页 图片片轮播和热门推荐标题
  getFirstPageContent(){
    if(this.props.currentMenuId == 1){
      return (
        <View>
          <MainCarousel
            items={this.props.carouselImages}
            navigator={this.props.navigator}
            />
          <Text style={styles.hotRecommend}>热门推荐</Text>
        </View>
      )
    }
    return <View style={{height:10}}></View>
  }
  _onRefresh() {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      // prepend 10 items
      const rowData = Array.from(new Array(10))
        .map((val, i) => ({
          text: 'Loaded row ' + (+this.state.loaded + i),
          clicks: 0,
        }))
        .concat(this.state.rowData);

      this.setState({
        loaded: this.state.loaded + 10,
        isRefreshing: false,
        rowData: rowData,
      });
    }, 3000);
  }
  openDrawer(){
    this.refs.drawer.open();
  }
  closeDrawer(){
    this.refs.drawer.close();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);