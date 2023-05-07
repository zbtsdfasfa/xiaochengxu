<template>
	<view class="search-result-list-container">
		 <!-- 循环渲染列表数据 -->
		 <block v-for="(item , index ) in resultList" :key="index">
			<view class="search-result-item-box">
				<search-result-item-theme-1 v-if="!item.pic_list || item.pic_list.length === 0" :data="item"/>
				<search-result-item-theme-2 v-else-if="item.pic_list.length === 1" :data="item"/>
				<search-result-item-theme-3 v-else :data="item"/>
			</view>
		</block>
	</view>
</template>

<script>
import { getSearchResult } from 'api/search';
	export default {
		name:"search-result-list",
		props:{
			queryStr:{
				type:String,
				required: true
			}
		},
		data() {
			return {
				// 获取到的数据
				resultList:[], 
				// 页数
				page:1
			};
		},
		created(){
			this.loadSearchResult()
		},
		methods:{
			async loadSearchResult() {
				const res = await getSearchResult({
					q:this.queryStr,
					p:this.page
				})
				console.log(res[1].data.data.list);
				this.resultList = res[1].data.data.list
			}
		}
	}
</script>

<style lang="scss" scoped>
.search-result-list-container {
  padding: $uni-spacing-col-lg $uni-spacing-row-lg;
  .search-result-item-box {
    margin-bottom: $uni-spacing-col-big;
  }
}
</style>