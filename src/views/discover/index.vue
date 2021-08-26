<template>
  <div class="discover">
    <h1>discover</h1>
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { getUserdetail } from "@/api/common";
import { personalized } from "@/api/discover";

export default defineComponent({
  setup() {
    getUserdetail("1340100329");
    personalized(30);
  },
});
</script>
