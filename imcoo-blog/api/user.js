import store from '../store'
// 用户登陆的接口
import request from '../utils/request';
export function login(data) {
    return uni.request({
        url:'https://www.fastmock.site/mock/b903dd8103cd55bfc6bd9e8006afc37f/shop-01/sys/login',
        method:'POST',
        data
    })
}


// 获取用户是否关注
export function userFollow(data) {
    return uni.request ({
        url:'https://www.fastmock.site/mock/b903dd8103cd55bfc6bd9e8006afc37f/shop-01/user/follow',
        data,
        headers:{
            Authorization: store.state.user.token
        }
    })
}