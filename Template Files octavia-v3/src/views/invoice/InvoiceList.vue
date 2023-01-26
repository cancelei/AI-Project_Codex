<script setup>
import { reactive } from "@vue/reactivity";
import TableLite from "vue3-table-lite";
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "Invoice ID",
      field: "invoiceId",
      width: "20%",
      sortable: false,
    },
    {
      label: "Name",
      field: "name",
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
      label: "Date",
      field: "date",
      width: "20%",
      sortable: false,
    },
    {
      label: "Status",
      field: "status",
      width: "20%",
      sortable: false,
    },
    {
      label: "Action",
      field: "action",
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
      invoiceId: "#872348",
      date: "Nov 12, 2021",
      email: "zachary-gomez@gmail.com",
    },
    {
      name: {
        img: "/src/assets/images/faces/2.jpg",
        title: "Niker Perry",
      },
      invoiceId: "#872348",
      date: "Nov 12, 2021",
      email: "zachary-gomez@gmail.com",
    },
    {
      name: {
        img: "/src/assets/images/faces/3.jpg",
        title: "Zachary Gomez",
      },
      invoiceId: "#872348",
      date: "Nov 12, 2021",
      email: "zachary-gomez@gmail.com",
    },
    {
      name: {
        img: "/src/assets/images/faces/4.jpg",
        title: "Mike Perry",
      },
      invoiceId: "#872348",
      date: "Nov 12, 2021",
      email: "zachary-gomez@gmail.com",
    },
    {
      name: {
        img: "/src/assets/images/faces/1.jpg",
        title: "Mike Jerry",
      },
      invoiceId: "#872348",
      date: "Nov 12, 2021",
      email: "zachary-gomez@gmail.com",
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
    <div class="d-flex justify-space-between mb-7">
      <div class="d-flex align-center">
        <div class="pa-2 rounded bg-primary-lighten-5 me-4">
          <i class="tio- text-primary">receipt</i>
        </div>
        <div class="text-subtitle-2 f-600">Invoice List</div>
      </div>
      <v-btn flat color="primary">
        <i class="tio- text-18 me-2">add</i>
        Add New
      </v-btn>
    </div>
    <perfect-scrollbar class="invoice-list">
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
            <v-avatar size="46" class="me-2">
              <img class="w-full" :src="data.value.name.img" alt="" />
            </v-avatar>
            <div>
              <div class="text-caption font-weight-medium">
                {{ data.value.name.title }}
              </div>
              <div class="text-caption font-weight-medium text-secondary">
                {{ data.value.name.subTitle }}
              </div>
            </div>
          </div>
        </template>
        <template v-slot:status>
          <div class="bg-success-lighten-5 px-3 py-2 rounded d-inline-flex">
            <span class="text-success text-caption f-600">Complete</span>
          </div>
        </template>
        <template v-slot:action>
          <v-btn flat icon size="small">
            <i class="tio-more_horizontal text-secondary text-18"></i>
          </v-btn>
        </template>
      </table-lite>
    </perfect-scrollbar>
  </v-container>
</template>
<style lang="scss" scoped>
.invoice-list {
  .card {
    background-color: transparent;
  }
}
::v-deep(.vtl-tbody-tr) {
  background-color: #fff;
}
::v-deep(.vtl-table) {
  border-collapse: separate;
  border-spacing: 0px 20px;
}

::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  background-color: transparent;
  border-color: transparent;
  color: #32425e;
  font-weight: 600;
  white-space: nowrap;

  border-bottom: 1px solid #cee8ff;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
  border: none;
  vertical-align: middle;
  font-weight: 400;
  white-space: nowrap;
}

::v-deep(.vtl-paging-pagination-page-link) {
  border: none;
}
</style>
