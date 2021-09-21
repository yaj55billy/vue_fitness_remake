import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    carts: [],
  },
  mutations: {
    setCarts(state, payload) {
      state.carts = payload;
    },
  },
  actions: {
    getCarts({ commit }) {
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      axios
        .get(url)
        .then((res) => {
          commit("setCarts", res.data.data);
          // this.carts = res.data.data;
        })
        .catch(() => {
          commit("setCarts", 0);
          // this.carts = 0;
        });
    },
  },
  getters: {
    carts(state) {
      return state.carts;
    },
  },
});
