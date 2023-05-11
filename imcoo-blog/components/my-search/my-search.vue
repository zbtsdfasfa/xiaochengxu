<template>
	<!-- 搜索组件 -->
	<view class="my-search-container">
		<!-- 搜索输入框 -->
		<uni-search-bar 
		v-if="isShowInput" 
		class="my-search-bar" 
		:radius="100"
		:bgColor="config.backgroundColor"
		:placeholder="placeholderText"
		:value="value"
		@confirm="onSearch"
		@focus="onFocus"
		@blur="onBlur"
		@clear="onClear"
		@cancel="onCancel"
		@input="onInput"
		>
		<uni-icons slot="clearIcon" type="clear" color="#999999"
		/>
	</uni-search-bar>
		<!-- 搜索按钮 -->
		<view class="my-search-box" v-else>
			<!-- 搜索图片 -->
			<img class="icon" src="@/static/images/search.png" alt="搜索图标">
			<!-- 文本内容 -->
			<text class="placeholder">{{ placeholderText }}</text>
		</view>

	</view>
</template>

<script>
export default {
	name: "my-search",
	props: { 
		// 绑定用户输入的内容  不要用v-modle这样会改变父组件传递的数据
		value:{
			type:String
		},
		// 是否显示输入框
		isShowInput: {
			type: Boolean,
			default: false
		},
		placeholderText: {
			type: String,
			default: "搜索"
		},
		// 配置对象
		config: {
			type: Object,
			default: () => ({
				height: 36,
				backgroundColor: '#ffffff',
				icon: '/static/images/search.png',
				textColor: '#454545',
				border: '1px solid #c9c9c9'
			})
		}
	},
	data() {
		return {};
	},
	methods:{
		// 点击搜索按钮触发
		onSearch(){
			this.$emit('search' , this.value)
		},
		// 输入框获取焦点触发
		onFocus(){
			this.$emit('focus' , this.value)
		},
		// 输入框失去焦点触发
		onBlur(){
			this.$emit('blur' , this.value)
		},
		// 点击输入框清空按钮的时候触发
		onClear(){
			this.$emit('clear' , this.value)
		},
		// 点击取消按触发
		onCancel(){
			this.$emit('cancel' , this.value)
		},
		//value改变的时候触发f
		onInput(val){
			console.log('onInput' + val);
			// 通知父组件
			this.$emit('input' , val)
		}

	}
}
</script>

<style lang="scss" scoped>
.my-search-container {
	display: flex;
	align-items: center;
	.my-search-bar {
		width: 100%;
	}
	.my-search-box {
		height: 36px;
		background-color: #ffffff;
		border-radius: 15px;
		border: 1px solid #c9c9c9;
		width: 100%;
		display: flex;
		align-items: center;
		padding: 0 $uni-spacing-row-base;

		.icon {
			width: $uni-img-size-sm;
			height: $uni-img-size-sm;
		}

		.placeholder {
			font-size: $uni-font-size-sm;
			margin-left: $uni-spacing-row-sm;
			color: #454545;
		}
	}
}
</style>