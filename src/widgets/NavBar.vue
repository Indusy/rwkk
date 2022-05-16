<template>
  <div class="navbar">
    <nav class="nav flex myborder p-4 justify-between text-white">
      <template v-for="({ href, desc }, index) in menus" :key="index">
        <router-link class="text-gray-400 transition-all  duration-100 hover:text-white mr-14" :to="href">{{ desc }}</router-link>
      </template>
    </nav>
  </div>
</template>

<script lang="ts">
import { MenuItemMeta } from "@/types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    menus: Object as PropType<MenuItemMeta[]>
  },
  data() {
    return {
      
    }
  },
  computed: {

  }
})
</script>

<style scoped>
  .nav a:last-of-type {
    margin-right: 0;
  }
</style>