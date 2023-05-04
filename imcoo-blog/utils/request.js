import { error } from "console";

// 用于封装网络请求的js文件
const BASE_URL = "https://www.fastmock.site/mock/b903dd8103cd55bfc6bd9e8006afc37f/shop-01";
function request({url, data,method}) {
	return new Promise((resolve,reject) =>{
		uni.request({
			url:BASE_URL + url,
			data,
			method:,
			success:({data}) =>{
				if (data.success) {
					resolve(data);
				} else {
					uni.showToast({
						title:data.message,
						icon:'none',
						mask:true,
						duration:3000
					});
					reject(data.message);
				}
			},
			fail:(error) =>{
				reject(error);
			}
		})
	})
}

export default request;
