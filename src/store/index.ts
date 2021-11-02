import { createStore } from "vuex";

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      userInfo: {
        name: "张三",
        age: 18,
        role: "editor",
      },
    };
  },
  mutations: {
    setUserInfo(state: any, info: unknown) {
      state.userInfo = info;
    },
  },
  getters: {
    // 获取到最终的数据结果
    getUserInfo(state) {
      return state.count;
    },
  },
});

export default store;
