<script setup>
import { ref } from "@vue/reactivity";

const isOpen = ref(false);
const btnToggle = () => {
  isOpen.value = !isOpen.value;
};
const todosFilter = ref([
  {
    icon: "star_outlined",
    title: "Important",
  },
  {
    icon: "done",
    title: "Completed",
  },
  {
    icon: "delete_outlined",
    title: "Deleted",
  },
]);
const todosFilterTwo = ref([
  {
    color: "bg-primary",
    title: "Team",
  },
  {
    color: "bg-warning-lighten-1",
    title: "Medium",
  },
  {
    color: "bg-info-lighten-1",
    title: "Low",
  },
  {
    color: "bg-error",
    title: "High",
  },
  {
    color: "bg-primary",
    title: "Update",
  },
]);

const todos = ref([
  {
    img: "/src/assets/images/faces/1.jpg",
    title: "Plan a party for development team 🎁",
    status: "Low",
  },
  {
    img: "/src/assets/images/faces/2.jpg",
    title: "Development team Meeting",
    status: "Medium",
  },
  {
    img: "/src/assets/images/faces/3.jpg",
    title: "Plan a party for development team 🎁",
    status: "High",
  },
  {
    img: "/src/assets/images/faces/4.jpg",
    title: "Development team Meeting",
    status: "Normal",
  },
  {
    img: "/src/assets/images/faces/1.jpg",
    title: "Plan a party for development team 🎁",
    status: "Low",
  },
  {
    img: "/src/assets/images/faces/2.jpg",
    title: "Development team Meeting",
    status: "Medium",
  },
  {
    img: "/src/assets/images/faces/3.jpg",
    title: "Plan a party for development team 🎁",
    status: "High",
  },
  {
    img: "/src/assets/images/faces/4.jpg",
    title: "Development team Meeting",
    status: "Normal",
  },
]);
</script>
<template>
  <v-container>
    <v-btn class="btn-box-toggle" flat @click="btnToggle"
      ><i class="tio- text-secondary text-18">menu_hamburger</i></v-btn
    >
    <div class="box-wrapper">
      <div :class="isOpen ? 'open' : ''" class="box-sidebar p-card">
        <v-btn block flat color="primary" class="text-capitalize mb-5"
          ><i class="tio- text-18 me-2">add_square_outlined</i>Add Task</v-btn
        >

        <router-link
          to="#"
          class="text-decoration-none sidebar-link active mb-3"
        >
          <i class="tio- me-2 text-18">email_outlined</i>
          My Task
        </router-link>
        <router-link
          v-for="(item, index) in todosFilter"
          :key="index"
          to="#"
          class="text-decoration-none sidebar-link mb-3"
        >
          <i class="tio- me-2 text-18">{{ item.icon }}</i>
          {{ item.title }}
        </router-link>
        <div class="mb-8"></div>
        <div class="f-600 mb-3">Tags</div>
        <router-link
          v-for="(item, index) in todosFilterTwo"
          :key="index"
          to="#"
          class="text-decoration-none sidebar-link mb-3"
        >
          <div class="d-flex align-center">
            <div :class="item.color" class="pa-1 rounded-circle me-2"></div>
            <div class="text-body-2 f-600">{{ item.title }}</div>
          </div>
        </router-link>
      </div>

      <div class="box-container p-card">
        <v-text-field variant="outlined" label="Search"></v-text-field>

        <div
          v-for="(item, index) in todos"
          :key="index"
          class="bb-secondary d-flex flex-column pb-4 pb-md-0 flex-md-row justify-space-between align-center flex-wrap align-center mb-5"
        >
          <div class="d-flex align-center">
            <v-checkbox
              color="primary"
              label=""
              hide-details
              class="me-2"
            ></v-checkbox>
            <div class="text-caption f-600">
              {{ item.title }}
            </div>
          </div>
          <div class="d-flex align-center">
            <div class="bg-primary text-caption px-3 py-2 rounded me-2">
              {{ item.status }}
            </div>
            <div class="text-caption text-secondary font-weight-medium me-2">
              02.05.21
            </div>
            <v-avatar size="30">
              <v-img :src="item.img"></v-img>
            </v-avatar>
          </div>
        </div>
      </div>
      <div
        @click="isOpen = false"
        :class="isOpen ? 'open' : ''"
        class="box-overlay"
      ></div>
    </div>
  </v-container>
</template>
<style lang="scss" scoped>
.btn-box-toggle {
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
}
.sidebar-link {
  color: #647283;
  font-weight: 600;
  display: block;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 14px;
  &.active {
    background-color: #e6f3ff;
    color: #0a68ff;
  }
  &:hover {
    background-color: #e6f3ff;
    color: #0a68ff;
  }
}
.box-wrapper {
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  .box-sidebar {
    width: 260px;
    background-color: #fff;
    border-radius: 8px;
    height: 100%;
    @media (max-width: 1200px) {
      position: fixed;
      left: -260px;
      top: 0;
      z-index: 999;
      height: 100vh;
      transition: all 0.2s ease-in;
      &.open {
        left: 0;
      }
    }
  }
  .box-container {
    width: 100%;
    margin-left: 28px;
    background-color: #fff;
    @media (max-width: 1200px) {
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
    &.open {
      display: block;
    }
  }
}

.invoice-list {
  display: block;
  width: 100%;
  overflow-x: auto;
  .card {
    background-color: transparent;
  }
}
</style>
