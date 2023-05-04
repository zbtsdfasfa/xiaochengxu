<template>
	<!-- 搜索组件 -->
	<view class="my-search-container">
		<!-- 搜索按钮 -->
		<view class="my-search-box">
			<!-- 搜索图片 -->
			<img class="icon" src="@/static/images/search.png" alt="搜索图标">
			<!-- 文本内容 -->
			<text class="placeholder">{{ placeholderText }}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"my-search",
		props:{
			placeholderText:{
				type:String,
				default:"搜索"
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.my-search-container {
		// background-color: red;	
		display: flex;
		align-items: center;
		.my-search-box {
			display: flex;
			align-items: center;
			height: 35px;
			width: 100%;
			border: 1px solid gray;
			border-radius: 10px;
			.icon {
				display: fle;
				align-items: center;
				width: 20px;
				height: 20px;
			}
		}
	}
</style>