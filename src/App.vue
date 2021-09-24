<template>
  <Toast />
  <loading v-model:active="isLoading" />
  <!-- :can-cancel="true" -->
  <!-- :on-cancel="onCancel" -->
  <router-view></router-view>
</template>

<script>
import Toast from "@/components/Toast.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Toast,
    Loading,
  },
  setup() {
    const store = useStore();
    const isLoading = computed(() => {
      return store.getters.loadingState;
    });
    // const isLoading = ref(false);
    onMounted(() => {
      AOS.init();
      // isLoading.value = true;
      // setTimeout(() => {
      //   isLoading.value = false;
      // }, 3000);
    });

    return {
      isLoading,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/main";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
