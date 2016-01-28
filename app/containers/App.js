import React,{
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native'
import {connect} from 'react-redux/native'
import {bindActionCreators} from 'redux'

import {
  Header,
  MainCarousel,
  NewsList,
} from '../components'

import * as actionCreators from '../actions'
import styles from '../assets/styles'

const mapStateToProps = state => {
  const id = state.appReducer.get('currentMenuId');
  let newsList = state.appReducer.get('newsList_' + id);
  newsList = typeof newsList==='undefined'?{
    page:1,perPage:5,lists:[]
  }: newsList.toJS();

  return {
    test: state.appReducer.get('test'),
    currentMenuId: id,
    carouselImages: state.appReducer.get('carouselImages').toJS(),
    newsList:newsList
  }
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

class App extends React.Component
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
  }
  componentDidMount(){
    //console.log(this)
  }
  render(){
    const rows = this.state.rowData.map((row, ii) => {
      return <Text key={ii}>{row.text}</Text>;
    });

    return(
      <View style={styles.container}>
        <Header />
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

          <MainCarousel items={this.props.carouselImages}/>
          <Text style={styles.hotRecommend}>热门推荐</Text>

          <NewsList
            newsList={this.props.newsList}
            route={this.props.route}
            navigator={this.props.navigator}
            />

        </ScrollView>
      </View>
    );
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
}

export default connect(mapStateToProps, mapDispatchToProps)(App);