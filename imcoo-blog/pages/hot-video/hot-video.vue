<template>
	<view class="hot-video-container">
		<block v-for="(item,index) in videoList" :key="index">
			<hot-video-item :data="item"></hot-video-item>
		</block>
	</view>
</template>

<script>
import {getHotVideoList} from 'api/video'
	export default {
		data() {
			return {
				// 数据源
				videoList:[],
				page:1,
				size:10
			};
		},
		created(){
			this.loadHotVideoList()
		},
		methods:{
			// 获取视频数据
			async loadHotVideoList() {
				const res = await getHotVideoList({
					page:this.page,
					size:this.size
				})
				this.videoList = res[1].data.data.list
				// console.log(res[1].data.data.list);
				console.log(this.videoList);
			}
		}
	}
</script>

<style lang="scss">

</style>
