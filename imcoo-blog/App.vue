<script>
	export default {
		onLaunch: function () {
    /* #ifdef H5 */
    console.log('当前处于 H5 编译平台');
    /* #endif */
    /* #ifndef H5 */
    console.log('当前处于非 H5 编译平台');
    /* #endif */
  },
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
