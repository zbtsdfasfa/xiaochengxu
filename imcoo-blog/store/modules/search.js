// 数据的持久化
// 1.数据的存储
// 2数据的读取
const STORAGE_KEY = 'search-list';
// 历史搜索的长度
const HISTORY_MAX = 5;
export default {
    namespaced: true,
    state: () => {
        return {
            searchData: uni.getStorageSync(STORAGE_KEY) || []
        }
    },
    // 要修改state中的数剧就要提交一个mutation
    mutations: {
        // 数据的持久化存储
        saveToStorage(state) {
            uni.setStorage({
                key: STORAGE_KEY,
                data: state.searchData,
            })
        },
        // 添加数据
        addSearchData(state, val) {
            if (!val) return
            const index = state.searchData.findIndex(item => item === val)
            if (!index === -1) {
                // 1.1把已存在的数据删除
                state.searchData.splice(index, 1);
            }
            // 1.2把新的内容添加到头部
            state.searchData.unshift(val);
            // 如果历史搜索的长度大于了 HISTORY_MAX 那就把HISTORY_MAX后面的的数据删除了
            if(state.searchData.length > HISTORY_MAX) {
                state.searchData.splice(HISTORY_MAX,state.searchData.length - HISTORY_MAX)
            }
            this.commit('search/saveToStorage')
        },
        // 删除指定的数据
        removeSearchData(state, index) {
            state.searchData.splice(index, 1);
            this.commit('search/saveToStorage')
        },
        // 删除所有数据
        removeAllSearchData(state) {
            state.searchData = []
            this.commit('search/saveToStorage')
        }
    }
}