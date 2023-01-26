<script setup>
import { ref, reactive } from "vue";
import { dashboardTwoThree } from "@/data/jobManagement.js";
import { salesOne, salesTwo, salesThree, salesFour } from "@/data/sales.js";
import TableLite from "vue3-table-lite";
import salesImport from "@/assets/images/sales-earning.png";

const salesImg = ref(salesImport);
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
      label: "Date",
      field: "date",
      width: "20%",
      sortable: false,
    },
    {
      label: "Category",
      field: "category",
      width: "20%",
      sortable: false,
    },

    {
      label: "Price",
      field: "price",
      width: "20%",
      sortable: false,
    },
    {
      label: "Stock",
      field: "stock",
      width: "10%",
      sortable: false,
    },
    {
      label: "Status",
      field: "status",
      width: "20%",
      sortable: false,
    },
  ],
  rows: [
    {
      name: {
        img: "/src/assets/images/products/3d.png",
        title: "Cactus Point",
        subTitle: "#893479",
      },
      date: "14 Nov, 2021",
      category: "Plants",
      price: "$45",
      stock: "12",
    },
    {
      name: {
        img: "/src/assets/images/products/nike-shoe.png",
        title: "Bose Headset",
        subTitle: "#893479",
      },

      date: "30 Nov, 2021",
      category: "Headphone",
      price: "$45",
      stock: "12",
    },
    {
      name: {
        img: "/src/assets/images/products/airpod.png",
        title: "Air Pod",
        subTitle: "#893479",
      },

      date: "	15 Nov, 2021",
      category: "Gadget",
      price: "$45",
      stock: "12",
    },
    {
      name: {
        img: "/src/assets/images/products/ps5.png",
        title: "Playstation 5",
        subTitle: "#893479",
      },

      date: "09 Nov, 2021",
      category: "Glass",
      price: "$45",
      stock: "12",
    },
    {
      name: {
        img: "/src/assets/images/products/macbook-pro.png",
        title: "Macbook Pro",
        subTitle: "#893479",
      },

      date: "14 Nov, 2021",
      category: "Mac",
      price: "$45",
      stock: "12",
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
    <v-row>
      <v-col cols="12" lg="6" md="5" sm="12">
        <base-card class="h-100">
          <div
            class="d-flex justify-center justify-sm-space-between align-center text-center text-sm-left"
          >
            <div>
              <div class="text-subtitle-2 mb-2">Earnings</div>
              <div class="text-h5 mb-3">$74,438.78</div>
              <v-btn color="primary" flat class="text-capitalize"
                >Download</v-btn
              >
            </div>

            <img
              class="mw-200 d-none d-sm-block"
              src="@/assets/images/sales-earning.png"
            />
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="6" md="7" sm="12">
        <base-card class="h-100">
          <div
            class="d-flex flex-column flex-md-row justify-space-between align-center flex-wrap h-100"
          >
            <div
              class="d-flex flex-column justify-space-center align-center pa-3"
            >
              <div
                class="px-3 py-2 rounded d-flex align-center justify-space-center me-2 mb-3 text-20 bg-primary-lighten-5"
              >
                <i class="text-28 text-primary tio-shopping_cart"> </i>
              </div>
              <div class="text-caption f-600 text-secondary mb-1">
                Total Orders
              </div>
              <div class="text-18 f-600">$785K</div>
            </div>
            <div
              class="d-flex flex-column justify-space-center align-center pa-3"
            >
              <div
                class="px-3 py-2 rounded d-flex align-center justify-space-center me-2 mb-3 text-20 bg-success-lighten-5"
              >
                <i class="text-28 text-success tio-money_vs"> </i>
              </div>
              <div class="text-caption f-600 text-secondary mb-1">
                Orders Completed
              </div>
              <div class="text-18 f-600">33k</div>
            </div>
            <div
              class="d-flex flex-column justify-space-center align-center pa-3"
            >
              <div
                class="px-3 py-2 rounded d-flex align-center justify-space-center me-2 mb-3 text-20 bg-error-lighten-5"
              >
                <i class="text-28 text-error tio-trending_up"> </i>
              </div>
              <div class="text-caption f-600 text-secondary mb-1">
                Orders Cancelled
              </div>
              <div class="text-18 f-600">1K</div>
            </div>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="8">
        <base-card class="h-100">
          <v-card-title class="pa-0 mb-4 text-body-2 f-600"
            >Revenue Statistics</v-card-title
          >
          <div class="d-flex">
            <div class="me-5">
              <div class="text-18 f-600">$56,765</div>
              <div class="text-secondary text-caption">Total Sale</div>
            </div>
            <div class="me-3">
              <div class="text-18 f-600">$350</div>
              <div class="text-secondary text-caption">Avarage Sale</div>
            </div>
          </div>
          <apexchart
            type="line"
            height="300"
            :options="salesOne.chartOptions"
            :series="salesOne.series"
          ></apexchart>
        </base-card>
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
                height="275"
                :options="salesTwo.chartOptions"
                :series="salesTwo.series"
              ></apexchart>
            </div>
          </div>
        </base-card>
      </v-col>
      <v-col cols="12" lg="8">
        <base-card class="pa-0 h-100">
          <v-card-title class="px-card mb-0 pb-0 text-body-2 f-600"
            >Popular Products</v-card-title
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
                  <v-avatar rounded size="46" class="me-2">
                    <img :src="data.value.name.img" alt="" />
                  </v-avatar>
                  <div>
                    <div class="text-body-2 font-weight-medium">
                      {{ data.value.name.title }}
                    </div>
                    <div class="text-caption font-weight-medium text-secondary">
                      {{ data.value.name.subTitle }}
                    </div>
                  </div>
                </div>
              </template>
              <template v-slot:status>
                <div class="text-success text-caption">Available</div>
              </template>
            </table-lite>
          </perfect-scrollbar>
        </base-card>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card class="h-100">
          <div class="d-flex justify-space-between">
            <v-card-title class="pa-0 mb-4 text-body-2 f-600"
              >Order Status</v-card-title
            >
            <v-btn size="small" flat class="text-primary">View All</v-btn>
          </div>
          <div class="d-flex justify-space-between">
            <div>
              <div class="text-18 f-600">125</div>
              <p class="text-caption text-secondary mb-0">Total Orders</p>
            </div>
            <div class="text-caption text-primary d-flex">
              <div class="text-20 tio-caret_up"></div>
              <div class="text-caption">15% increased</div>
            </div>
          </div>
          <apexchart
            type="area"
            height="350"
            :options="salesThree.chartOptions"
            :series="salesThree.series"
          ></apexchart>
        </base-card>
      </v-col>
      <v-col cols="12" lg="8">
        <base-card class="h-100">
          <apexchart
            type="area"
            height="350"
            :options="dashboardTwoThree.chartOptions"
            :series="dashboardTwoThree.series"
          ></apexchart>
        </base-card>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card class="h-100">
          <v-card-title class="pa-0 mb-4 text-body-2 f-600"
            >Sales Product Details</v-card-title
          >
          <apexchart
            type="radialBar"
            height="280"
            :options="salesFour.chartOptions"
            :series="salesFour.series"
          ></apexchart>
          <div class="d-flex justify-space-between mb-3">
            <div class="d-flex align-center">
              <div class="pa-1 bg-primary rounded-circle me-2"></div>
              <div class="text-body-2 f-500">Electronics</div>
            </div>
            <div class="text-body-2 f-500">$12k</div>
          </div>
          <div class="d-flex justify-space-between mb-3">
            <div class="d-flex align-center">
              <div class="pa-1 bg-info rounded-circle me-2"></div>
              <div class="text-body-2 f-500">Furniture</div>
            </div>
            <div class="text-body-2 f-500">$12k</div>
          </div>
          <div class="d-flex justify-space-between mb-3">
            <div class="d-flex align-center">
              <div class="pa-1 bg-warning rounded-circle me-2"></div>
              <div class="text-body-2 f-500">Accesories</div>
            </div>
            <div class="text-body-2 f-500">$12k</div>
          </div>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.grid {
  display: grid;
}
.upgrade-card {
  background: linear-gradient(
    250.16deg,
    #ffffff 2.51%,
    rgba(213, 241, 255, 0.54) 96.8%
  );
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
  border: none;
  vertical-align: middle;
  font-weight: 500;
}
::v-deep(.vtl-table td span) {
  white-space: nowrap;
}
::v-deep(.vtl-thead-column) {
  font-size: 12px;
  font-weight: 600;
}
::v-deep(.vtl-paging-pagination-page-link) {
  border: none !important;
}
::v-deep(.vtl-tbody-td span) {
  font-size: 12px;
  font-weight: 600;
  color: #011e3d;
}
.mw-200 {
  max-width: 200px;
}
</style>
