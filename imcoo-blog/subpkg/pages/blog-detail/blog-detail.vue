<template>
	 <!-- #ifndef H5 -->
	<page-meta root-font-size="52px">
		 <!-- #endif -->
		<view class="detail-container">
		<!-- 文章内容区域 -->
		<block v-if="articleData">
			<!-- 标题 -->
			<view class="title">{{ articleData.articleTitle }}</view>
			<view class="detail-info">
				<view class="detail-left">
					<view class="avatar-box">
						<!-- 头像 -->
						<image class="avatar" :src="articleData.avatar"></image>
					</view>
					<view class="author-box">
						<!-- 作者 -->
						<text class="author">{{ articleData.nickName }}</text>
						<!-- 发布时间 -->
						<text class="release-time">{{ articleData.date }}</text>
					</view>
				</view>
				<view class="detail-right">
					<!-- 关注按钮 -->
					<button 
					class="follow" 
					size="mini" 
					@click="onFollowClick"
					:loading="isFollowLoading"
					:type="articleData.isFollow ? 'primary' : 'default'"
					>{{ articleData.isFollow ? '已关注' : '关注' }}</button>
				</view>
			</view>
			<!-- 文章内容 -->
			<!-- <rich-text :nodes="articleData.content"></rich-text> -->
			<!-- 文章内容 -->
			<mp-html class="markdown_views" :content="addClassFromHTML(articleData.content)" scroll-table />
			<!-- 文章评论 -->
			<view class="comment-box">
				<article-comment-list ref="mescrollItem"  :articleId="articleId"></article-comment-list>
			</view>
			<!-- 文章功能区域 -->
			<article-operate 
			@commitClick="onCommit" 
			:articleData="articleData" 
			@changePraise="onChangePraise"></article-operate>
			<!-- 输入评论的pipup -->
			<uni-popup 
			ref="popup" 
			type="bottom" 
			@change="onCommitPopupChange"
			> 
				<article-comment-commit
				v-if="isShowCommit"
				:articleId="articleId"
			    @success="onSendSuccess"
				/> 
			</uni-popup>
		</block>
	</view>
	<!-- #ifndef H5 -->
	</page-meta>
	  <!-- #endif -->
</template>

<script>
import {mapActions} from 'vuex'
import MescrollCompMixin from '@/uni_modules/mescroll-uni/components/mescroll-uni/mixins/mescroll-comp.js';
import mpHtml from '@/uni_modules/mp-html/components/mp-html/mp-html';
import { getArticleDetail } from 'api/article'
import { userFollow } from '../../../api/user';
export default {
	mixins: [MescrollCompMixin],
	components: {
		mpHtml
	},
	data() {
		return {
			// 作者
			author: '',
			// 文章id
			articleId: '',
			// 文章详情数据
			articleData: null,
			// 关注用户的loading
			isFollowLoading:false,
			// popup的显示状态
			isShowCommit:false
		};
	},
	onLoad(options) {
		this.author = options.author;
		this.articleId = options.articleId;
		// console.log(this.author);
		// console.log(this.articleId);
		this.loadArticleDetail()
	},
	methods: {
		...mapActions('user' , ['isLogin']),
		// 为所有的dom添加一个类名
		addClassFromHTML(info) {
			return info
        .replace(/<p>/gi, '<p class="p-cls">')
        .replace(/<a>/gi, '<a class="a-cls">')
        .replace(/<h1>/gi, '<h1 class="h1-cls">')
        .replace(/<h2>/gi, '<h2 class="h2-cls">')
        .replace(/<h3>/gi, '<h3 class="h3-cls">')
        .replace(/<h4>/gi, '<h4 class="h4-cls">')
        .replace(/<h5>/gi, '<h5 class="h5-cls">')
        .replace(/<h6>/gi, '<h6 class="h6-cls">')
        .replace(/<ul>/gi, '<ul class="ul-cls">')
        .replace(/<li>/gi, '<li class="li-cls">')
        .replace(/<ol>/gi, '<ol class="ol-cls">')
        .replace(/<td>/gi, '<td class="td-cls">')
        .replace(/<th>/gi, '<th class="th-cls">')
        .replace(/<tr>/gi, '<tr class="tr-cls">')
        .replace(/<dl>/gi, '<dl class="dl-cls">')
        .replace(/<dd>/gi, '<dd class="dd-cls">')
        .replace(/<hr>/gi, '<hr class="hr-cls">')
        .replace(/<pre>/gi, '<pre class="pre-cls">')
        .replace(/<strong>/gi, '<strong class="strong-cls">')
        .replace(/<input>/gi, '<input class="input-cls">')
        .replace(/<table>/gi, '<table class="table-cls">')
        .replace(/<details>/gi, '<details class="details-cls">')
        .replace(/<code>/gi, '<code class="code-cls">')
        .replace(/<kbd>/gi, '<kbd class="kbd-cls">')
        .replace(/<summary>/gi, '<summary class="summary-cls">')
        .replace(/<blockquote>/gi, '<blockquote class="blockquote-cls">')
        .replace(/<img/gi, '<img class="img-cls"');
		},
		// 获取文章详情
		async loadArticleDetail() {
			// 加载提示
			uni.showLoading({
				title: '加载中',
			})
			const res = await getArticleDetail({
				author: this.author,
				articleId: this.articleId
			});
			this.articleData = res[1].data.data.data
			// console.log(res[1].data.data);
			uni.hideLoading()
		},
		// 点击关注的点击事件
		async onFollowClick() {
			const isLogin =  await this.isLogin()
			if(!isLogin) {
				return
			}
			// 关注用户
			// 开启button的loading
			this.isFollowLoading = true;
			const res = await userFollow({
				author:this.author,
				isFollow:!this.articleData.isFollow
			});
			// 成功后修改数据
			this.articleData.isFollow = !this.articleData.isFollow;
			// 关闭button的loading的显示
			this.isFollowLoading = false
		},
		// 点击发表评论
		onCommit() {
			// 用过调用组件自定义的ref调用uni-popup方法
			this.$refs.popup.open();
		},
		// 监听popup打开或者关闭的事件
		onCommitPopupChange(e) {
			// console.log(e);
			if(e.show) {
				this.isShowCommit = e.show;
			} else {
				setTimeout(() => {
					this.isShowCommit = e.show
				},200)
			}
		},
		// 发表评论成功之后
		onSendSuccess(data) {
			this.$refs.popup.close();
			this.isShowCommit = false;
			this.$refs.mescrollItem.addCommentList(data);
		},
		/**
     * 点赞处理回调
     */
	 onChangePraise(isPraise) {
      this.articleData.isPraise = isPraise;
    },
	}
}
</script>
<style lang="scss" >
@import '~@/styles/article-detail.scss';
.detail-container {
	
  padding: $uni-spacing-col-base $uni-spacing-row-base;
  padding-bottom: 80px;
  .title {
    font-size: $uni-font-size-title;
    color: $uni-text-color-title;
    font-weight: bold;
  }
  .detail-info {
    padding: $uni-spacing-col-base 0;
    display: flex;
    justify-content: space-between;

    .detail-left {
      display: flex;
      .author-box {
        margin-left: $uni-spacing-row-base;
        display: flex;
        flex-direction: column;
        .author {
          font-size: $uni-font-size-base;
          font-weight: bolder;
          color: $uni-color-title;
        }
        .release-time {
          font-size: $uni-font-size-sm;
          color: $uni-text-color-grey;
        }
      }
    }

    .detail-right {
      display: flex;
      align-items: center;
    }
  }
}
</style>
