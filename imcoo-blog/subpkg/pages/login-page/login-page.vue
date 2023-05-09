<template>
	<view>
		<my-login @onLoginSuccess="onLoginSuccess"></my-login>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			// 用户登录成功之后返回到之前的页面
			onLoginSuccess(){
				uni.navigateBack({ delta: 1 })
			}
		}
	}
</script>

<style lang="scss">

</style>
