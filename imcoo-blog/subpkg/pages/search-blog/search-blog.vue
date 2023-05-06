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
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 绑定输入框中的内容
      searchVal:'',
      // 输入框中默认的输入内容
      defaultText:'请输入内容'
    };
  },
  methods: {
    // 搜索内容 
    onSearchConfirm(val) {
      console.log('搜索内容：' +  this.searchVal);
    },
    // 获取焦点
    onSearchFocus(val) {
      console.log("获取焦点");
    },
    // 失去焦点
    onSearchBlur(val) {
      console.log('失去焦点');
    },
    // 清空内容
    onSearchClear(val) {
      console.log('清空内容');
    },
    // 点击取消
    onSearchCancel(val) {
      console.log('点击取消按钮');
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
