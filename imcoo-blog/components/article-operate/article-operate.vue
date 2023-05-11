<template>
	<view class="operate-container">
		<!-- 输入框 -->
		<view class="comment-box" @click="onCommentClick">
			<my-search placeholderText="评论一句，前排打call..." :config="{
				height: 28,
				backgroundColor: '#eeedf4',
				icon: '/static/images/input-icon.png',
				textColor: '#a6a5ab',
				border: 'none'
			}"></my-search>
		</view>
		<!-- 点赞 -->
		<view class="options-box">
			<article-praise :articleData="articleData" @changePraise="$emit('changePraise', $event)"></article-praise>
		</view>
		<!-- 收藏 -->
		<view class="options-box">
			<article-collect></article-collect>
		</view>
	</view>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: "article-operate",
	props: {
		articleData: {
			type: Object,
			required: true
		}
	},
	data() {
		return {

		};
	},
	methods: {
		...mapActions('user', ['isLogin']),
		// my-search点击事件
		async onCommentClick() {
			// 应为发表评论要在用户登录之后进行
			const isLogin = await this.isLogin()
			if (!isLogin) {
				return;
			}
			this.$emit('commitClick')

		}
	}
}
</script>

<style lang="scss" scoped>
.operate-container {
	background-color: $uni-bg-color;
	position: fixed;
	right: 0;
	left: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	padding: 4px 6px 32px 6px;
	border-top: 1px solid $uni-bg-color-grey;

	.comment-box {
		flex-grow: 2;
	}

	.options-box {
		flex-grow: 1;
	}

}
</style>