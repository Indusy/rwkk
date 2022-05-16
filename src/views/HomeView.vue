<template>
  <div class="home">
    <RootHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RootHeader from "@/components/RootHeader.vue";

export default defineComponent({
  components: {
    RootHeader
  }

})
</script>