<template>
	<view class="search-result-item-box">
		<!-- 标题 -->
		<rich-text :nodes="data.title" class="item-tltle line-clamp"></rich-text>
		<!-- 内容 -->
		<rich-text :nodes="data.description" class="item-desc line-clamp"></rich-text>
		<!-- 底部 -->
		<view class="item-desc-bottom">
			<!-- 作者 -->
			<view class="item-author">{{ data.author }}</view>
			<!-- 发布时间 -->
			<view class="item-updata-time">
				<uni-icons class="read-updata-time-icon" color="#999999" type="compose" />
				<text>{{ data.updateTime | relativeTime  }}</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name:"search-result-item-theme-1",
		props:{
			data:{
				type:Object,
				required:true
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.search-result-item-box {
	margin-bottom: $uni-spacing-col-big;
	.item-tltle{
		font-size: $uni-font-size-base;
		font-weight: bold;
		color: $uni-text-color-title;
	}
	.item-desc {
		margin-top: $uni-spacing-col-base;
		color: $uni-color-subtitle;
		font-size: $uni-font-size-base;
	}
	.item-desc-bottom {
		margin-top: $uni-spacing-col-base;
		display: flex;
		color: $uni-text-color-grey;
		font-size: $uni-font-size-sm;
		.item-author {
			margin-right: $uni-spacing-col-lg;
		}
		.item-updata-time {
			.read-updata-time-icon {
				color: $uni-text-color-grey;
				margin-left: $uni-spacing-row-sm;
			}
		}
	}
}
</style>