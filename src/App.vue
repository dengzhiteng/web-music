<template>
  <Topbar></Topbar>
  <div class="contenter">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Topbar from "@/components/Topbar.vue";
export default defineComponent({
  components: { Topbar },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 982px;
  background: #f5f5f5;
}
html,
body,
#app {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
.contenter {
  width: 1200px;
  margin: 0 auto;
}
</style>
