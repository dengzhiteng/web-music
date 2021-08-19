<template>
  <div class="discover">
    <h1>discover</h1>
  </div>
</template>
<script lang="ts">
import { getUserdetail } from "@/api/common";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    getUserdetail("1340100329");
  },
});
</script>
