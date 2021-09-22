<template>
  <div
    class="toast fade hide"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    style="position: fixed; top: 20px; right: 20px; min-width: 300px; z-index: 11000"
  >
    <div class="toast-header">
      <svg
        class="bd-placeholder-img rounded mr-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
        <rect width="100%" height="100%" fill="#274555"></rect>
      </svg>
      <strong class="mr-auto">訊息通知</strong>
      <button
        type="button"
        class="ml-2 mb-1 close"
        data-dismiss="toast"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      {{ getNotiveMessage }}
    </div>
  </div>
</template>

<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const getNotiveMessage = computed(() => {
      return store.getters.noticeMessage;
    });

    const triggerFunc = () => {
      $(".toast").toast({
        autohide: false,
      });
      $(".toast").toast("show");
      setTimeout(() => {
        $(".toast").toast("hide");
        store.commit("setNoticeMessage", "");
      }, 3000);
    };

    watch(getNotiveMessage, (newIdx, oldIdx) => {
      if (newIdx !== "") {
        triggerFunc();
        // alert("不等於空值");
      }
    });

    return {
      getNotiveMessage,
    };
  },
  // data() {
  //   return {
  //     message: "123",
  //   };
  // },
  created() {
    // console.log($("img"));
    // this.$bus.$on("notice-user", (acce) => {
    //   this.message = acce;
    //   $(".toast").toast({
    //     autohide: false,
    //   });
    //   $(".toast").toast("show");
    //   setTimeout(() => {
    //     $(".toast").toast("hide");
    //     this.message = "";
    //   }, 3000);
    // });
  },
};
</script>

<style></style>
