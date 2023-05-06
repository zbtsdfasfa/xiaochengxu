<!-- list左侧的排名文件 -->
<template>
	<view class="ranking">
		<img class="ranking-bg" :src="getRankingBg" alt="左侧排名图片">
		<text class="ranking-text" :class="{ 'text-color' : ranking <= 3 }">{{  ranking }}</text>
		
	</view>
</template>

<script>
	export default {
		name:"hot-ranking",
		props:{
			ranking:{
				type:Number,
				required:true
			}
		},
		data() {
			return {
				
			};
		},
		computed:{
			getRankingBg() {
				if (this.ranking <= 3) {
					return require(`@/static/images/ranking-${this.ranking}.png`)
				}
				return require(`@/static/images/ranking-other.png`)
			}
		}
	}
</script>

<style lang="scss" scoped>
  .ranking {
	position: relative;
	text-align: center;
	width: 18px;
	height: 20px;
	.ranking-bg {
		width: 100%;
		height: 100%;
	}
	.ranking-text {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-55%, -55%);
		font-size: $uni-font-size-sm;
		font-weight: bold;
		color: $uni-text-color;
	}
	.text-color {
		color: white;
	}
  }
</style>