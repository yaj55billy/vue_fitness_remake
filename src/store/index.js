import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    carts: [],
    noticeMessage: "",
    loadingState: false,
  },
  mutations: {
    setCarts(state, payload) {
      state.carts = payload;
    },
    setNoticeMessage(state, payload) {
      state.noticeMessage = payload;
    },
    setLoadingState(state, payload) {
      state.loadingState = payload;
    },
  },
  actions: {
    getCarts({ commit }) {
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      axios
        .get(url)
        .then((res) => {
          commit("setCarts", res.data.data);
        })
        .catch(() => {
          commit("setCarts", 0);
        });
    },
  },
  getters: {
    carts(state) {
      return state.carts;
    },
    noticeMessage(state) {
      return state.noticeMessage;
    },
    loadingState(state) {
      return state.loadingState;
    },
  },
});
