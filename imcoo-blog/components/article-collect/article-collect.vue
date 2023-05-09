<template>
	<view class="collect-box">
		<image class="img" src="/static/images/un-collect.png"/>
		<text class="txt">评论</text>
	</view>
</template>

<script>
	export default {
		name:"article-collect",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.collect-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	.img {
		width:$uni-img-size-base ;
		height: $uni-img-size-base;
		color: $uni-text-color;
	}
	.txt {
		color: $uni-text-color;
		font-size: $uni-font-size-sm;
	}
}

</style>