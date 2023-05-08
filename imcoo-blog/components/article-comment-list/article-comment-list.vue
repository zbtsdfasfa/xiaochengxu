<template>
	<!-- 精简评论 -->

	<view class="comment-limt-container" v-if="!isShowAllComment">
		<view class="comment-title">精简评论</view>
		<block v-for="(item, index ) in commentList.slice(0,2)" :key="index">
			<!-- 封装的item组件项 -->
			<article-comment-item :data="item.info"></article-comment-item>			
		</block>
		<!-- 查看更多评论 -->
		<view class="show-more" @click="onMoreClick">查看更多评论</view>
	</view>
	<!-- 查看全部评论 -->
	<view class="comment-all-container" v-else>
		<mescroll-body
      ref="mescrollRef"
      @init="mescrollInit"
      @up="upCallback"
      :down="{
        use: false
      }"
    >
    <view class="comment-title">全部评论</view>
		<block v-for="(item, index ) in commentList" :key="index">
			<!-- 封装的item组件项 -->
			<article-comment-item :data="item.info"></article-comment-item>
		</block>
      </mescroll-body>	
	</view>
</template>

<script>
// 导入
import MescrollMixin from '@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js';
	import {getArticleCommentList} from 'api/article'
	export default {
		name:"article-comment-list",
		// 3. 注册 mixins
		mixins: [MescrollMixin],
		props:{
			// 文章的id
			articleId:{
				type:String,
				required:true
			}
		},
		data() {
			return {
				// 当前的页数
				page:1,
				// 每日一页的评论数
				pageSize:5,
				// 评论列表
				commentList:[],
				// 是否全部显示评论
				isShowAllComment:false
			};
		},
		created(){
			this.loadCommentList()
		},
		methods:{
			async loadCommentList(){
				const res = await getArticleCommentList({
					articleId:this.articleId,
					page:this.page,
					size:this.pageSize
				})
				this.commentList = res[1].data.data.list
				console.log(res[1].data.data.list);
			},
			// 切换精简评论还是全部评论
			onMoreClick() {
				this.isShowAllComment = true
			},
			mescrollInit() {
				console.log("首次");
			},
			// 上拉刷新
			upCallback(){
				console.log("属性");
			}
		}
	}
</script>

<style lang="scss">
.comment-title {
	font-weight: bold;
	color: $uni-text-color-title;
	font-size: $uni-font-size-lg;
	margin: $uni-spacing-col-lg 0;
}
.comment-limt-container {
  .show-more {
    margin: $uni-spacing-col-lg;
    text-align: center;
    color: $uni-text-color-more;
    font-size: $uni-font-size-base;
  }
}

</style>