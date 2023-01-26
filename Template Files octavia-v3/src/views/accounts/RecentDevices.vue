<script setup>
import Account from "@/components/Account.vue";
import { reactive } from "@vue/reactivity";
import TableLite from "vue3-table-lite";
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "Browser",
      field: "browser",
      width: "30%",
      sortable: true,
    },
    {
      label: "Devices",
      field: "devices",
      width: "30%",
      sortable: true,
    },
    {
      label: "Location",
      field: "location",
      width: "20%",
      sortable: true,
    },
    {
      label: "Most Recent Activity",
      field: "activity",
      width: "20%",
      sortable: true,
    },
  ],
  rows: [
    {
      browser: {
        img: "/src/assets/images/browsers/chrome.png",
        title: "Dribble On Windows",
      },
      devices: {
        icon: "laptop",
        title: "Acer Nitro 5",
      },
      location: "London UK",
      activity: "Now",
    },
    {
      browser: {
        img: "/src/assets/images/browsers/mozilla-firefox.png",
        title: "Mozilla Firefox on ios",
      },
      devices: {
        icon: "iphone",
        title: "Iphone 14pro Max",
      },
      location: "California",
      activity: "26 Aug 2021 12:00",
    },
    {
      browser: {
        img: "/src/assets/images/browsers/opera.png",
        title: "Opera on windows",
      },
      devices: {
        icon: "monitor",
        title: "Microsoft Studio 2",
      },
      location: "Georgia",
      activity: "26 Aug 2021 12:00",
    },
    {
      browser: {
        img: "/src/assets/images/browsers/ie.png",
        title: "Exploler on windows",
      },
      devices: {
        icon: "iphone",
        title: "Iphone X",
      },
      location: "Santa Monica",
      activity: "26 Aug 2021 12:00",
    },
    {
      browser: {
        img: "/src/assets/images/browsers/safari.png",
        title: "Safari on MacOS",
      },
      devices: {
        icon: "monitor",
        title: "Imac",
      },
      location: "Los Angeles",
      activity: "26 Aug 2021 12:00",
    },
  ],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
});
</script>

<template>
  <v-container>
    <Account>
      <base-card class="pa-0">
        <div class="d-flex flex-wrap justify-space-between align-center">
          <v-card-title class="px-card pt-4 mb-0 pb-0 text-body-2 f-600"
            >Recent Devices</v-card-title
          >
          <v-card-subtitle class="text-caption text-secondary"
            >View and manage devices where you're currently logged
            in.</v-card-subtitle
          >
        </div>
        <perfect-scrollbar class="table">
          <table-lite
            :is-slot-mode="true"
            :columns="table.columns"
            :rows="table.rows"
            :total="table.totalRecordCount"
            :is-hide-paging="true"
          >
            <template v-slot:browser="data">
              <div class="d-flex align-center">
                <v-avatar rounded size="26" class="me-2 flex-shrink-0">
                  <img
                    class="flex-shrink-0 w-full"
                    :src="data.value.browser.img"
                    alt=""
                  />
                </v-avatar>
                <div class="text-caption font-weight-medium">
                  Dribble On Windows
                </div>
              </div>
            </template>
            <template v-slot:devices="data">
              <div class="d-flex align-center">
                <i class="text-18 text-secondary tio- me-2">{{
                  data.value.devices.icon
                }}</i>
                <div class="text-caption text-secondary font-weight-medium">
                  {{ data.value.devices.title }}
                </div>
              </div>
            </template>
          </table-lite>
        </perfect-scrollbar>
      </base-card>
    </Account>
  </v-container>
</template>
<style lang="scss" scoped>
.text-dark {
  color: #000;
}
.vertical-line {
  height: 100%;
  display: flex;
  width: 1px;
  background-color: #e9eff6;
}
::v-deep(.vtl-tbody-td span) {
  font-size: 12px;
  font-weight: 600;
  color: #011e3d;
}

::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  background-color: transparent;
  border-color: transparent;
  color: #131e3e;
  font-weight: 600;
  border-bottom: 1px solid #cee8ff;
  white-space: nowrap;
}
::v-deep(.vtl-thead-column) {
  font-size: 12px;
  font-weight: 600;
  color: #011e3d;
}
::v-deep(.vtl-thead-tr) {
  background-color: #f2f9ff;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  vertical-align: middle;
  font-weight: 500;
  color: #647283;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
::v-deep(.vtl-table td span) {
  white-space: nowrap;
}

::v-deep(.vtl-tbody-tr) {
  border-bottom: 1px solid #cee8ff !important;
}
::v-deep(.vtl-paging-pagination-page-link) {
  border: none !important;
}
</style>
