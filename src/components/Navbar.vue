<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top shadow">
    <router-link to="/" class="navbar-brand logo">
      FitSpace
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse justify-content-end"
      id="navbarNavAltMarkup"
    >
      <div class="navbar-nav">
        <router-link to="/about" class="nav-item nav-link"
          >關於我們</router-link
        >
        <router-link to="/products" class="nav-item nav-link"
          >課程列表</router-link
        >
        <router-link to="/qa" class="nav-item nav-link">常見問題</router-link>
        <router-link to="/contact" class="nav-item nav-link"
          >聯絡我們</router-link
        >
        <router-link to="/cart" class="nav-item nav-link">
          <i class="fas fa-shopping-cart"></i>
          <span class="badge badge-light">{{ carts.length }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
// import axios from "axios";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("getCarts");
    });

    const carts = computed(() => store.getters.carts);

    return {
      carts,
    };
  },
  beforeCreate() {
    console.log("-------------");
    console.log("Navbar beforeCreate");
    console.log("-------------");
  },
  created() {
    console.log("-------------");
    console.log("Navbar created");
    console.log("-------------");
  },
  beforeMount() {
    console.log("-------------");
    console.log("Navbar beforeMount");
    console.log("-------------");
  },
  mounted() {
    console.log("-------------");
    console.log("Navbar mounted");
    console.log("-------------");
  },
  beforeUnmount() {
    console.log("-------------");
    console.log("Navbar beforeUnmount");
    console.log("-------------");
  },
  unmounted() {
    console.log("-------------");
    console.log("Navbar unmounted");
    console.log("-------------");
  },
};
</script>
