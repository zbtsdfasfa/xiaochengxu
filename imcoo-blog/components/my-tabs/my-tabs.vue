<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		name:"my-tabs",
		props:{
			// 父组件传入的 tabs 数据
			tabData: {
				type:Array,
				default:()=>[]
			},
			// 默认激活选型
			 defaultIndex: {
			      type: Number,
			      default: 0
			},
			// 配置对象
			 config:{
				 type:Object,
				 default:()=>{
						return {}
				 }
			 }	
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>