<script setup>
import Account from "@/components/Account.vue";
import { reactive } from "@vue/reactivity";
import TableLite from "vue3-table-lite";
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "Type",
      field: "type",
      width: "40%",
      sortable: true,
    },
    {
      label: "Email",
      field: "email",
      width: "20%",
      sortable: true,
    },
    {
      label: "Browser",
      field: "browser",
      width: "20%",
      sortable: true,
    },
    {
      label: "App",
      field: "app",
      width: "20%",
      sortable: true,
    },
  ],
  rows: [
    {
      type: "New For You",
    },
    {
      type: "Account activity ",
    },
    {
      type: "A new device is linked",
    },
    {
      type: "A new device connected",
    },
    {
      type: "Billing Updates",
    },
    {
      type: "Completed Projects",
    },
    {
      type: "Newsletters",
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
        <div class="p-card">
          <v-card-title class="pa-0 text-body-2 f-600"
            >Notifications</v-card-title
          >
          <div class="text-caption text-secondary">
            We need permission from your browser to show notifications.
            <router-link to="#" class="text-decoration-none"
              >Request permission</router-link
            >
          </div>
        </div>
        <perfect-scrollbar class="table">
          <table-lite
            :is-slot-mode="true"
            :columns="table.columns"
            :rows="table.rows"
            :total="table.totalRecordCount"
            :is-hide-paging="true"
          >
            <template v-slot:email>
              <v-checkbox color="primary" hide-details></v-checkbox>
            </template>
            <template v-slot:browser>
              <v-checkbox color="primary" hide-details></v-checkbox>
            </template>
            <template v-slot:app>
              <v-checkbox color="primary" hide-details></v-checkbox>
            </template>
          </table-lite>
        </perfect-scrollbar>
        <div class="p-card">
          <v-row>
            <v-col cols="12" lg="4">
              <v-text-field
                label="When should we send you notifications ? "
                color="primary"
                variant="outlined"
                hide-details="true"
              ></v-text-field>

              <div class="text-caption text-secondary">
                In order to cut back on noise, email notifications are grouped
                together and only sent when you're idle or offline.
              </div>
            </v-col>
            <v-col cols="12">
              <div class="d-flex flex-wrap">
                <v-btn class="text-capitalize me-3 mb-3" color="primary" flat
                  >Save Changes</v-btn
                >
                <v-btn flat class="text-capitalize me-3 mb-3 border-secondary"
                  >Cancel</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>
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
  color: #88a6c9;
}

::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  background-color: transparent;
  border-color: transparent;
  color: #131e3e;
  font-weight: 600;
  border-bottom: 1px solid #cee8ff;
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
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}
::v-deep(.vtl-tbody-tr) {
  border-bottom: 1px solid #cee8ff !important;
}
::v-deep(.vtl-paging-pagination-page-link) {
  border: none !important;
}
</style>
