<template>
	<view class="hot-container">
		<!-- logo图片区域 -->
		<img src="@/static/images/logo.png" alt="慕课热搜logo" class="logo" mode="aspectFit">
		<!-- 自定义组件可以直接是使用 -->
		<view class="search-box">
			<my-search placeholder-text="uni-app自定义组件"></my-search>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.hot-container {
	background-color: $uni-bg-color;
	.logo{
		width: 100%;
		height: 80px;
	}
}
.search-box {
	padding: 0 14px;
	margin-bottom: 8px;
}
</style>
