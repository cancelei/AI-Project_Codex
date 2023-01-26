<script setup>
import Account from "@/components/Account.vue";
import { reactive } from "@vue/reactivity";
import TableLite from "vue3-table-lite";
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "Location",
      field: "location",
      width: "20%",
      sortable: true,
    },
    {
      label: "Status",
      field: "status",
      width: "20%",
      sortable: true,
    },
    {
      label: "Device",
      field: "device",
      width: "20%",
      sortable: true,
    },
    {
      label: "IP Address",
      field: "address",
      width: "20%",
      sortable: true,
    },
    {
      label: "Time",
      field: "time",
      width: "20%",
      sortable: true,
    },
  ],
  rows: [
    {
      location: "USA(5)",
      status: "Ok",
      device: "Chrome - Windows",
      address: "236.125.56.78",
      time: "2 mins ago",
    },
    {
      location: "United Kingdom(10)",
      status: "Error",
      device: "	Safari - Mac OS",
      address: "236.125.56.78",
      time: "2 mins ago",
    },
    {
      location: "USA(5)",
      status: "Ok",
      device: "Chrome - Windows",
      address: "236.125.56.78",
      time: "2 mins ago",
    },
    {
      location: "United Kingdom(10)",
      status: "Error",
      device: "	Safari - Mac OS",
      address: "236.125.56.78",
      time: "2 mins ago",
    },
  ],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
});
const tableTwo = reactive({
  isLoading: false,
  columns: [
    {
      label: "Label",
      field: "label",
      width: "20%",
      sortable: true,
    },
    {
      label: "API Keys",
      field: "apiKeys",
      width: "30%",
      sortable: true,
    },
    {
      label: "Created",
      field: "created",
      width: "20%",
      sortable: true,
    },
    {
      label: "Status",
      field: "status",
      width: "20%",
      sortable: true,
    },
    {
      label: "Action",
      field: "action",
      width: "10%",
      sortable: true,
    },
  ],
  rows: [
    {
      label: "none set",
      created: "Nov 12, 2021",
      status: "Active",
      apiKeys: "fftt456765gjkkjhi83093985",
    },
    {
      label: "Navitare",
      created: "Nov 12, 2021",
      status: "Review",
      apiKeys: "fftt456765gjkkjhi83093985",
    },
    {
      label: "Docs API Key",
      created: "Nov 12, 2021",
      status: "Inactive",
      apiKeys: "fftt456765gjkkjhi83093985",
    },
    {
      label: "Remore Interface",
      created: "Nov 12, 2021",
      status: "Review",
      apiKeys: "fftt456765gjkkjhi83093985",
    },
    {
      label: "none set",
      created: "Nov 12, 2021",
      status: "Active",
      apiKeys: "fftt456765gjkkjhi83093985",
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
      <base-card class="pa-0" card-title="Api Overview">
        <div class="p-card">
          <v-row>
            <v-col cols="12" lg="6">
              <div class="text-caption f-600">How to set Api</div>
              <div class="text-caption mb-3">
                Use images to enhance your post, improve its flow, add humor and
                explain complex topics
              </div>
              <v-btn class="text-capitalize" color="secondary" flat
                >Get Started</v-btn
              >
            </v-col>
            <v-col cols="12" lg="6">
              <div class="text-caption f-600">Developer Tools</div>
              <div class="text-caption mb-3">
                Plan your blog post by choosing a topic, creating an outline
                conduct research, and checking facts
              </div>
              <v-btn class="text-capitalize" color="secondary" flat
                >Create Rule</v-btn
              >
            </v-col>
            <v-col cols="12">
              <div
                class="pa-6 mb-6 border-primary rounded bg-secondary-lighten-5 d-flex align-center flex-wrap"
              >
                <i class="text-24 text-primary me-3 tio-"
                  >notifications_alert</i
                >
                <div>
                  <div class="text-caption f-600">
                    Two Factor Authentication
                  </div>
                  <div class="text-caption f-500 mw-900">
                    adds an extra layer of security to your account. To log in,
                    in you'll need to provide a 4 digit amazing and create
                    outstanding products to serve your clients
                    <router-link to="#" class="text-decoration-none"
                      >Learn More</router-link
                    >.
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="d-flex justify-space-between align-center p-card pb-0">
          <v-card-title class="mb-0 pa-0 border-bottom text-body-2 f-600"
            >Login Sessions
          </v-card-title>
          <v-btn class="text-capitalize" color="primary" flat>Next</v-btn>
        </div>
        <perfect-scrollbar class="table">
          <table-lite
            :is-slot-mode="true"
            :columns="table.columns"
            :rows="table.rows"
            :total="table.totalRecordCount"
            :is-hide-paging="true"
          >
            <template v-slot:status="data">
              <div
                v-if="data.value.status === 'Ok'"
                class="bg-success-lighten-5 px-4 py-1 d-inline-block rounded-lg"
              >
                <div class="text-success text-caption">
                  {{ data.value.status }}
                </div>
              </div>
              <div
                v-else
                class="bg-error-lighten-5 px-4 py-1 d-inline-block rounded-lg"
              >
                <div class="text-error text-caption">
                  {{ data.value.status }}
                </div>
              </div>
            </template>
          </table-lite>
        </perfect-scrollbar>
        <v-card-title class="mb-0 border-bottom text-body-2 f-600"
          >API Keys
        </v-card-title>
        <perfect-scrollbar class="table">
          <table-lite
            :is-slot-mode="true"
            :columns="tableTwo.columns"
            :rows="tableTwo.rows"
            :total="tableTwo.totalRecordCount"
            :is-hide-paging="true"
          >
            <template v-slot:apiKeys="data">
              <div class="d-flex align-center">
                {{ data.value.apiKeys }}
                <v-btn class="text-capitalize ms-3" size="small" icon flat
                  ><i class="text-20 tio-">copy</i></v-btn
                >
              </div>
            </template>
            <template v-slot:status="data">
              <div
                v-if="data.value.status === 'Active'"
                class="bg-success-lighten-5 px-4 py-1 d-inline-block rounded-lg"
              >
                <div class="text-success text-caption">
                  {{ data.value.status }}
                </div>
              </div>
              <div
                v-else-if="data.value.status === 'Inactive'"
                class="bg-error-lighten-5 px-4 py-1 d-inline-block rounded-lg"
              >
                <div class="text-error text-caption">
                  {{ data.value.status }}
                </div>
              </div>
              <div
                v-else
                class="bg-primary-lighten-5 px-4 py-1 d-inline-block rounded-lg"
              >
                <div class="text-primary text-caption">
                  {{ data.value.status }}
                </div>
              </div>
            </template>
            <template v-slot:action>
              <v-btn class="text-capitalize" icon flat>
                <i class="tio- text-18 text-secondary">delete</i>
              </v-btn>
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
.mw-900 {
  max-width: 900px;
}
.table {
  display: block;
  width: 100%;
  overflow-x: auto;
}
.vertical-line {
  height: 100%;
  display: flex;
  width: 1px;
  background-color: #e9eff6;
}
::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  background-color: transparent;
  border-color: transparent;
  white-space: nowrap;
  color: #131e3e;
  font-weight: 600;
  border-bottom: 1px solid #cee8ff;
}
::v-deep(.vtl-thead-tr) {
  background-color: #cee8ff;
}
::v-deep(.vtl-table td span) {
  white-space: nowrap;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
  border: none;
  vertical-align: middle;
  font-weight: 500;
  color: #647283;
  padding-top: 0.85rem;
  padding-bottom: 0.85rem;
}
::v-deep(.vtl-thead-column) {
  font-size: 12px;
  font-weight: 600;
  color: #88a6c9;
}
::v-deep(.vtl-thead-tr) {
  background-color: #f2f9ff;
}
::v-deep(.vtl-tbody-td span) {
  font-size: 12px;
  font-weight: 600;
  color: #011e3d;
}
::v-deep(.vtl-tbody-tr) {
  border-bottom: 1px solid #cee8ff !important;
}
::v-deep(.vtl-paging-pagination-page-link) {
  border: none;
}
</style>
