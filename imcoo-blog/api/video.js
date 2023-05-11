// 热播视频接口
import request from '../utils/request'; 

export function getHotVideoList(data) {
    return uni.request({
        url: 'https://www.fastmock.site/mock/b903dd8103cd55bfc6bd9e8006afc37f/shop-01/video/list',
        data,
        method: 'GET',
    })
}