<script setup>
import { ref, reactive } from "vue";
import {
  dashboardTwoOne,
  dashboardTwoTwo,
  dashboardTwoThree,
} from "@/data/jobManagement.js";
import { dashboardTwo } from "@/data/learningManagement.js";
// import avatarImport from "@/assets/images/faces/avatar.png";
// import upgradeProImport from "@/assets/images/job-management.svg";
import TableLite from "vue3-table-lite";
// const avatarImg = ref(avatarImport);
// const upgradeProImage = ref(upgradeProImport);
const items = ref([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
]);
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "Posts",
      field: "posts",
      width: "30%",
      sortable: false,
    },
    {
      label: "Posted At",
      field: "postedAt",
      width: "30%",
      sortable: false,
    },
    {
      label: "Applicants",
      field: "applicants",
      width: "30%",
      sortable: false,
    },
    {
      label: "Actions",
      field: "actions",
      width: "20%",
      sortable: false,
    },
  ],
  rows: [
    {
      posts: "Senior Fullstack Engineer",
      postedAt: "	01/10/2021",
    },
    {
      posts: "Freelance Java Developer",
      postedAt: "	01/10/2021",
    },
    {
      posts: "Python Developer",
      postedAt: "	01/10/2021",
    },
    {
      posts: "UI/UX Designer",
      postedAt: "	01/10/2021",
    },
  ],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
});
const acquisitions = reactive([
  { title: "Application", percentage: 40 },
  { title: "Shortlisted", percentage: 80 },
  { title: "Certified", percentage: 60 },
  { title: "On hold", percentage: 90 },
  { title: "Rejected", percentage: 80 },
]);
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="8" md="12">
        <v-row>
          <v-col cols="12" lg="6" md="6">
            <base-card
              class="h-100 d-flex flex-column text-center text-md-left flex-md-row justify-space-between align-center"
            >
              <div>
                <div class="text-subtitle-2 text-secondary">
                  Total Applications
                </div>
                <div class="text-h5 f-600 mb-3">5672</div>
                <div
                  class="d-flex align-center justify-center justify-md-start"
                >
                  <div
                    class="bg-primary-lighten-5 rounded-circle d-flex align-items-center justify-content-center me-2 pa-1"
                  >
                    <i class="tio-trending_up text-primary"></i>
                  </div>
                  <span class="text-body-2 text-primary">+14% Inc</span>
                </div>
              </div>
              <apexchart
                type="radialBar"
                height="120"
                width="120"
                :options="dashboardTwoOne.chartOptions"
                :series="dashboardTwoOne.series"
              ></apexchart>
            </base-card>
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <base-card
              class="h-100 d-flex flex-column text-center text-md-left flex-md-row justify-space-between align-center"
            >
              <div>
                <div class="text-subtitle-2 text-secondary">
                  Shortlisted Canditates
                </div>
                <div class="text-h5 f-600 mb-3">4582</div>
                <div
                  class="d-flex align-center justify-center justify-md-start"
                >
                  <div
                    class="bg-info-lighten-3 rounded-circle d-flex align-items-center justify-content-center me-2 pa-1"
                  >
                    <i class="tio-trending_up text-info"></i>
                  </div>
                  <span class="text-body-2 text-info">+14% Inc</span>
                </div>
              </div>
              <apexchart
                type="radialBar"
                height="120"
                width="120"
                :options="dashboardTwoTwo.chartOptions"
                :series="dashboardTwoTwo.series"
              ></apexchart>
            </base-card>
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <base-card class="h-100">
              <v-card-title class="pa-0 mb-4 text-body-2 f-600"
                >Recent Job Applications</v-card-title
              >
              <apexchart
                type="bar"
                height="240"
                :options="dashboardTwo.chartOptions"
                :series="dashboardTwo.series"
              ></apexchart>
            </base-card>
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <base-card class="h-100">
              <v-card-title class="pa-0 mb-4 text-body-2 f-600">
                Acquisitions</v-card-title
              >
              <div
                v-for="(item, index) in acquisitions"
                :key="index"
                class="d-flex justify-space-between align-center mb-8"
              >
                <div class="d-flex align-baseline flex-1">
                  <div class="bg-primary pa-1 rounded-circle me-2"></div>

                  <div class="body-text-3 font-weight-medium text-13">
                    {{ item.title }}
                  </div>
                </div>
                <div class="flex-1">
                  <v-progress-linear
                    color="primary"
                    rounded="rounded-pill"
                  ></v-progress-linear>
                </div>
                <div class="text-caption font-weight-medium flex-1 text-right">
                  {{ item.percentage }}%
                </div>
              </div>
            </base-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="4" md="6">
        <base-card class="h-100">
          <div class="d-flex flex-column align-center">
            <v-avatar size="64" class="mb-3">
              <img
                class="w-full"
                src="@/assets/images/faces/avatar.png"
                alt=""
              />
            </v-avatar>
            <div class="bg-primary-lighten-5 px-3 py-1 rounded mb-3">
              <span class="text-primary f-600">Pro</span>
            </div>
            <div class="text-body-2 font-weight-bold mb-1">Jhon Wick</div>
            <div class="text-caption text-secondary mb-1">UI / UX Designer</div>
            <div class="mb-8">
              <i class="tio-poi_outlined me-1 text-primary"></i>
              <span class="text-primary text-caption font-weight-bold"
                >New York</span
              >
            </div>
          </div>
          <div class="d-flex justify-space-between align-center mb-3">
            <div class="text-body-2 font-weight-bold">Recent Job Posted</div>
            <v-btn flat class="text-primary text-capitalize">View All</v-btn>
          </div>
          <div class="d-flex justify-space-between align-center mb-3">
            <div class="d-flex align-center">
              <div class="rounded bg-primary-lighten-5 pa-3 me-2">
                <span class="text-h5 text-primary font-weight-bold">64</span>
              </div>
              <div>
                <div class="text-body-2 font-weight-bold">
                  Sr. Android Developer
                </div>
                <div class="text-caption text-secondary">
                  Total Applications
                </div>
              </div>
            </div>
            <v-btn flat icon>
              <i class="tio- text-18">more_horizontal</i>
            </v-btn>
          </div>
          <div class="d-flex justify-space-between align-center mb-8">
            <div class="d-flex align-center">
              <div class="rounded bg-primary-lighten-5 pa-3 me-2">
                <span class="text-h5 text-primary font-weight-bold">80</span>
              </div>
              <div>
                <div class="text-body-2 font-weight-bold">UI / UX Designer</div>
                <div class="text-caption text-secondary">
                  Total Applications
                </div>
              </div>
            </div>
            <v-btn flat icon>
              <i class="tio- text-18">more_horizontal</i>
            </v-btn>
          </div>
          <div class="d-flex justify-space-between">
            <v-btn class="mb-2 me-3 flex-1" color="primary" variant="outlined"
              >Message</v-btn
            >
            <v-btn class="mb-2 flex-1" color="primary">Connect</v-btn>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="8" md="6">
        <base-card class="pa-0 h-100">
          <v-card-title class="px-card mb-0 pb-0 text-body-2 f-600"
            >Job List</v-card-title
          >
          <perfect-scrollbar class="table">
            <table-lite
              :is-slot-mode="true"
              :columns="table.columns"
              :rows="table.rows"
              :total="table.totalRecordCount"
              :is-hide-paging="true"
            >
              <template v-slot:posts="data">
                <div class="d-flex align-center">
                  <div
                    class="bg-primary pa-1 rounded-circle circle-border me-2"
                  ></div>
                  <div class="text-13 font-weight-medium">
                    {{ data.value.posts }}
                  </div>
                </div>
              </template>
              <template v-slot:category="data">
                <div class="d-flex align-center">
                  <span
                    :class="data.value.category.bgColor"
                    class="pa-1 rounded-circle me-2"
                  ></span>
                  <div
                    :class="data.value.category.textColor"
                    class="text-caption font-weight-medium"
                  >
                    {{ data.value.category.title }}
                  </div>
                </div>
              </template>
              <template v-slot:applicants="">
                <div class="avatar-group-32">
                  <div class="avatar">+9</div>
                  <div class="avatar">
                    <img src="@/assets/images/faces/avatar.png" />
                  </div>
                  <div class="avatar">
                    <img src="@/assets/images/faces/avatar.png" />
                  </div>
                  <div class="avatar">
                    <img src="@/assets/images/faces/avatar.png" />
                  </div>
                </div>
              </template>
              <template v-slot:actions
                ><v-menu offset-y>
                  <template v-slot:activator="{ props }">
                    <v-btn flat icon v-bind="props">
                      <i class="tio-more_horizontal text-secondary text-18"></i>
                    </v-btn>
                  </template>
                  <v-list class="bg-white">
                    <v-list-item v-for="(item, index) in items" :key="index">
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </table-lite>
          </perfect-scrollbar>
        </base-card>
      </v-col>
      <v-col cols="12" lg="4" md="6">
        <base-card class="h-100">
          <v-card-title class="pa-0 mb-4 text-body-2 f-600"
            >Candidates by Gender</v-card-title
          >
          <apexchart
            type="radialBar"
            height="275"
            :options="dashboardTwoOne.chartOptions"
            :series="dashboardTwoOne.series"
          ></apexchart>
        </base-card>
      </v-col>
      <v-col cols="12" lg="8" md="6">
        <base-card class="">
          <v-card-title class="pa-0 mb-4 text-body-2 f-600"
            >Application Recieved Time</v-card-title
          >
          <apexchart
            type="area"
            height="350"
            width="100%"
            :options="dashboardTwoThree.chartOptions"
            :series="dashboardTwoThree.series"
          ></apexchart>
        </base-card>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card class="">
          <div class="text-18 f-600 mw-200 text-center mt-4">
            Upgrade to
            <span class="text-primary mx-1 font-weight-bold">PRO </span>
            for more resources
          </div>

          <div>
            <img
              class="h-300"
              src="@/assets/images/job-management.svg"
              alt=""
            />
          </div>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.radialbar-size {
  height: 200px !important;
}
.h-300 {
  height: 300px;
  width: 100%;
  margin: 0 auto;
}
.mw-200 {
  max-width: 200px;
  margin: 0 auto;
}
.table {
  display: block;
  width: 100%;
  overflow-x: auto;
}
.circle-border {
  border: 4px solid #c7d2fe;
}
::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  background-color: transparent;
  border-color: transparent;
  color: #32425e;
  font-weight: 500;
  border-bottom: 1px solid #cee8ff;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
  border: none !important;
  vertical-align: middle;
  font-weight: 500;
  font-size: 13px;
}
::v-deep(.vtl-tbody-td span) {
  font-size: 13px;
}
// ::v-deep(.vtl-paging-info) {
//   color: rgb(172, 0, 0);
// }
// ::v-deep(.vtl-paging-count-label),
// ::v-deep(.vtl-paging-page-label) {
//   color: rgb(172, 0, 0);
// }
::v-deep(.vtl-paging-pagination-page-link) {
  border: none !important;
}
</style>
