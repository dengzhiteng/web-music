<template>
  <div class="discover">
    <h4>书名</h4>
    <ul>
      <li v-for="item in books" :key="item.id">{{ item.name }}</li>
    </ul>
    <div>
      <input v-model="bookNum" placeholder="edit me" />
      <p>bookNumDouble {{ bookNumDouble }}</p>
      <p>count {{ count }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { toRefs, ref, reactive, computed, provide } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const state = reactive({
      bookNum: 1,
      books: [
        {
          id: "11",
          name: "《围城1》",
        },
        {
          id: "22",
          name: "《围城2》",
        },
        {
          id: "33",
          name: "《围城3》",
        },
        {
          id: "44",
          name: "《围城4》",
        },
      ],
    });
    const bookNumDouble = computed(() => {
      return state.bookNum * 2;
    });
    const count = ref(111);
    provide("info", "你妹的");
    const store = useStore();
    console.log(store.state.userInfo);

    return {
      ...toRefs(state),
      bookNumDouble,
      count,
    };
  },
};
</script>
