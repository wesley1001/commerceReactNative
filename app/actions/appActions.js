import types from '../constants'
import urls from '../assets/urls'

/**
 * 指定当前显示的资讯分类
 * @param menuId
 * @returns {{type: null, menuId: *}}
 */
export function setCurrentMenuId(menuId){
  return {
    type: types.SET_CURRENT_MENU_ID,
    menuId: menuId
  }
}

/**
 * 设置轮播图片
 * @param images
 * @returns {{type: null, images: *}}
 */
export function setSlideImages(images){
  return {
    type: types.SET_SLIDE_IMAGES,
    images:images
  }
}

/**
 * 重置资讯列表
 * @param menuId
 * @param data
 * @returns {{type: null, menuId: *, data: *}}
 */
export function setListData(menuId, data){
  return {
    type: types.SET_NEWS_LIST_DATA,
    menuId: menuId,
    data: data
  }
}

/**
 * 新增列表
 * @param menuId
 * @param data
 * @returns {{type: null, menuId: *, data: *}}
 */
export function pendingListData(menuId, data){
  return {
    type: types.PENDING_NEWS_LIST_DATA,
    menuId:menuId,
    data: data
  }
}

//获取资讯列表
export function fetchNewsList(menuId=1, page=1, perPage=5){
  //生成请求链接
  let url = urls.listUrl + `?menuId=${menuId}&page=${page}&perPage=${perPage}`;
  return (dispatch)=>{
    return new Promise((resolve, reject)=>{
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if(page==1){
            dispatch(setListData(menuId, data))
          }else{
            dispatch(pendingListData(menuId, data))
          }
          resolve(data)
        })
        .catch((error) => {
          console.error(error);
          reject(error)
        });
    })

  }
}

/**
 * 获取轮播图片数据
 * @returns {Function}
 */
export function fetchCarouselImages(){
  return (dispatch)=>{
    return fetch(urls.slideImagesUrl)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data)
        dispatch(setSlideImages(data))
      })
      .catch((error) => {
        console.error(error);
      });
  }
}