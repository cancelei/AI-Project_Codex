<script setup>
import Account from "@/components/Account.vue";
import { reactive } from "@vue/reactivity";
import TableLite from "vue3-table-lite";
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "Date",
      field: "date",
      width: "20%",
      sortable: true,
    },
    {
      label: "Order ID",
      field: "order",
      width: "20%",
      sortable: true,
    },
    {
      label: "Details",
      field: "details",
      width: "20%",
      sortable: true,
    },
    {
      label: "Amount",
      field: "amount",
      width: "20%",
      sortable: true,
    },
    {
      label: "Invoice",
      field: "invoice",
      width: "20%",
      sortable: true,
    },
  ],
  rows: [
    {
      date: "Nov 12, 2021",
      order: "202745788",
      details: "The Icon of full icon set",
      amount: "$650",
    },
    {
      date: "Nov 12, 2021",
      order: "202745788",
      details: "The Icon of full icon set",
      amount: "$650",
    },
    {
      date: "Nov 12, 2021",
      order: "202745788",
      details: "The Icon of full icon set",
      amount: "$650",
    },
    {
      date: "Nov 12, 2021",
      order: "202745788",
      details: "The Icon of full icon set",
      amount: "$650",
    },
    {
      date: "Nov 12, 2021",
      order: "202745788",
      details: "The Icon of full icon set",
      amount: "$650",
    },
    {
      date: "Nov 12, 2021",
      order: "202745788",
      details: "The Icon of full icon set",
      amount: "$650",
    },
    {
      date: "Nov 12, 2021",
      order: "202745788",
      details: "The Icon of full icon set",
      amount: "$650",
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
      <base-card class="pa-0" card-title="Earnings">
        <div class="p-card">
          <div class="text-caption text-secondary mb-3">
            Last <span class="text-primary">15</span> day earnings calculated
          </div>
          <div class="d-flex justify-space-between flex-wrap">
            <div class="d-flex align-center flex-wrap">
              <div
                class="border-secondary px-8 py-4 rounded-lg text-center mb-4 me-3"
              >
                <i class="text-18 text-primary tio-">chart_line_up </i>
                <div class="text-subtitle-2 f-600">$4,550</div>
                <div class="text-caption text-secondary">Net Earnings</div>
              </div>
              <div
                class="border-secondary px-8 py-4 rounded-lg text-center mb-4 me-3"
              >
                <i class="text-18 text-warning tio-">chart_donut_1 </i>
                <div class="text-subtitle-2 f-600">$80</div>
                <div class="text-caption text-secondary">Change</div>
              </div>
              <div
                class="border-secondary px-8 py-4 rounded-lg text-center mb-4 me-3"
              >
                <i class="text-18 text-info tio-">receipt_outlined </i>
                <div class="text-subtitle-2 f-600">$2,800</div>
                <div class="text-caption text-secondary">Fees</div>
              </div>
            </div>
            <div class="d-flex align-center flex-wrap">
              <v-btn flat class="text-capitalize" color="primary"
                >Withdraw $4,550</v-btn
              >
            </div>
          </div>
        </div>
        <v-card-title class="mb-0 border-bottom text-body-2 f-600"
          >Billing History
        </v-card-title>
        <perfect-scrollbar class="table">
          <table-lite
            :is-slot-mode="true"
            :columns="table.columns"
            :rows="table.rows"
            :total="table.totalRecordCount"
            :is-hide-paging="true"
          >
            <template v-slot:invoice>
              <v-btn class="text-capitalize" flat color="primary">
                <i class="tio- text-18 me-2">download_to</i>
                Download
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
  color: #131e3e;
  font-weight: 600;
  border-bottom: 1px solid #cee8ff;
}
::v-deep(.vtl-table td span) {
  white-space: nowrap;
}
::v-deep(.vtl-thead-tr) {
  background-color: #cee8ff;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
  border: none;
  vertical-align: middle;
  font-weight: 500;
  color: #647283;
  padding-top: 1rem;
  padding-bottom: 1rem;
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
