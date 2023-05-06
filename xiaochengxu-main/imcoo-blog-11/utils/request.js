// const  baseURL = 'https://www.fastmock.site/mock/95d2c25cb3898f63758dbb2abb1359e2/api'
function request({url,data,method}) {
	return new Promise((resolve,reject) =>{
		uni.request({
			url,
			data,
			method,
			success:({data}) =>{
				if(data.success) {
					// 请求成功
					resolve(data)
				} else {
					// 请求失败了
					uni.showToast({
						title:data.message,
						icon:"non",
						mask:true,
						duration:3000
					});
					reject(data.message);
				}
			},
			fail:(error)=> {
				reject(error);
			}
		})
	})
}
export default request