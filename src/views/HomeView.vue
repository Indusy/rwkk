<template>
  <div class="home">
    <RootHeader />
    <MainContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RootHeader from "@/components/RootHeader.vue";
import MainContent from "@/components/MainContent.vue";

export default defineComponent({
  components: {
    RootHeader,
    MainContent
}

})
</script>