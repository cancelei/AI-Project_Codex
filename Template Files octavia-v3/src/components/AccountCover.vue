<script setup>
import { ref } from "@vue/reactivity";

const accountCoverLink = ref([
  {
    title: "Overview",
    to: "/profile/overview",
  },
  {
    title: "Projects",
    to: "/profile/projects",
  },
  {
    title: "Campaign",
    to: "/profile/campaign",
  },
  {
    title: "Documents",
    to: "/profile/documents",
  },
  {
    title: "Connection",
    to: "/profile/connection",
  },
  {
    title: "Activity",
    to: "/profile/activity",
  },
]);
</script>

<template>
  <base-card class="pa-0 mb-7">
    <div class="bg-secondary px-5 pt-10 pb-4 d-flex justify-end">
      <v-btn class="text-capitalize" dark color="primary"
        ><i class="tio- me-2">camera_enhance</i>
        <span class="d-none d-md-block">Update Cover</span></v-btn
      >
    </div>
    <div class="text-center">
      <label
        class="avatar-status-100 basic-information text-center"
        for="imageUpload"
        ><img
          class="avatar-image"
          src="@/assets/images/faces/avatar.png"
          alt=""
        /><span
          class="avatar-badge bg-primary d-flex align-center justify-center"
          ><i class="text-white tio-">photo_camera</i></span
        >
        <input
          class="d-none"
          type="file"
          id="imageUpload"
          accept=".png, .jpg, .jpeg"
        />
      </label>
    </div>
    <div class="text-h6 text-center mb-4">Jhon Wick</div>
    <div class="d-flex justify-center flex-wrap mb-7">
      <div class="d-flex justify-center text-center">
        <div class="d-flex align-center text-secondary">
          <i class="text-20 me-2 tio-">bratislava</i>
          <div class="text-12 f-600">Developer</div>
        </div>
      </div>
      <div class="d-flex justify-center text-center mx-5 text-secondary">
        <i class="text-20 me-2 tio-">date_range</i>
        <div class="text-12 f-600">Joined March 17</div>
      </div>
      <div class="d-flex justify-center text-center text-secondary">
        <i class="text-20 me-2 tio-">poi_</i>
        <div class="text-12 f-600">New York</div>
      </div>
    </div>
    <div
      class="d-flex flex-column flex-md-row align-center justify-center mb-10"
    >
      <base-card class="border-secondary text-center px-10 me-4 mb-4">
        <div class="text-subtitle-2 f-600 text-primary">$4,550</div>
        <div class="text-caption text-secondary font-weight-medium">
          Earnings
        </div>
      </base-card>
      <base-card class="border-secondary text-center px-10 me-4 mb-4">
        <div class="text-subtitle-2 f-600 text-warning">60</div>
        <div class="text-caption text-secondary font-weight-medium">
          Projects
        </div>
      </base-card>
      <base-card class="border-secondary text-center px-10 mb-4">
        <div class="text-subtitle-2 f-600 text-success">$2,800</div>
        <div class="text-caption text-secondary font-weight-medium">
          Success Rate
        </div>
      </base-card>
    </div>
    <div class="d-flex justify-center account-link-list">
      <router-link
        exact
        v-for="(item, index) in accountCoverLink"
        :key="index"
        tag="a"
        :to="item.to"
        class="text-decoration-none f-600 me-8"
        >{{ item.title }}
      </router-link>
    </div>
  </base-card>
</template>
<style lang="scss" scoped>
.account-link-list {
  overflow: auto;
  a {
    color: #647283;
    padding-bottom: 10px;
    &.router-link-active {
      color: #1d4ed8;
      border-bottom: 2px solid #1d4ed8;
    }
  }
}
.avatar-status-100 {
  position: relative;
  display: inline-block;
  .avatar-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 100%;
  }
  .avatar-badge {
    width: 25px;
    height: 25px;
    border: 2px solid white;
    position: absolute;
    bottom: 2%;
    right: 2%;
    border-radius: 100%;
  }
}
.basic-information {
  margin-top: -40px;
}
</style>
