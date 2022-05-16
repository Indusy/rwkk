<template>
  <div class="app-header flex flex-col pt-4">
    <div class="flex justify-around">
      <span class="p-4 text-gray-400 myborder">一起看看</span>
      <NavBar :menus="menuData" />
      <div class="user p-4 text-gray-400 flex items-center">
        <span class="mr-4 myborder">Indusy</span>
        <img class="flex object-cover w-[1.5rem] h-[1.5rem] rounded-full" :src="require('@/assets/logo.png')" alt="Avatar">
      </div>
      <div class="flex items-center">
        <el-button plain circle :icon="Search"></el-button>
        <el-button plain circle :icon="Search"></el-button>
      </div>
    </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/widgets/NavBar.vue";
import { menuData } from "@/mock"
import { Search } from "@element-plus/icons-vue"

defineComponent({
  data() {
    return {
      menuData
    }
  },
  components: { NavBar }
})
</script>