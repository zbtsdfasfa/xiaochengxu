<template>
	<view class="comment-container">
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
	export default {
		name:"article-comment-commit",
		data() {
			return {
				value:''
			};
		},
		methods:{
			onBtnClick() {

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