<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { navigations } from "../data/navigation";
import Icon from "@/components/Icon.vue";

const items = ref(navigations);
const isActive = ref(undefined);
const isToggle = ref(true);
onMounted(() => {
  const dropdownLinks = document.querySelectorAll(".dropdown-link");
  const singleLink = document.querySelectorAll(".single-link");
  const dropdownLinksActive = document.querySelector(".dropdown-link .active");
  const adminWrapLayout = document.querySelector(".app-admin-wrap-layout");
  const dropdownLinkList = document.querySelector(".dropdown-link-list");

  //form
  const formMaterialInput = document.querySelector(".form-material-input");

  const mobileSidebarClose = document.querySelectorAll(".mobileSidebarClose");

  mobileSidebarClose.forEach((e) => {
    e.addEventListener("click", () => {
      adminWrapLayout.classList.remove("sidebar-close");
    });
  });
});

const emits = defineEmits(["sidebarCloseOverlayi"]);
function getSidebarOverlayClose() {
  emits("sidebarCloseOverlay");
}
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
      <div class="sidebar-header">
        <img class="ms-2" src="@/assets/logo.svg" alt="" />
      </div>

      <ul class="nav-links" v-for="(item, index) in items" :key="index">
        <h6 class="ms-3 mb-2 mt-5 group-name">{{ item.name }}</h6>
        <li
          v-if="!item.type"
          :class="isActive === index ? 'active' : ''"
          class="single-link"
          @click="dropdownSingle(index)"
        >
          <router-link
            :to="item.link"
            class="mobileSidebarClose text-decoration-none d-flex align-center"
          >
            <Icon :icon="item.icon" class="mr-2" />
            <span class="font-weight-mediumv text-13">{{ item.name }}</span>
          </router-link>
        </li>
        <li
          v-else
          @click="dropdownToggle(index)"
          :class="isActive === index ? 'active' : ''"
          class="dropdown-link"
        >
          <div class="sub-menu d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              <Icon :icon="item.icon" class="mr-2" />
              <span class="text-13 font-weight-medium">{{ item.name }}</span>
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
                class="mobileSidebarClose text-decoration-none text-13 d-flex align-center"
              >
                <div class="dot"></div>
                {{ itemTwo.name }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
      <div class="bg-secondary-lighten-4 rounded mt-10 text-center">
        <v-avatar size="74" class="sidebar-profile-img">
          <img class="w-full" src="@/assets/images/faces/avatar.png" alt="" />
        </v-avatar>
        <div class="text-13 f-600 mt-2">Jhon Wick</div>
        <div
          class="text-13 font-weight-medium text-secondary-darken-1 pb-4 mb-4"
        >
          Admin
        </div>
      </div>
    </perfect-scrollbar>
    <div class="sidebar-overlay" @click="getSidebarOverlayClose"></div>
  </div>
</template>
<style lang="scss" scoped>
// colors
$sidebarLink: rgb(95, 116, 141);
$primary: rgba(var(--v-theme-primary));
$background: #eef6fd;

// variables
$sidebarWidth: 260px;
$transition: all 0.2s ease-in;
.sidebar-profile-img {
  border: 2px solid #fff;
  margin-top: -33px;
}
.router-link-active {
  .dot {
    position: relative;
    float: left;
    border: 4px solid rgb(36, 153, 239, 0.2);
    background-color: rgb(246, 249, 251, 0.1);
    padding: 0px;
    border-radius: 50%;
    margin-right: 0.5rem;
    &:before {
      display: block;
      content: " ";
      background-color: $primary;
      width: 4px;
      height: 4px;
      border-radius: 50%;
    }
  }
}
.dot {
  position: relative;
  float: left;
  border: 4px solid rgb(36, 153, 239, 0);
  background-color: rgb(246, 249, 251, 0.1);
  padding: 0px;
  border-radius: 50%;
  margin-right: 0.5rem;
  &:before {
    display: block;
    content: " ";
    background-color: rgb(167, 190, 218);
    width: 4px;
    height: 4px;
    border-radius: 50%;
  }
}

.group-name {
  color: rgba(27, 44, 62, 0.87);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
}

.ps {
  height: 100%;
}
.app-admin-wrap-layout {
  position: relative;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  height: 100%;
  transition: all 0.3s ease-in;

  &.sidebar-close {
    .sidebar-content-wrap {
      .sidebar {
        left: -#{$sidebarWidth};
      }
    }
    .header {
      left: -#{$sidebarWidth};
      transition: $transition;
      width: 100%;
    }
    .main-content-wrap {
      margin-left: 0;
      transition: $transition;
      width: 100%;
    }
  }
  .sidebar-content-wrap {
    .sidebar {
      background-color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      width: 260px;
      // max-height: 100vh;
      padding: 20px;
      transition: $transition;

      .sidebar-header {
        margin-bottom: 30px;
      }
      .sidebar-radio-button {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: $primary;
      }
      //   start::router-links
      ul.nav-links {
        padding: 0;
        list-style: none;
        border-radius: 4px;

        li {
          margin-bottom: 8px;
          a {
            color: $sidebarLink;
            display: block;
            padding: 10px;
            transition: $transition;
            border-left: 2px solid #fff;
            font-weight: 500;
          }
          &.single-link {
            border-radius: 0.5rem;

            &:hover {
              background-color: rgba(0, 0, 0, 0.04);
            }
            &.active {
              background-color: rgb(246, 249, 251);

              a {
                color: $primary;
                font-weight: 600;
              }
            }
          }

          &.dropdown-link {
            position: relative;

            border-radius: 4px;
            // padding: 10px;
            display: block;
            .dropdown-link-arrow {
              transform: rotate(270deg);
              transition: $transition;
            }
            &.active {
              //  box-shadow: 0px 4px 28px 3px rgba(28, 85, 128, 0.15);
              box-shadow: none;
              .sub-menu {
                color: $primary !important;
                background-color: rgba(36, 153, 239, 0.08);
              }
              ul {
                // display: block;
                opacity: 1;
                overflow: visible;
                max-height: 100%;
                // max-height: 10rem;
                transition: $transition;
              }
              .dropdown-link-arrow {
                transform: rotate(360deg);
              }
            }
            .sub-menu {
              padding: 10px;
              cursor: pointer;
              color: rgb(95, 116, 141);
              border-radius: 0.5rem;
              margin-bottom: 0.5rem;
              &:hover {
                background-color: rgba(0, 0, 0, 0.04);
              }
            }
          }
          // a {
          //   padding: 10px;
          // }
          ul {
            list-style: none;
            // display: none;
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: $transition;
            padding: 0px;

            li {
              cursor: pointer;
              // &.active {
              //   a {
              //     background-color: #e5f3fd;
              //     border-left: 2px solid $primary;
              //   }
              // }
              a {
                color: $sidebarLink;
                display: block;
                padding: 10px;
                transition: $transition;
                border-left: 2px solid #fff;
                border-radius: 0.5rem;
                &:hover {
                  background-color: rgba(0, 0, 0, 0.04);
                }
                &.active {
                  background-color: rgb(246, 249, 251);
                  color: $primary;
                  font-weight: 600;
                }
              }
            }
          }
        }
      }
      //   end::router-links
    }
  }
  .header {
    position: fixed;
    width: calc(100% - #{$sidebarWidth});
    top: 0;
    left: 0;
    transition: $transition;
    margin-left: 260px;
    align-items: center;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 99;
    background: rgba(238, 246, 253, 0.05);
    backdrop-filter: blur(5px);
  }

  .main-content-wrap {
    width: calc(100% - #{$sidebarWidth});
    margin-left: $sidebarWidth;
    height: calc(100vh - 62px);
    padding: 30px;
    transition: $transition;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
}

@media (max-width: "1200px") {
  .app-admin-wrap-layout {
    position: relative;
    height: 100%;
    transition: all 0.3s ease-in;
    // @media (max-width: "1200px") {
    //   left: -#{$sidebarWidth};
    //   &.open {
    //     left: 0;
    //   }
    // }

    &.sidebar-close {
      .sidebar-content-wrap {
        .sidebar {
          left: 0;
        }
        .sidebar-overlay {
          display: block;
        }
      }
      .header {
        left: 0;
        transition: $transition;
      }
      .main-content-wrap {
        margin-left: 0;
        transition: $transition;
        width: 100%;
      }
    }
    .sidebar-content-wrap {
      .sidebar {
        background-color: #fff;
        position: fixed;
        top: 0;
        z-index: 999;
        left: -#{$sidebarWidth};
        width: 260px;
        height: 100%;
        padding: 20px;
        transition: $transition;
        .sidebar-header {
          margin-bottom: 30px;
        }
        .sidebar-radio-button {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: $primary;
        }
        //   start::router-links

        //   end::router-links
      }
      .sidebar-overlay {
        position: fixed;
        z-index: 902;
        display: none;
        background-color: #000;
        opacity: 0.5;
        height: 100%;
        width: 100%;
        top: 0;
      }
    }
    .header {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      transition: $transition;
      margin-left: 0;
      align-items: center;
      padding: 30px;
      display: flex;
      justify-content: space-between;
      height: 60px;
      z-index: 99;
      background-color: $background;
      background: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(5px);
    }

    .main-content-wrap {
      width: 100%;
      margin-left: 0;
      padding: 30px;
      transition: $transition;
      margin-top: 60px;
    }
  }
}
</style>
