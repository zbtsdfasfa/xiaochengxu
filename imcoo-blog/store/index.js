// 1. 导入 Vue 和 Vuex
import Vue from 'vue';
// uniapp 已默认安装，不需要重新下载
import Vuex from 'vuex';
import search from './modules/search.js'
import user from './modules/user.js';

// 2. 安装 Vuex 插件
Vue.use(Vuex);
// 3. 创建 store 实例
const store = new Vuex.Store({
	modules:{
		search,
		user
	}
});
export default store;