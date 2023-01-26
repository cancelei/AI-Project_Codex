<script setup>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
import SidebarTwo from "./SidebarTwo.vue";
import SidebarTwoTest from "./SidebarTwoTest.vue";
import Footer from "./Footer.vue";
import Spinner from "@/components/Spinner.vue";
import { ref } from "@vue/reactivity";

const isSidebar = ref(false);
function sidebarToggle() {
  isSidebar.value = !isSidebar.value;
}
function sidebarCloseOverlay() {
  isSidebar.value = !isSidebar.value;
}
</script>

<template>
  <div class="app-admin-wrap-layout" :class="{ 'sidebar-close': isSidebar }">
    <Spinner />
    <Header
      @sidebarToggle="sidebarToggle"
      @headerDarkToggle="headerDarkToggle"
    />

    <SidebarTwo @sidebarCloseOverlay="sidebarCloseOverlay" />
    <div class="main-content-wrap">
      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <div class="flex-grow-1"></div>
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
