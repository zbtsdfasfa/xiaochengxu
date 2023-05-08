// 获取文章详情数据
import request from '../utils/request';

export  function getArticleDetail(data) {
    return uni.request({
        url:'https://www.fastmock.site/mock/b903dd8103cd55bfc6bd9e8006afc37f/shop-01/article/details',
        data
    })
}


// 获取文章评论的接口
export  function getArticleCommentList(data) {
    return uni.request({
        url:'https://www.fastmock.site/mock/b903dd8103cd55bfc6bd9e8006afc37f/shop-01/article/comment/list',
        data
    })
}