<script setup>
import { crmOne, crmTwo, tasks } from "@/data/crm.js";
import { ref, reactive } from "@vue/reactivity";
import crmImportImg from "@/assets/images/crm-lead.svg";
import TableLite from "vue3-table-lite";
const crmImg = ref(crmImportImg);
const table = reactive({
  isLoading: false,
  columns: [
    
    {
      label: "Name",
      field: "name",
      width: "20%",
      sortable: false,
    },
    {
      label: "Username",
      field: "username",
      width: "20%",
      sortable: false,
    },
    {
      label: "Email",
      field: "email",
      width: "20%",
      sortable: false,
    },
    {
      label: "Role",
      field: "role",
      width: "20%",
      sortable: false,
    },
    {
      label: "Edit",
      field: "edit",
      width: "20%",
      sortable: false,
    },
  ],
  rows: [
    {
      name: {
        img: "/src/assets/images/faces/1.jpg",
        title: "Zachary Gomez",
      },

      username: "zachary-gomez",
      email: "zachary-gomez@gmail.com",
      role: "Editor",
    },
    {
      name: {
        img: "/src/assets/images/faces/2.jpg",
        title: "Amanda Montgomery",
      },

      username: "amanda-montgomery",
      email: "zachary-gomez@gmail.com",
      role: "Subscriber",
    },
    {
      name: {
        img: "/src/assets/images/faces/3.jpg",
        title: "Lester Holland",
      },

      username: "lester-holland",
      email: "lester75@gmail.com",
      role: "Subscriber",
    },
    {
      name: {
        img: "/src/assets/images/faces/4.jpg",
        title: "Zachary Gomez",
      },

      username: "zachary-gomez",
      email: "zachary-gomez@gmail.com",
      role: "Editor",
    },
  ],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
});
const updateCheckedRows = (rowsKey) => {
  console.log(rowsKey);
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="4" lg="5">
        <base-card class="h-100 grid align-center">
          <div class="d-flex justify-center justify-md-space-between">
            <div class="flex-1">
              <div class="text-body-2 font-weight-bold">Leads Converteds</div>
              <div class="text-h5 text-primary font-weight-bold mb-4">80%</div>
              <div class="d-flex align-center">
                <div
                  class="bg-primary-lighten-5 d-inline-flex rounded-circle px-2 py-2 me-2"
                >
                  <i class="tio-chart_pie_1 text-primary"></i>
                </div>
                <div class="body-text-2 f-600 text-primary">56 out of 70</div>
              </div>
            </div>

            <div class="flex-1 d-none d-sm-block">
              <v-img
                class="ms-auto"
                max-width="180px"
                height="100%"
                :src="crmImg"
              ></v-img>
            </div>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" xl="8" lg="7">
        <base-card class="h-100 grid">
          <div class="d-flex justify-space-between flex-wrap align-center">
            <div class="d-flex align-center ma-3">
              <div class="rounded-lg me-3 bg-primary pa-2">
                <i class="text-white text-20 tio-">money</i>
              </div>

              <div>
                <div class="body-text-2 f-600">Invoice Payments</div>
                <div class="text-18 f-600 text-primary">80</div>
              </div>
            </div>
            <v-divider
              vertical
              class="text-secondary-lighten-4 flex-1 d-none d-md-block"
            ></v-divider>
            <div class="d-flex align-center ma-3">
              <div class="rounded-lg me-3 bg-info pa-2">
                <i class="text-white text-20 tio-">cloud_on</i>
              </div>

              <div>
                <div class="body-text-2 f-600">Project In Progress</div>
                <div class="text-18 f-600 text-info">150</div>
              </div>
            </div>
            <v-divider
              vertical
              class="text-secondary-lighten-4 d-none d-md-block"
            ></v-divider>
            <div class="d-flex align-center ma-3">
              <div class="rounded-lg me-3 bg-error pa-2">
                <i class="text-white text-20 tio-">hourglass_quarter</i>
              </div>

              <div>
                <div class="body-text-2 f-600">Task Not Finished</div>
                <div class="text-18 f-600 text-error">22</div>
              </div>
            </div>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="8">
        <v-row>
          <v-col cols="12">
            <base-card class="mb-0 h-100">
              <v-card-title class="pa-0 mb-4 text-body-2 f-600"
                >Lead Vs Customer</v-card-title
              >
              <apexchart
                type="line"
                height="350"
                :options="crmOne.chartOptions"
                :series="crmOne.series"
              ></apexchart>
            </base-card>
          </v-col>
          <v-col cols="12">
            <base-card class="h-100 grid">
              <div class="d-flex justify-space-between flex-wrap align-center">
                <div class="d-flex align-center ma-3">
                  <div class="rounded-lg me-3 bg-primary pa-2" size="36">
                    <i class="text-white text-20 tio-">user_add</i>
                  </div>

                  <div>
                    <div class="body-text-2 f-600 text-secondary">
                      New Leads
                    </div>
                    <div class="text-18 f-600 text-primary">150</div>
                  </div>
                </div>
                <v-divider
                  vertical
                  class="text-secondary-lighten-4 flex-1 d-none d-md-flex"
                ></v-divider>
                <div class="d-flex align-center ma-3">
                  <div class="rounded-lg me-3 bg-warning pa-2">
                    <i class="text-white text-20 tio-">cloud_on</i>
                  </div>

                  <div>
                    <div class="body-text-2 f-600 text-secondary">
                      Open Leads
                    </div>
                    <div class="text-18 f-600 text-warning">200</div>
                  </div>
                </div>
                <v-divider
                  vertical
                  class="text-secondary-lighten-4 d-none d-md-flex"
                ></v-divider>
                <div class="d-flex align-center ma-3">
                  <div class="rounded-lg me-3 bg-info pa-2">
                    <i class="text-white text-20 tio-">done</i>
                  </div>

                  <div>
                    <div class="body-text-2 f-600 text-secondary">
                      Won Leads
                    </div>
                    <div class="text-18 f-600 text-info">22</div>
                  </div>
                </div>
                <v-divider
                  vertical
                  class="text-secondary-lighten-4 d-none d-md-flex"
                ></v-divider>
                <div class="d-flex align-center ma-3">
                  <div class="rounded-lg me-3 bg-error pa-2">
                    <i class="text-white text-20 tio-">error</i>
                  </div>

                  <div>
                    <div class="body-text-2 f-600 text-secondary">
                      Lost Leads
                    </div>
                    <div class="text-18 f-600 text-error">22</div>
                  </div>
                </div>
              </div>
            </base-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card class="h-100 grid">
          <div class="d-flex flex-column">
            <v-card-title class="pa-0 mb-4 text-body-2 f-600"
              >Project Status</v-card-title
            >
            <div class="d-flex justify-center align-center w-100 h-100">
              <apexchart
                type="donut"
                height="400"
                :options="crmTwo.chartOptions"
                :series="crmTwo.series"
              ></apexchart>
            </div>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="8">
        <base-card class="h-100">
          <div
            class="d-flex flex-wrap justify-center justify-sm-space-between flex-wrap bg-white"
          >
            <div class="ma-4">
              <div class="d-flex align-center p-3 mb-5">
                <div class="pa-1 bg-primary rounded-circle me-2"></div>
                <div class="text-body-2 font-weight-bold">Invoice Overview</div>
              </div>
              <div class="d-flex justify-space-between flex-wrap mb-3">
                <p class="text-primary text-caption font-weight-medium">
                  6<span class="text-dark ms-2 text-caption font-weight-medium"
                    >Draft</span
                  >
                </p>
                <div class="text-dark text-caption font-weight-medium">42%</div>
              </div>
              <div class="d-flex justify-space-between flex-wrap mb-3">
                <p class="text-primary text-caption font-weight-medium">
                  8<span class="text-dark ms-2 text-caption font-weight-medium"
                    >Not Sent</span
                  >
                </p>
                <div class="text-dark text-caption font-weight-medium">21%</div>
              </div>
              <div class="d-flex justify-space-between flex-wrap mb-3">
                <p class="text-primary text-caption font-weight-medium">
                  3<span class="text-dark ms-2 text-caption font-weight-medium"
                    >Unpaid</span
                  >
                </p>
                <div class="text-caption font-weight-medium text-dark">14%</div>
              </div>
              <div
                class="d-flex justify-space-between flex-wrap mb-3 text-caption font-weight-medium"
              >
                <p class="text-primary">
                  8<span class="text-dark ms-2">Overdue</span>
                </p>
                <div class="text-dark">5%</div>
              </div>
              <div
                class="d-flex justify-space-between flex-wrap mb-3 text-caption font-weight-medium"
              >
                <p class="text-primary">
                  6<span class="text-dark ms-2">Paid</span>
                </p>
                <div class="text-dark">7%</div>
              </div>
            </div>
            <div class="vertical-line h-100 d-none d-md-flex"></div>
            <div class="ma-4">
              <div class="d-flex align-center p-3 mb-5">
                <div class="pa-1 bg-info rounded-circle me-2"></div>
                <div class="text-body-2 font-weight-bold">
                  Estimate Overview
                </div>
              </div>
              <div
                class="d-flex justify-space-between flex-wrap mb-3 text-caption font-weight-medium"
              >
                <p class="text-info">
                  6<span class="text-dark ms-2">Draft</span>
                </p>
                <div class="text-dark">42%</div>
              </div>
              <div
                class="d-flex justify-space-between flex-wrap mb-3 text-caption font-weight-medium"
              >
                <p class="text-info">
                  8<span class="text-dark ms-2">Not Sent</span>
                </p>
                <div class="text-dark">21%</div>
              </div>
              <div
                class="d-flex justify-space-between flex-wrap mb-3 text-caption font-weight-medium"
              >
                <p class="text-info">
                  3<span class="text-dark ms-2">Unpaid</span>
                </p>
                <div class="text-dark">14%</div>
              </div>
              <div
                class="d-flex justify-space-between flex-wrap mb-3 text-caption font-weight-medium"
              >
                <p class="text-info">
                  8<span class="text-dark ms-2">Overdue</span>
                </p>
                <div class="text-dark">5%</div>
              </div>
              <div
                class="d-flex justify-space-between flex-wrap mb-3 text-caption font-weight-medium"
              >
                <p class="text-info">
                  6<span class="text-dark ms-2">Paid</span>
                </p>
                <div class="text-dark">7%</div>
              </div>
            </div>
            <div class="vertical-line h-100 d-none d-md-flex"></div>
            <div class="ma-4">
              <div class="d-flex align-center p-3 mb-5">
                <div class="pa-1 bg-warning rounded-circle me-2"></div>
                <div class="text-body-2 font-weight-bold">
                  Proposal Overview
                </div>
              </div>
              <div
                class="d-flex justify-space-between flex-wrap mb-3 text-caption font-weight-medium"
              >
                <p class="text-warning">
                  6<span class="text-dark ms-2">Draft</span>
                </p>
                <div class="text-dark">42%</div>
              </div>
              <div
                class="d-flex justify-space-between flex-wrap mb-3 text-caption font-weight-medium"
              >
                <p class="text-warning">
                  8<span class="text-dark ms-2">Not Sent</span>
                </p>
                <div class="text-dark">21%</div>
              </div>
              <div
                class="d-flex justify-space-between flex-wrap mb-3 text-caption font-weight-medium"
              >
                <p class="text-warning">
                  3<span class="text-dark ms-2">Unpaid</span>
                </p>
                <div class="text-dark">14%</div>
              </div>
              <div
                class="d-flex justify-space-between flex-wrap mb-3 text-caption font-weight-medium"
              >
                <p class="text-warning">
                  8<span class="text-dark ms-2">Overdue</span>
                </p>
                <div class="text-dark">5%</div>
              </div>
              <div
                class="d-flex justify-space-between flex-wrap mb-3 text-caption font-weight-medium"
              >
                <p class="text-warning">
                  6<span class="text-dark ms-2">Paid</span>
                </p>
                <div class="text-dark">7%</div>
              </div>
            </div>
            <div class="vertical-line h-100 d-none d-md-flex"></div>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card
          class="d-flex align-center flex-column flex-sm-row pa-0 h-100"
        >
          <div class="pa-4">
            <v-card-title class="pa-0 mb-4 text-body-2 f-600"
              >Project Status</v-card-title
            >
            <div class="d-flex flex-column justify-space-between align-center">
              <div class="text-caption f-600 text-primary mb-4">All</div>
              <div class="text-h4 font-weight-bold text-primary">64</div>
              <div class="text-caption f-600 text-primary mt-4">Tasks</div>
            </div>
          </div>
          <div class="bg-primary-lighten-4 flex-grow-1">
            <apexchart
              type="bar"
              height="250"
              width="100%"
              :options="tasks.chartOptions"
              :series="tasks.series"
            ></apexchart>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="12">
        <base-card class="pa-0 h-100">
          <v-card-title class="px-card mb-0 pb-0 text-body-2 f-600"
            >Customer LIst</v-card-title
          >
          <perfect-scrollbar class="table">
            <table-lite
              :has-checkbox="true"
              :is-slot-mode="true"
              :columns="table.columns"
              :rows="table.rows"
              :total="table.totalRecordCount"
              :is-hide-paging="true"
            >
              <template v-slot:name="data">
                <div class="d-flex align-center">
                  <v-avatar rounded size="46" class="me-2">
                    <img :src="data.value.name.img" alt="" />
                  </v-avatar>
                  <div>
                    <div class="text-caption f-600 text-secondary-darken-5">
                      {{ data.value.name.title }}
                    </div>
                    <div class="text-caption font-weight-medium text-secondary">
                      {{ data.value.name.subTitle }}
                    </div>
                  </div>
                </div>
              </template>
              <template v-slot:edit>
                <v-btn flat icon class="mr-2">
                  <i class="tio-edit text-primary text-18"></i>
                </v-btn>
                <v-btn flat icon>
                  <i class="tio-delete text-error text-18"></i>
                </v-btn>
              </template>
            </table-lite>
          </perfect-scrollbar>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.text-dark {
  color: #000;
}
.grid {
  display: grid;
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
::v-deep(.vtl-tbody-tr) {
  border-bottom: 1px solid #cee8ff !important;
}
::v-deep(.vtl-paging-pagination-page-link) {
  border: none !important;
}
</style>
