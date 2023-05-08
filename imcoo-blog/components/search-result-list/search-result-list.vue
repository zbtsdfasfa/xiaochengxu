<template>
	<!-- 通过mescrol-body报复哦列表，指定ref为mescrollTef，监听@initial，@down，@up时间 -->
	<view class="search-result-list-container">
		<empty-data v-if="isEmpty"></empty-data>
		<!-- 循环渲染列表数据 -->
		<mescroll-body v-else  ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback">
			<block v-for="(item, index ) in resultList" :key="index">
				<view class="search-result-item-box" @click="onItemClick(item)">
					<search-result-item-theme-1 v-if="!item.pic_list || item.pic_list.length === 0" :data="item" />
					<search-result-item-theme-2 v-else-if="item.pic_list.length === 1" :data="item" />
					<search-result-item-theme-3 v-else :data="item" />
				</view>
			</block>
		</mescroll-body>
	</view>
</template>

<script>
// 2导入对应的mixins
import MescrollMixin from '@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js';
import { getSearchResult } from 'api/search';
export default {
	name: "search-result-list",
	// 注册minxins
	mixins: [MescrollMixin],
	props: {
		queryStr: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			// 获取到的数据
			resultList: [],
			// 页数
			page: 1,
			isInit:true,
			// 实列
			mescroll:null,
			// 是否显示空数据
			isEmpty:false
		};
	},
	created() {
		this.loadSearchResult()
	},
	mounted(){
		// 通过refs获取组件实列
		this.mescroll = this.$refs.mescrollRef.mescroll;
	},
	methods: {
		async loadSearchResult() {
			const res = await getSearchResult({
				q: this.queryStr,
				p: this.page
			})
			// console.log(res[1].data.data.list);
			res[1].data.data.list.forEach((item) => {
				item.title = item.title.replace(/<em>/g, "<em style='color:#f94d2a; margin:0 2px'>");
				item.description = item.description.replace(
					/<em>/g,
					"<em style='color:#f94d2a; margin:0 2px'>"
				);
			});
			// this.resultList = res[1].data.data.list
			// 使用上拉加载下拉刷新的赋值策略
			if(this.page === 1) {
				this.resultList = res[1].data.data.list;
			} else {
				this.resultList = [...this.resultList,...res[1].data.data.list]
			}
			// 测试获取不到数据会不会显示空数据组件
			// this.resultList=[]
			if(this.resultList.length === 0) {
				this.isEmpty =true;
			}
		},
		// 实现三个回调的方法
		// 首次加载
		async mescrollInit() {
			await this.loadSearchResult();
			this.isInit =false;
			// 结束上拉加载，下拉刷星
			this.mescroll.endSuccess();
		},
		// 下拉刷新回调
		async downCallback() {
			if(this.isInit) return
			this.page = 1;
			await this.loadSearchResult();
			// 结束上拉加载，下拉刷星
			this.mescroll.endSuccess();
			// console.log('downCallback');
		},
		// 上拉加载的回调
		async upCallback() {
			if(this.isInit) return;
			this.page += 1;
			await this.loadSearchResult();
			// 结束上拉加载，下拉刷星
			this.mescroll.endSuccess();
			// console.log('upCallback');
		},
		onItemClick(item) {
			console.log(item);
			uni.navigateTo({ url: `/subpkg/pages/blog-detail/blog-detail?author=${item.author}&articleId=${item.id}` })
		}
	}
}
</script>

<style lang="scss" scoped>
.search-result-list-container {
	padding: $uni-spacing-col-lg $uni-spacing-row-lg;

	.search-result-item-box {
		margin-bottom: $uni-spacing-col-big;
	}
}
</style>