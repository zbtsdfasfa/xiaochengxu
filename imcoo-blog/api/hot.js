import request from '../utils/request';
// 热搜文章类型
export function getHotTabs (){
	return uni.request({
		url:'https://www.fastmock.site/mock/b903dd8103cd55bfc6bd9e8006afc37f/shop-01/api2'
	})
}

// 热搜文章列表
export function getHotListFromTabType (type) {
	return uni.request({
		url:'https://www.fastmock.site/mock/b903dd8103cd55bfc6bd9e8006afc37f/shop-01/api3',
		data:{
			type
		}
	})
}