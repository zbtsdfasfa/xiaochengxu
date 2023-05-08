<template>
  <view class="search-blog-container">
    <!-- search模块 -->
    <view class="search-bar-box">
      <my-search 
      :isShowInput="true"
      :placeholderText="defaultText"
      v-model="searchVal"
      :config="{
          backgroundColor: '#f1f0f3',
      }"
       @search="onSearchConfirm"
      @focus="onSearchFocus"
      @blur="onSearchBlur"
      @clear="onSearchClear"
      @cancel="onSearchCancel"
      ></my-search>
    </view>
    <!-- 热搜文章列表 -->
   <view class="search-hot-list-box card" v-if="showType ===HOT_LIST"  >
    <search-hot-list @onSearch="onSearchConfirm"></search-hot-list>
   </view>
   <!-- 热搜文章历史记录 -->
   <view class="search-history-box" v-else-if="showType === SEARCH_HISTORY">
    <search-history 
    @onItemClick="onSearchConfirm"
    ></search-history>
   </view>
   <!-- 热搜文章结果 -->
   <view class="search-result-box" v-else>
    <!-- 给mescroll-body的组件添加：ref=mescrollItem -->
    <search-result-list ref="mescrollItem" :queryStr="this.searchVal"></search-result-list>
   </view>
  </view>
</template>

<script>
// 引入mescrool-comp.js
import mescrollCompMixin from '@/uni_modules/mescroll-uni/components/mescroll-uni/mixins/mescroll-comp.js';
import { getDefaultText } from 'api/search'
import { mapMutations } from 'vuex'
  // 搜索列表
const HOT_LIST= '0'
// 搜索历史
const SEARCH_HISTORY = '1'
// 搜索结果
const SEARCH_RESULT = '2'
export default {
// 注册mixins
mixins:[mescrollCompMixin],
  data() {
    return {
      // 绑定输入框中的内容
      searchVal:'',
      // 输入框中默认的输入内容
      defaultText:'请输入内容',
      // 默认情况下||点击输入框的取消按钮会显示【热搜列表】
      HOT_LIST,
      // 当search获取焦点||点击输入框清空按钮会显示【搜索历史】
      SEARCH_HISTORY,
      // 当用户点击热搜列表item||点击搜索历史||用户按下搜索键显示【搜索结果】
      SEARCH_RESULT,
      showType:HOT_LIST,
      // searchData: []
    };
  },
  created (){
    this.loadDefaultText()
  },
  methods: {
    ...mapMutations('search' , ['addSearchData']),
    // 删除历史搜索数据
    // onRemoveAllSearchData() {
    //   this.searchData = []
    // },
    // onRemoveSearchData(index) {
    //   this.searchData.splice(index,1)

    // },
    // 获取推荐的默认内容
    async loadDefaultText (){
      const res = await getDefaultText()
      // console.log(res[1].data.data);
      this.defaultText = res[1].data.data.defaultText
    },
    // 搜索内容 
    onSearchConfirm(val) {
      // 如果用户不输入内容，就是用输入框中默认的内容
      this.searchVal = val ? val : this.defaultText
      // 保存搜索的历史数据
      this.addSearchData(this.searchVal)
      // 判断当用户输入时，如果包含输入的内容就搜索输入的内容
      if(this.searchVal) {
        this.showType = SEARCH_RESULT;
      }
    },
    //  保存搜索历史数据
    // saveSearchData() {
    //   // 1如果手搜索的内容已经存在，不会新增数据，而是会把这个数据放到被展示历史的头部
    //   // 2如果当前的搜索内容存在了，则会新增一条数据并展示到最顶部的地方
    //   const index = this.searchData.findIndex(item=> item === this.searchVal)
    //   if(!index === -1){
    //     // 1.1把已存在的数据删除
    //     this.searchData.splice(index,1);
    //   }
    //   // 1.2把新的内容添加到头部
    //   this.searchData.unshift(this.searchVal);
    // },
    // 获取焦点
    onSearchFocus(val) {
      // console.log("获取焦点");
      this.showType = SEARCH_HISTORY
    },
    // 失去焦点
    onSearchBlur(val) {
      // console.log('失去焦点');
    },
    // 清空内容
    onSearchClear(val) {
      // console.log('清空内容');
      this.showType = SEARCH_HISTORY
    },
    // 点击取消
    onSearchCancel(val) {
      // console.log('点击取消按钮');
      this.showType = HOT_LIST
    }
  }
};
</script>

<style lang="scss" scoped>
.search-blog-container {
  .search-bar-box {
    background-color: $uni-bg-color;
    padding: $uni-spacing-row-sm;
    position: sticky;
    top: 0px;
    z-index: 9;
  }
}
</style>
