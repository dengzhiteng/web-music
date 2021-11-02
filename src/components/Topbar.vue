<template>
  <div class="topbar">
    <ul>
      <li
        :class="{ active: routePath == item.path }"
        v-for="item in routeList"
        :key="item.name"
      >
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { watch, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const routeList = [
      {
        path: "/home",
        name: "发现音乐",
      },
      {
        path: "/my",
        name: "我的音乐",
      },
    ];
    const state = reactive({
      routePath: "",
      routeList,
    });
    const route = useRoute();
    watch(
      () => route.path,
      () => {
        state.routePath = route.path;
      }
    );
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped lang="scss">
.topbar {
  position: relative;
  background: #242424;
  border-bottom: 1px solid #000;
  ul {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
    li {
      float: left;
      padding: 0 20px;
      a {
        text-decoration: none;
        color: #fff;
        height: 70px;
        line-height: 70px;
      }
    }
    li.active {
      background: #000;
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>
