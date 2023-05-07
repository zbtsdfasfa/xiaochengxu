import request from '../utils/request';
export function getDefaultText() {
    return uni.request({
        url:'https://www.fastmock.site/mock/b903dd8103cd55bfc6bd9e8006afc37f/shop-01/text'
    })
}

// 获取热搜文章热搜列表
export function getSearchHotList() {
    return uni.request({
        url:'https://www.fastmock.site/mock/b903dd8103cd55bfc6bd9e8006afc37f/shop-01/search/hot-list'
    })
}

// 获取搜索的结果
export function getSearchResult(data) {
    return uni.request({
        url:'https://www.fastmock.site/mock/b903dd8103cd55bfc6bd9e8006afc37f/shop-01/search',
        data
    })
}