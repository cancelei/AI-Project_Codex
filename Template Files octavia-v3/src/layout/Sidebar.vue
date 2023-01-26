<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { navigations } from "../data/navigation";

const items = ref(navigations);
const isActive = ref(undefined);
const isToggle = ref(true);
onMounted(() => {
  const dropdownLinks = document.querySelectorAll(".dropdown-link");
  const singleLink = document.querySelectorAll(".single-link");
  const dropdownLinksActive = document.querySelector(".dropdown-link .active");
  const adminWrapLayout = document.querySelector(".app-admin-wrap-layout");
  const dropdownLinkList = document.querySelector(".dropdown-link-list");
  // header-sidebar
  const headerBtn = document.querySelector(".header-btn-toggle");
  const sidebarOverlay = document.querySelector(".sidebar-overlay");

  //form
  const formMaterialInput = document.querySelector(".form-material-input");

  // dropdown menu functionality
  // dropdownLinks.forEach((btn) => {
  //   btn.addEventListener("click", (e) => {
  //     if (!btn.classList.contains("active")) {
  //       singleLink.forEach((s) => s.classList.remove("active"));
  //       dropdownLinks.forEach((x) => x.classList.remove("active"));
  //       btn.classList.add("active");
  //     } else {
  //       btn.classList.remove("active");
  //     }
  //   });
  // });

  // END::menu functionality

  // if (headerBtn) {
  //   headerBtn.addEventListener("click", () => {
  //     adminWrapLayout.classList.toggle("sidebar-close");
  //   });
  //   sidebarOverlay.addEventListener("click", () =>
  //     adminWrapLayout.classList.remove("sidebar-close")
  //   );
  // }
});
const dropdownToggle = (index) => {
  isActive.value = index;
};
const dropdownSingle = (index) => {
  isActive.value = index;
};
</script>

<template>
  <div class="sidebar-content-wrap">
    <perfect-scrollbar class="sidebar">
      <div class="sidebar-header d-flex align-center">
        <img class="me-2" src="@/assets/logo.svg" alt="" />
        <h3 class="mb-0 f-600">Nitro</h3>
      </div>

      <ul class="nav-links" v-for="(item, index) in items" :key="index">
        <li
          v-if="!item.type"
          :class="isActive === index ? 'active' : ''"
          class="single-link"
          @click="dropdownSingle(index)"
        >
          <router-link
            :to="item.link"
            class="text-decoration-none d-flex align-center"
          >
            <i class="me-2 tio- text-20">account_square_outlined</i>
            <span class="f-600 text-subtitle-2">{{ item.name }}</span>
          </router-link>
        </li>
        <li
          v-else
          @click="dropdownToggle(index)"
          :class="isActive === index ? 'active ' : ''"
          class="dropdown-link text-subtitle-2"
        >
          <div class="sub-menu d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              <i class="text-20 me-2 tio-">{{ item.icon }}</i
              ><span class="text-14 f-600">{{ item.name }}</span>
            </div>
            <i class="h3 tio- dropdown-link-arrow"> chevron_down </i>
          </div>
          <ul class="dropdown-link-list">
            <li
              v-for="(itemTwo, indexTwo) in item.sub"
              class="mb-2"
              :key="indexTwo"
            >
              <router-link
                exact
                :to="itemTwo.link"
                :class="itemTwo.name == $route.name ? 'active' : ''"
                class="text-decoration-none text-caption"
              >
                <i class="me-2 tio-">circle_outlined</i>{{ itemTwo.name }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </perfect-scrollbar>
    <div class="sidebar-overlay"></div>
  </div>
</template>
<style lang="scss" scoped>
.ps {
  height: 100%;
}
</style>
