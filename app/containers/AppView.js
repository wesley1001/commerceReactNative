import React,{
  View,
  Text,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native'
import {connect} from 'react-redux/native'
import {bindActionCreators} from 'redux'
import Drawer from 'react-native-drawer'
import Dimensions from 'Dimensions'

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
      wheight: Dimensions.get('window').height,
      isRefreshing: false,
      loadingTitle: '下拉刷新',
      canLoading:true,
    }

    //初始化数据请求
    props.actions.fetchCarouselImages()
    props.actions.fetchNewsList(props.currentMenuId, 1, props.newsList.perPage)
      .then((data)=>1)
      .catch(error=>console.log(error))
  }
  componentDidMount(){
    //console.log(this)
  }
  componentWillReceiveProps(props){
    let {currentMenuId, newsList} = props;
    //菜单切换并且当前没有数据
    if(this.props.currentMenuId != currentMenuId && newsList.list.length==0 ){
      props.actions.fetchNewsList(currentMenuId, 1, newsList.perPage)
        .then((data)=>1)
        .catch(error=>console.log(error))
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
            ref="scrollView"
            onScroll={this.onScroll.bind(this)}
            scrollEventThrottle={200}
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
  onScroll(e){
    let h = this.state.wheight;
    let contentHeight = e.nativeEvent.contentSize.height;
    //当前位置
    let offsetY = e.nativeEvent.contentOffset.y;
    //最大偏移量
    let maxScroll = contentHeight-h+20+56 - 20;
    if(offsetY>maxScroll && this.state.canLoading){
      this.setState({canLoading:false})
      this.loadingMore();
    }
  }
  //下拉刷新处理
  _onRefresh() {
    let {currentMenuId, newsList} = this.props;
    this.setState({isRefreshing: true});
    //更新资讯
    this.props.actions.fetchNewsList(currentMenuId, 1, newsList.perPage)
      .then((data)=>{
        //console.log(this)
        this.setState({isRefreshing: false});
      })
      .catch(error=>console.log(error))
  }
  //加载更多处理
  loadingMore(){
    let {currentMenuId, newsList} = this.props;
    this.props.actions.fetchNewsList(currentMenuId, newsList.page, newsList.perPage)
      .then((data)=>{
        //console.log(this)
        this.setState({canLoading: true});
      })
      .catch(error=>console.log(error))
  }
  openDrawer(){
    this.refs.drawer.open();
  }
  closeDrawer(){
    this.refs.drawer.close();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);