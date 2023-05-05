<template>
	<view class="hot-container">
		<!-- logo图片区域 -->
		<img src="@/static/images/logo.png" alt="慕课热搜logo" class="logo" mode="aspectFit">
		<!-- 自定义组件可以直接是使用 -->
		<view class="search-box">
			<my-search placeholder-text="uni-app自定义组件"></my-search>
		</view>
		<my-tabs :tabData="tabData" :defaultIndex = 'currentIndex' @tabClick="onTabClick"></my-tabs>
		<!-- list视图区域 -->
		<!-- 
			1,使用mock数据（假数据）构建list的基本解构
			2，美化样式
			3，根据tab的切换来获取正式的数据
			4，渲染真实的数据
			5，让list有左右切换的能力
			利用swiper来进行改造
			存在两个问题
			1，高度塌陷问题
			2，卡顿问题
			6，实现list和tabs的联动效果
		 -->
		 <swiper class="swiper" current="currentIndex" :current="currentIndex"> 
			<!-- swiper-item的数量由tabdata来决定 -->
			<swiper-item class="swiper-item" v-for="(tabItem,tabIndex) in tabData" :key="tabIndex">
				<view>
			<!-- 加载动画 -->
			<uni-load-more status="loading" v-if="isLoading"/>
			 <!-- 列表 -->
			 <block v-else>
				<hot-list-item v-for="(item , index) in listData[tabIndex]" :key="index" :data="item" :ranking="index + 1"></hot-list-item>
			 </block>
		 </view>
			</swiper-item>
		 </swiper>
		
	</view>
</template>

<script>
	import { getHotTabs ,  getHotListFromTabType} from 'api/hot'
export default {
  data() {
    return {
		tabData:[],
		// 激活项
		currentIndex:0,
		// 展示loading
		isLoading:true,
		// 存放获取到的数据 以index为key 以对应的list为value
		listData:{}
	}
  },
  created() {
  	this.loadHotTabs()
  },
  methods:{
	// 获取热搜文章类型
	  async loadHotTabs () {
		  const res = await getHotTabs()
		  // const {data:res} = await getHotTabs();
		//   console.log(res[1].data.data.list)
		  this.tabData = res[1].data.data.list
		//   获取list的时候需要tab中对应的id
		this.loadHotListFromTab()

	  },
	//   获取list列表数据
	async loadHotListFromTab() {
		if(!this.listData[this.currentIndex]){
            // 1如果没有获取到数据
            // 1.1展示loading
            this.isLoading = true;
            // 1.2调用接口获取数据
            const id = this.tabData[this.currentIndex].id
            const res1 = await  getHotListFromTabType(id)
			// console.log(res1)
				// 1.3把数据保存到本地
				console.log(res1[1].data.data.list);
				this.listData[this.currentIndex] = res1[1].data.data.list
				// 1.4隐藏loading
				this.isLoading = false;
		}else {
            // 2如果已经获取到数据
		}
		
		
	
		
		
		// 2.1直接渲染数据
	
	},
	//   tab点击事件
	  onTabClick(index) {
		this.currentIndex = index
		this.loadHotListFromTab()
		
	  }
  }
	}
</script>

<style lang="scss" scoped>
.hot-container {
	background-color: $uni-bg-color;
	.logo{
		width: 100%;
		height: 80px;
	}
}
.search-box {
	padding: 0 14px;
	margin-bottom: 8px;
}
</style>
