<template>
	<view class="search-history-container">
		<!-- title -->
		<view class="search-history-title-box">
			<view class="search-history-title">搜索历史</view>
			<view v-if="!isShowClear">
				<uni-icons type="trash" @click="isShowClear = true" />
			</view>
			<view v-else>
				<text class="txt" @click="onClearAll">全部删除</text>
				<text class="txt" @click="isShowClear = false">完成</text>
			</view>
		</view>
		<!-- 内容区域 -->
		<view class="search-history-box">
			<block v-for="(item, index) in searchData" :key="index">
				<view class="search-history-item" @click="onHistoryItemClick(item,index)">
					<text class="history-txt line-clamp" >{{ item }}</text>
					<uni-icons type="clear" v-show="isShowClear" />
				</view>
			</block>
		</view>
	</view>
</template>

<script> 
import {mapState,mapMutations} from 'vuex'
export default {
	name: "search-history",
	// props:{
	// 	searchData:{
	// 		type:Array,
	// 		required:true
	// 	}
	// },
	data() {
		return {
			isShowClear: false,
			// 暂时的mock数据
			
		};
	},
	methods:{
		...mapMutations('search' , ['removeSearchData' ,'removeAllSearchData']),
		// 点击全部删除删除全部数据
		onClearAll() {
			// 提示框
			uni.showModal({
				title: '提示',
				content: '确定删除搜索历史数据？',
				showCancel: true,
				// 成功的回调
				success: ({ confirm, cancel }) => {
					// 用户点击了确定
					if(confirm) {
						// 删除所有数据
						this.removeAllSearchData();
						// 返回垃圾桶图标状态
						this.isShowClear = false;
					}
				}
			})
		},
		// 点击每一个item删除点击的item项
		onHistoryItemClick(item,index) {
			// 1当前处于删除状态，点击删除item
			if(this.isShowClear) {
				this.removeSearchData(index);
			}else {
				// 2当前不处于删除状态，点击item进行搜索
				this.$emit('onItemClick', item);
			}
		}
	},
	computed:{
		...mapState('search' , ['searchData'])
	}
}
</script>

<style lang="scss" scoped>
.search-history-container {
	padding: $uni-spacing-col-lg $uni-spacing-row-lg;

	.search-history-title-box {
		display: flex;
		justify-content: space-between;

		.search-history-title {
			font-size: $uni-font-size-sm;
			color: $uni-text-color;
			padding: $uni-spacing-col-sm $uni-spacing-row-sm;
		}

		.txt {
			color: $uni-text-color-grey;
			font-size: $uni-font-size-sm;
			padding: $uni-spacing-col-sm $uni-spacing-row-sm;
		}
	}

	.search-history-box {
		margin-top: $uni-spacing-col-lg;

		.search-history-item {
			width: 50%;
			box-sizing: border-box;
			display: border-box;
			display: inline-block;
			padding: $uni-spacing-col-base $uni-spacing-row-base;
			position: relative;

			.history-txt {
				width: 85%;
				display: inline-block;
				color: $uni-text-color;
				font-size: $uni-font-size-base;
			}
		}

		.search-history-item:nth-child(odd)::before {
			content: '';
			border-left: 1px solid #999;
			display: inline-block;
			height: 10px;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 0;
		}
	}
}</style>