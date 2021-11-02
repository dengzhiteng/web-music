import { createStore } from "vuex";

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      userInfo: {},
    };
  },
  mutations: {
    setUserInfo(state: any, info: unknown) {
      state.userInfo = info;
    },
  },
});

export default store;
