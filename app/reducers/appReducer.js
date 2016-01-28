import Immutable from 'immutable'
import types from '../constants'

const surl = 'http://192.168.102.244/redux/commerce/src/images/muwu.jpg'

//carouselImages:[
//  {id:1,img:surl,href:'',title:''},
//],

//newsList_x:{page:1,perPage:5,
//  lists:[{
//    id:1,
//    img:'',
//    title:'',
//    des:""
//  }
//]}



const initialState = Immutable.fromJS({
  test:1,
  //当前菜单ID
  currentMenuId:1,
  //轮播图片
  carouselImages:[
    {id:1,img:surl,href:'',title:'我们都不想当炮灰..但炮灰还可以这样'},
    {id:1,img:surl,href:'',title:'银行的人看哭了这些都是媒体对银行的误读'},
    {id:1,img:surl,href:'',title:'昨晚被玩出花样的微信红包照片功能这个值得看'}
  ],
  //ID对应资讯列表
  newsList_1:{page:1,perPage:5, lists:[
    {
      id:1,img:surl,
      title:'务会议解读：扩大跨境电子商务综合读：扩大跨境电子商务综合读：扩大跨境电子商务综合读：扩大跨境电子商务综合试点 赢得外贸新优势',
      des:"6日召开的国务院常务会议决定，将先行试点的中国（杭州）跨境电子商务综合试验区初步探索出的相关政策体系和管理制度，向更大范围推广。"
    },
    {
      id:1,img:surl,
      title:'务会议解读：扩大跨境电子商务综合试点 赢得外贸新优势',
      des:"6日召开的国务院常务会议决定，将先行试点的中国（杭州）跨境电子商务综合试验区初步探索出的相关政策体系和管理制度，向更大范围推广。"
    },
    {
      id:1,img:surl,
      title:'务会议解读：扩大跨境电子商务综合试点 赢得外贸新优势',
      des:"6日召开的国务院常务会议决定，将先行试点的中国（杭州）跨境电子商务综合试验区初步探索出的相关政策体系和管理制度，向更大范围推广。"
    },
    {
      id:1,img:surl,
      title:'务会议解读：扩大跨境电子商务综合试点 赢得外贸新优势',
      des:"6日召开的国务院常务会议决定，将先行试点的中国（杭州）跨境电子商务综合试验区初步探索出的相关政策体系和管理制度，向更大范围推广。"
    },
    {
      id:1,img:surl,
      title:'务会议解读：扩大跨境电子商务综合试点 赢得外贸新优势',
      des:"6日召开的国务院常务会议决定，将先行试点的中国（杭州）跨境电子商务综合试验区初步探索出的相关政策体系和管理制度，向更大范围推广。"
    },
    {
      id:1,img:surl,
      title:'务会议解读：扩大跨境电子商务综合试点 赢得外贸新优势',
      des:"6日召开的国务院常务会议决定，将先行试点的中国（杭州）跨境电子商务综合试验区初步探索出的相关政策体系和管理制度，向更大范围推广。"
    }
  ]}
})

export default function appReducer(state=initialState, action={}){
  switch (action.type){
    case types.TEST:
      return state.updateIn(['test'], value => 2)
    default:
      return state;
  }
}