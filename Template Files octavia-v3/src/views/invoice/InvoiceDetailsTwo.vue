<script setup>
import { reactive } from "@vue/reactivity";
import TableLite from "vue3-table-lite";
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "Description",
      field: "description",
      width: "30%",
      sortable: false,
    },
    {
      label: "Hours",
      field: "hours",
      width: "20%",
      sortable: false,
    },
    {
      label: "Rate",
      field: "rate",
      width: "20%",
      sortable: false,
    },
    {
      label: "Amount",
      field: "amount",
      width: "30%",
      sortable: false,
    },
  ],
  rows: [
    {
      description: {
        color: "bg-primary",
        title: "Minimal Design",
      },
      hours: 80,
      rate: "$40.00",
      amount: "$3200.00",
    },
    {
      description: {
        color: "bg-warning",
        title: "Logo Design",
      },
      hours: 32,
      rate: "$50.00",
      amount: "$2200.00",
    },
    {
      description: {
        color: "bg-error",
        title: "Web Development",
      },
      hours: 120,
      rate: "$80.00",
      amount: "$1,2200.00",
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
    <base-card>
      <div
        class="
          d-flex
          justify-space-between
          flex-wrap
          align-center
          flex-wrap
          mb-8
        "
      >
        <div class="mb-3">
          <div class="text-18 f-600">Invoice #</div>
          <div class="text-caption text-secondary-darken-1">3682303</div>
        </div>
        <v-img
          max-width="75"
          height="auto"
          src="@/assets/images/delivery/FedEx.svg"
          alt=""
        ></v-img>
      </div>
      <v-img
        width="100%"
        height="auto"
        src="@/assets/images/invoice.png"
      ></v-img>
      <v-row>
        <v-col cols="12" lg="6">
          <perfect-scrollbar class="table">
            <table-lite
              :is-slot-mode="true"
              :columns="table.columns"
              :rows="table.rows"
              :total="table.totalRecordCount"
              :is-hide-paging="true"
            >
              <template v-slot:description="data">
                <div class="d-flex align-center">
                  <span
                    :class="data.value.description.color"
                    class="pa-1 rounded-circle me-2"
                  ></span>
                  {{ data.value.description.title }}
                </div>
              </template>
              <template v-slot:amount="data">
                <div class="text-suctitle f-600">{{ data.value.amount }}</div>
              </template>
            </table-lite>
          </perfect-scrollbar>
          <div class="d-flex flex-column mt-4">
            <div class="d-flex mb-3">
              <div class="text-caption f-600 me-3">Bank Transfer:</div>
              <div class="text-caption text-secondary-darken-5">
                Barclays UK
              </div>
            </div>
            <div class="d-flex mb-3">
              <div class="text-caption f-600 me-3">Account Number:</div>
              <div class="text-caption text-secondary-darken-5">
                1234567890934
              </div>
            </div>
            <div class="d-flex mb-7">
              <div class="text-caption f-600 me-3">Code:</div>
              <div class="text-caption text-secondary-darken-5">
                1234567890934
              </div>
            </div>

            <div class="d-flex align-items-center">
              <v-btn flat color="primary" class="text-capitalize me-2">
                Print Invoice
              </v-btn>
              <v-btn flat class="text-capitalize border-secondary">
                <i class="tio-">download_to </i
                ><span class="text-caption f-600">PDF</span>
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6">
          <div class="p-card rounded bg-secondary-lighten-5 mt-8">
            <div class="text-subtitle text-secondary f-600 mb-4">
              Total Account
            </div>
            <div class="text-18 f-600">$1,2200.00</div>
            <v-divider class="line-color my-5"></v-divider>
            <div class="text-caption f-600 mb-2">Bill to:</div>
            <div class="text-body-2 f-600 mb-2">Pixy Krovasky</div>
            <div class="text-caption text-secondary mb-5">
              8692 Wild Rose Drive Livonia, MI 48150
            </div>
            <div class="text-caption f-600 mb-2">
              Invoice Number:
              <span class="text-secondary font-weight-regular">21351651</span>
            </div>
            <div class="text-caption f-600 mb-2">
              Invoice Number:
              <span class="text-secondary font-weight-regular">21351651</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </base-card>
  </v-container>
</template>
<style lang="scss" scoped>
::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  background-color: transparent;
  border-color: transparent;
  color: #647283;
  font-weight: 600;
  border-bottom: 1px solid #cee8ff;
}
::v-deep(.vtl-table) {
  border-bottom: 1px solid #cee8ff;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
  border: none;
  vertical-align: middle;
  font-weight: 500;
  color: #495970;
}
</style>
