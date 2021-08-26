<template>
  <div class="topbar">
    <ul>
      <li class="active">
        <router-link to="/discover">发现音乐</router-link>
      </li>
      <li><router-link to="/my">我的音乐</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
// import { toRefs } from "vue";
export default {
  // setup() {},
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
