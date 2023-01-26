<script setup>
import { dashboardOne, dashboardTwo } from "@/data/learningManagement.js";
import { ref, reactive } from "@vue/reactivity";
import pdfImg from "@/assets/images/svg/pdf.svg";
import TableLite from "vue3-table-lite";

const pdfImgC = ref(pdfImg);
const valueDeterminate = ref(50);
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "Name",
      field: "name",
      width: "30%",
      sortable: false,
    },
    {
      label: "Category",
      field: "category",
      width: "30%",
      sortable: false,
    },
    {
      label: "Earned",
      field: "earned",
      width: "30%",
      sortable: false,
    },
    {
      label: "Visitor",
      field: "visitor",
      width: "20%",
      sortable: false,
    },
  ],
  rows: [
    {
      name: {
        img: "/src/assets/images/products/1.png",
        title: "Flat Line Illustration",
        subTitle: "SketchApp, Adobe Illustration",
      },

      category: {
        textColor: "text-primary",
        bgColor: "bg-primary",
        title: "Graphic Template",
      },
      earned: "$19.00",
      visitor: "1500",
    },
    {
      name: {
        img: "/src/assets/images/products/2.png",
        title: "React Live",
        subTitle: "Visual Studio, React",
      },

      category: {
        textColor: "text-warning",
        bgColor: "bg-warning",
        title: "Development",
      },
      earned: "$45.00",
      visitor: "1200",
    },
    {
      name: {
        img: "/src/assets/images/products/3.png",
        title: "Guitar Lessons",
        subTitle: "Squarespace",
      },

      category: {
        textColor: "text-info",
        bgColor: "bg-info",
        title: "Development",
      },
      earned: "$45.00",
      visitor: "1200",
    },
    {
      name: {
        img: "/src/assets/images/products/4.png",
        title: "Video Editing",
        subTitle: "After Effects",
      },

      category: {
        textColor: "text-error",
        bgColor: "bg-error",
        title: "Editing",
      },
      earned: "$45.00",
      visitor: "1200",
    },
  ],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
});
const smallCards = reactive([
  {
    title: "Course in progress",
    icon: "chart_line_up",
    textColor: "text-primary",
    bgColor: "bg-primary-lighten-5",
  },
  {
    title: "Enrolled Courses",
    icon: "leaf",
    textColor: "text-warning",
    bgColor: "bg-warning-lighten-3",
  },
  {
    title: "Course Completed",
    icon: "leaf",
    textColor: "text-error",
    bgColor: "bg-error-lighten-5",
  },
]);

const results = reactive([
  {
    title: "React",
  },
  {
    title: "Angular",
  },
  {
    title: "Vue",
  },
  {
    title: "Html",
  },
  {
    title: "Css",
  },
]);

const upcomingTask = reactive([
  {
    title: "Meet w/ Simmmple",
  },
  {
    title: "Fitness Run",
  },
  {
    title: "Dental Care",
  },
  {
    title: "Dinner Date",
  },
]);
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="8">
        <base-card
          class="h-100 d-flex justify-center justify-md-space-between align-center flex-wrap"
        >
          <div class="flex-1 mb-4">
            <div class="text-18 font-weight-medium mb-3">
              Welcome Back! Watson
            </div>
            <div class="text-13 font-weight-medium text-secondary-lighten-2">
              You have completed <span class="text-primary">76%</span> of your
              goal this week! Start a new goal and improve your result.
            </div>
          </div>
          <apexchart
            class="flex-shrink-0"
            type="radialBar"
            :options="dashboardOne.chartOptions"
            :series="dashboardOne.series"
          ></apexchart>
        </base-card>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card
          class="upgrade-card h-100 d-flex justify-space-between text-center text-sm-left flex-column flex-sm-row align-center"
        >
          <div>
            <div class="text-18 f-600 mb-4">
              Upgrade to <span class="text-primary">PRO</span> for more
              resources
            </div>
            <v-btn flat class="btn-gradient text-capitalize">
              Upgrade Now
            </v-btn>
          </div>
          <div>
            <img
              class="flex-1 flex-shrink-0 upgrade-img"
              src="@/assets/images/dashboard.png"
            />
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card class="h-100">
          <v-card-title class="pa-0 mb-4 text-body-2 f-600"
            >Results</v-card-title
          >
          <div
            v-for="(item, index) in results"
            :key="index"
            class="d-flex justify-space-between align-center mb-4"
          >
            <div class="d-flex align-baseline flex-1">
              <div class="bg-primary pa-1 rounded-circle me-2"></div>

              <div>
                <div class="body-text-3 font-weight-medium text-body-2">
                  {{ item.title }}
                </div>
                <div class="text-caption text-gray">20 march</div>
              </div>
            </div>
            <div class="flex-1">
              <v-progress-linear
                color="primary"
                rounded="rounded-pill"
              ></v-progress-linear>
            </div>
            <div class="text-caption font-weight-medium flex-1 text-right">
              40%
            </div>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card class="h-100">
          <v-card-title class="pa-0 mb-4 text-body-2 f-600"
            >Study Time Last Week</v-card-title
          >
          <apexchart
            type="bar"
            height="250"
            :options="dashboardTwo.chartOptions"
            :series="dashboardTwo.series"
          ></apexchart>
        </base-card>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card class="h-100">
          <div class="d-flex justify-space-between">
            <v-card-title class="pa-0 mb-4 text-body-2 f-600"
              >Upcoming Task</v-card-title
            >
            <v-btn size="small" flat class="text-primary text-capitalize">
              View All Tasks
            </v-btn>
          </div>
          <div
            v-for="(item, index) in upcomingTask"
            :key="index"
            class="d-flex justify-space-between align-center mb-4"
          >
            <div class="d-flex">
              <v-divider vertical="" class="text-primary me-2"></v-divider>
              <div>
                <div class="text-body-2 font-weight-medium">
                  {{ item.title }}
                </div>
                <div class="text-caption font-weight-medium text-secondary">
                  01:00 PM - 02:00 PM
                </div>
              </div>
            </div>
            <v-btn flat icon>
              <i class="tio- text-18">more_horizontal</i>
            </v-btn>
          </div>
        </base-card>
      </v-col>

      <v-col v-for="(item, index) in smallCards" :key="index" cols="12" lg="4">
        <base-card class="h-100">
          <div class="d-flex align-center">
            <div
              :class="item.bgColor"
              class="rounded-circle d-flex align-items-center justify-content-center me-3 pa-2"
            >
              <i :class="item.textColor" class="tio- text-18">{{
                item.icon
              }}</i>
            </div>
            <div>
              <div class="text-body-2 font-weight-medium">
                {{ item.title }}
              </div>
              <div :class="item.textColor" class="text-h5 font-weight-medium">
                $1025
              </div>
            </div>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="8">
        <base-card class="pa-0 h-100">
          <v-card-title class="px-card mb-0 pb-0 text-body-2 f-600"
            >Course Status</v-card-title
          >
          <perfect-scrollbar class="table">
            <table-lite
              :is-slot-mode="true"
              :columns="table.columns"
              :rows="table.rows"
              :total="table.totalRecordCount"
              :is-hide-paging="true"
            >
              <template v-slot:name="data">
                <div class="d-flex align-center">
                  <v-avatar rounded size="46" class="me-2 flex-shrink-0">
                    <img class="w-full" :src="data.value.name.img" alt="" />
                  </v-avatar>
                  <div>
                    <div class="text-13 font-weight-medium">
                      {{ data.value.name.title }}
                    </div>
                    <div class="text-13 font-weight-medium text-secondary">
                      {{ data.value.name.subTitle }}
                    </div>
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
                    class="text-13 font-weight-medium"
                  >
                    {{ data.value.category.title }}
                  </div>
                </div>
              </template>
            </table-lite>
          </perfect-scrollbar>
        </base-card>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card class="h-100">
          <v-card-title class="pa-0 mb-4 text-body-2 f-600"
            >Your Downloads</v-card-title
          >
          <div class="d-flex justify-space-between align-center flex-wrap mb-6">
            <div class="d-flex">
              <v-avatar rounded="0" size="42" class="me-2">
                <img
                  class="w-full"
                  src="@/assets/images/svg/pdf.svg"
                  alt="John"
                />
              </v-avatar>
              <div>
                <div class="text-13 font-weight-medium">
                  Wordpress for beginner
                </div>
                <div class="text-caption font-weight-medium text-secondary">
                  4.5MB
                </div>
              </div>
            </div>
            <v-btn size="small" flat class="text-primary text-capitalize">
              Download
            </v-btn>
          </div>
          <div class="d-flex justify-space-between align-center flex-wrap mb-6">
            <div class="d-flex">
              <v-avatar rounded="0" size="42" class="me-2">
                <img
                  class="w-full"
                  src="@/assets/images/svg/pdf.svg"
                  alt="John"
                />
              </v-avatar>
              <div>
                <div class="text-13 font-weight-medium">Master in Node.js</div>
                <div class="text-caption font-weight-medium text-secondary">
                  4.5MB
                </div>
              </div>
            </div>
            <v-btn size="small" flat class="text-primary text-capitalize">
              Download
            </v-btn>
          </div>
          <div class="d-flex justify-space-between align-center flex-wrap mb-6">
            <div class="d-flex">
              <v-avatar rounded="0" size="42" class="me-2">
                <img
                  class="w-full"
                  src="@/assets/images/svg/pdf.svg"
                  alt="John"
                />
              </v-avatar>
              <div>
                <div class="text-13 font-weight-medium">Vue Zero to Hero</div>
                <div class="text-caption font-weight-medium text-secondary">
                  4.5MB
                </div>
              </div>
            </div>
            <v-btn size="small" flat class="text-primary text-capitalize">
              Download
            </v-btn>
          </div>
          <div class="d-flex justify-space-between align-center flex-wrap mb-6">
            <div class="d-flex">
              <v-avatar rounded="0" size="42" class="me-2">
                <img
                  class="w-full"
                  src="@/assets/images/svg/pdf.svg"
                  alt="John"
                />
              </v-avatar>
              <div>
                <div class="text-13 font-weight-medium">
                  Wordpress for beginner
                </div>
                <div class="text-caption font-weight-medium text-secondary">
                  4.5MB
                </div>
              </div>
            </div>
            <v-btn size="small" flat class="text-primary text-capitalize">
              Download
            </v-btn>
          </div>
          <div class="d-flex justify-space-between align-center flex-wrap mb-6">
            <div class="d-flex">
              <v-avatar rounded="0" size="42" class="me-2">
                <img
                  class="w-full"
                  src="@/assets/images/svg/pdf.svg"
                  alt="John"
                />
              </v-avatar>
              <div>
                <div class="text-13 font-weight-medium">Master in Node.js</div>
                <div class="text-caption font-weight-medium text-secondary">
                  4.5MB
                </div>
              </div>
            </div>
            <v-btn size="small" flat class="text-primary text-capitalize">
              Download
            </v-btn>
          </div>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.upgrade-card {
  background: linear-gradient(
    250.16deg,
    #ffffff 2.51%,
    rgba(213, 241, 255, 0.54) 96.8%
  );
}
.upgrade-img {
  width: 150px;
  object-fit: cover;
  margin-right: auto;
}
.btn-gradient {
  background-image: linear-gradient(
    rgba(0, 172, 255, 0.46),
    rgba(189, 0, 255, 0.35)
  );
  color: #ffffff;
}
.flex-1 {
  flex: 1;
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
