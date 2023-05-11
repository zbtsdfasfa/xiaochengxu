<template>
	<view class="comment-container" :style="{bottom : bottom + 'px'}">
	  <uni-easyinput
		v-model="value"
		type="textarea"
		placeholder="说点什么..."
		:maxlength="50"
		:inputBorder="false"
	  ></uni-easyinput>
	  <button class="commit" type="primary" :disabled="!value" size="mini" @click="onBtnClick">
		发送
	  </button>
	</view>
  </template>

<script>
import {userArticleComment} from 'api/user'
	export default {
		name:"article-comment-commit",
		props:{
			articleId:{
				type:String,
				required:true
			}
		},
		data() {
			return {
				value:'',
				bottom:0
			};
		},
		created(){
			uni.onKeyboardHeightChange(({height}) => {
				this.bottom = height
			})
		},
		methods:{
			async onBtnClick() {
				uni.showLoading ({
					title:'加载中'
				});
				const res = await userArticleComment({
					articleId: this.articleId,
					content:this.value
				});
				console.log(res[1].data.data);
				uni.showToast({
					title:'发表成功',
					icon:'success',
					mask:true
				});
				// 发表成功之后的回调
				this.$emit('success',res[1].data.data);
			}
		}
	}
</script>

<style lang="scss" scoped>
.comment-container {
  background-color: $uni-bg-color;
  text-align: right;
  padding: $uni-spacing-row-base;
  position: relative;
}
</style>