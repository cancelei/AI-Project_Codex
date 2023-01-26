<script setup>
import { ref } from "vue";
import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
const menu = ref([
  {
    header: "Main Navigation",
    hiddenOnCollapse: true,
  },
  {
    href: "/dashboards/crm",
    title: "Dashboard",
    icon: "fa fa-user",
  },
  {
    // href: "/charts",
    title: "Charts",
    icon: "fa fa-chart-area",
    child: [
      {
        href: "/charts/sublink",
        title: "Sub Link",
      },
    ],
  },
]);
const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <sidebar-menu @update:collapsed="onToggleCollapse" :menu="menu" />
</template>
