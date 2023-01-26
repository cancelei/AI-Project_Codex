<script setup>
import { ref } from "@vue/reactivity";

const isOpen = ref(false);
const accountList = [
  {
    title: "Basic Information",
    icon: "user_outlined",
    link: "/accounts/basic-information",
  },
  {
    title: "Password",
    icon: "lock_outlined",
    link: "/accounts/password",
  },
  {
    title: "Preferences",
    icon: "settings_outlined",
    link: "/accounts/preferences",
  },
  {
    title: "Recent Devices",
    icon: "devices_apple",
    link: "/accounts/recent-devices",
  },
  {
    title: "Notifications",
    icon: "notifications_outlined",
    link: "/accounts/notifications",
  },
  {
    title: "Two-Step verification",
    icon: "fingerprint",
    link: "/accounts/two-step-verification",
  },
  {
    title: "Connected Account",
    icon: "link",
    link: "/accounts/connected-account",
  },
  {
    title: "Social Account",
    icon: "instagram",
    link: "/accounts/social-account",
  },
  {
    title: "Billing",
    icon: "dollar_outlined",
    link: "/accounts/billing",
  },
  {
    title: "Statements",
    icon: "file_outlined",
    link: "/accounts/statements",
  },
  {
    title: "Referrals",
    icon: "premium_outlined",
    link: "/accounts/referrals",
  },
  {
    title: "API Keys",
    icon: "key",
    link: "/accounts/api-keys",
  },
  {
    title: "Delete Your Account",
    icon: "delete_outlined",
    link: "/accounts/delete-account",
  },
];
</script>

<template>
  <div class="box-wrapper">
    <div :class="isOpen ? 'open' : ''" class="box-sidebar">
      <perfect-scrollbar class="py-3">
        <router-link
          v-for="(item, index) in accountList"
          :key="index"
          :to="item.link"
          class="account-link"
        >
          <i class="tio- me-2 text-20">{{ item.icon }}</i>
          <span class="text-caption f-600">{{ item.title }}</span>
        </router-link>
      </perfect-scrollbar>
    </div>
    <div class="box-content">
      <div class="mb-3 btn-account">
        <v-btn @click="isOpen = !isOpen" size="small" flat>
          <i class="tio- text-18">menu_hamburger</i>
        </v-btn>
      </div>
      <slot />
    </div>
    <div
      @click="isOpen = !isOpen"
      :class="isOpen ? 'd-block' : ''"
      class="box-overlay"
    ></div>
  </div>
</template>
<style lang="scss" scoped>
.box-wrapper {
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  .box-sidebar {
    width: 260px;
    background-color: #fff;
    position: relative;

    @media (max-width: "991px") {
      position: fixed;
      top: 0;
      left: -260px;
      z-index: 999;
      height: 100vh;
      transition: all 0.2s ease-in;
      overflow-y: scroll;
      &.open {
        left: 0;
      }
    }
    .router-link-active {
      background-color: #f2f9ff;
      color: #1d4ed8 !important;
      border-left: 4px solid #1d4ed8 !important;
    }
    .account-link {
      padding: 0.725rem;
      display: block;
      text-decoration: none;
      color: #647283;
      border-left: 4px solid transparent;
      &:hover {
        background-color: #f2f9ff;
        color: #1d4ed8;
        border-left: 4px solid #1d4ed8;
      }
    }
  }
  .box-content {
    width: 100%;
    margin-left: 28px;
    @media (max-width: "991px") {
      margin-left: 0;
    }
  }
  .box-overlay {
    position: fixed;
    z-index: 998;
    display: none;
    background-color: #000;
    opacity: 0.5;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
  }
}
.btn-account {
  display: none;
  @media (max-width: "991px") {
    display: block;
  }
}
</style>
