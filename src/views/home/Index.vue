<template>
  <div class="home">
    <Header></Header>
    <SlidBar></SlidBar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import { toRefs, ref, reactive, computed, provide } from "vue";
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
import SlidBar from "../layout/SlidBar.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    SlidBar,
  },
  setup() {
    const state = reactive({
      bookNum: 1,
      books: [],
    });
    const bookNumDouble = computed(() => {
      return state.bookNum * 2;
    });
    const count = ref(111);
    provide("info", "11");
    return {
      ...toRefs(state),
      bookNumDouble,
      count,
    };
  },
};
</script>
