<template>
  <Navbar></Navbar>
  <div class="position-relative banner">
    <div class="position-absolute banner-prodbg"></div>
    <div class="container d-flex flex-column banner-body banner-body-prod">
      <div class="row justify-content-center my-auto">
        <div
          class="col-md-6 banner-textarea"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h3 class="banner-textarea__title">課程列表</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="container prod">
    <div class="congratulate">
      <i class="fas fa-bullhorn congratulate-icon"></i>
      <p class="congratulate-text">
        慶祝 <span class="font-ubuntu">FitSpace</span>
        網站開幕，在 12/31 前，結帳輸入 fitspacegogo8 就享有課程售價 8 折優惠。
      </p>
    </div>
    <ul class="list-unstyled prod-filter">
      <li class="prod-filter__list">
        <a
          href="#"
          class="btn btn-outline-primary btn-sm rounded-pill"
          :class="{ active: nowCategory === '全部課程' }"
          @click.prevent="productHandler('全部課程')"
        >
          全部課程
        </a>
      </li>
      <li v-for="item in classSort" :key="item" class="prod-filter__list">
        <a
          href="#"
          class="btn btn-outline-primary btn-sm rounded-pill"
          :class="{ active: item === nowCategory }"
          @click.prevent="productHandler(item)"
          >{{ item }}</a
        >
      </li>
    </ul>
    <div class="row mt-4">
      <div class="col-lg-4 col-md-6" v-for="item in nowProducts" :key="item.id">
        <div class="card prod-card mb-4">
          <div class="prod-pic">
            <img
              :src="item.imageUrl[0]"
              class="card-img-top"
              :alt="item.title"
            />
            <a
              href="javascript:"
              class="prod-cart"
              @click.prevent="addToCart(item.id)"
            >
              <i class="fas fa-cart-plus"></i>
            </a>
          </div>
          <div class="card-body prod-body text-left">
            <h4 class="mb-0">{{ item.title }}</h4>
            <p class="text-muted mt-3 prod-content">{{ item.content }}</p>
            <div class="prod-price">
              <div class="float-left">
                <!-- <del>NT${{ item.origin_price | toThousands }}</del> -->
                <del>NT${{ item.origin_price }}</del>
              </div>
              <div class="float-right prod-price__special">
                <!-- NT${{ item.price | toThousands }} -->
                NT${{ item.price }}
              </div>
            </div>
          </div>
          <router-link
            :to="`/product/${item.id}`"
            class="prod-link"
          ></router-link>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { apiGetProducts, apiPostAddCart } from "@/api.js";
export default {
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const store = useStore();
    const productsTemp = ref([]);
    const nowProducts = ref([]);
    const nowCategory = ref("");
    const getProducts = () => {
      apiGetProducts()
        .then((res) => {
          console.log(res.data.data);
          productsTemp.value = res.data.data;
          nowProducts.value = res.data.data;
        })
        .catch(() => {
          productsTemp.value = [];
          nowProducts.value = [];
        });
    };

    const classSort = computed(() => {
      // 這可再思考其他方式
      return productsTemp.value
        .map((item) => item.category)
        .filter((element, index, arr) => arr.indexOf(element) === index);
    });

    const addToCart = (id, quantity = 1) => {
      
      const cart = {
        product: id,
        quantity,
      };

      apiPostAddCart(cart)
        .then(() => {
          store.dispatch("getCarts");
          store.commit("setNoticeMessage", "商品已成功加入購物車");
          // this.isLoading = false;
        })
        .catch((error) => {
          console.log("加入購物車失敗");
          store.commit("setNoticeMessage", error.response.data.errors[0]);
          // this.isLoading = false;
        });
    };

    const productHandler = (catchVal = "全部課程") => {
      nowProducts.value = [];
      if (catchVal === "全部課程") {
        nowCategory.value = catchVal;
        nowProducts.value = productsTemp.value;
      } else {
        productsTemp.value.forEach((item) => {
          if (item.category === catchVal) {
            nowCategory.value = item.category;
            nowProducts.value.push(item);
          }
          return nowProducts.value;
        });
      }
    };

    onMounted(() => {
      getProducts();
      productHandler();
    });

    return {
      nowProducts,
      classSort, // 課程分類
      nowCategory,
      addToCart, // 加入購物車
      productHandler,
    };
  },
};
</script>

<style></style>
