<template>
	<view class="comment-item-container">
		<!-- 头像 -->
		<view class="avatar-box">
			<image :src="data.avatar" class="avatar"/>
		</view>
		<view class="info-box">
			<!-- 评论人 -->
			<text class="comment-user">{{ data.nickName  }}</text>
		<!-- 评论的内容 -->
		<text class="comment-info">{{ data.content }}</text>
		<!-- 评论的时间 -->
		<text class="comment-time">{{ data.postTime | relativeTime }}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"article-comment-item",
		props:{
			data:{
				type:Object,
				required:true
			}
		},
		data() {
			return {
				
			};
		},
	}
</script>

<style lang="scss" scoped>
.comment-item-container {
	padding: $uni-spacing-col-lg 0;
    display: flex;
	.info-box {
		margin-left: $uni-spacing-row-sm;
		display: flex;
        flex-direction: column;
		.comment-user{
			font-size: $uni-font-size-sm;
			color: $uni-text-color;
			font-weight: bolder;
		}
		.comment-info {
				font-size: $uni-font-size-sm;
				margin: $uni-spacing-row-sm;
				color: $uni-text-color;
			}
			.comment-time {
				font-size: $uni-font-size-sm;
				color: $uni-text-color-grey;
			}
	}
}

</style>