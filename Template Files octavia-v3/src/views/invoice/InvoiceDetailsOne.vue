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
      <v-row>
        <v-col cols="12" lg="6">
          <div
            class="d-flex justify-space-between flex-wrap align-center flex-wrap mb-8"
          >
            <v-img
              max-width="75"
              height="auto"
              src="@/assets/images/delivery/FedEx.svg"
              alt=""
            ></v-img>
            <div class="mb-3">
              <div class="text-18 f-600">Invoice #</div>
              <div class="text-caption text-secondary-darken-1 text-end">
                3682303
              </div>
            </div>
          </div>
          <div class="d-flex justify-space-between flex-wrap align-center mb-5">
            <div class="me-5">
              <div class="text-caption mb-2">Bill to:</div>
              <div class="text-body-2 f-600 mb-2">Pixy Krovasky</div>
              <div class="text-caption text-secondary">
                8692 Wild Rose Drive Livonia, MI 48150
              </div>
            </div>
            <div class="text-caption text-secondary">
              45 Roker Terrace Latheronwheel KW5 8NW, London United Kingdom
            </div>
          </div>
          <div class="text-caption f-600 mb-2">
            Issue Date:
            <span class="text-secondary font-weight-regular">03/10/2018</span>
          </div>
          <div class="text-caption f-600 mb-10">
            Due Date:
            <span class="text-secondary font-weight-regular">03/10/2023</span>
          </div>
          <perfect-scrollbar class="table">
            <table-lite
              :is-slot-mode="true"
              :columns="table.columns"
              :rows="table.rows"
              :total="table.totalRecordCount"
              :is-hide-paging="true"
            >
              <template v-slot:description="data">
                <div
                  class="d-flex align-center text-caption font-weight-medium"
                >
                  <span
                    :class="data.value.description.color"
                    class="pa-1 rounded-circle me-2"
                  ></span>
                  {{ data.value.description.title }}
                </div>
              </template>
              <template v-slot:amount="data">
                <div class="text-caption f-600 text-secondary-darken-4">
                  {{ data.value.amount }}
                </div>
              </template>
            </table-lite>
          </perfect-scrollbar>
          <div class="d-flex justify-end flex-column align-end mt-4">
            <div class="d-flex mb-3">
              <div class="text-caption font-weight-medium me-3">Subtotal:</div>
              <div class="text-caption font-weight-medium">$ 20,600.00</div>
            </div>
            <div class="d-flex mb-3">
              <div class="text-caption font-weight-medium me-3">Vat 0%:</div>
              <div class="text-caption font-weight-medium">$ 00.00</div>
            </div>
            <div class="d-flex mb-3">
              <div class="text-caption font-weight-medium me-3">
                Sub total 0%:
              </div>
              <div class="text-caption font-weight-medium">$ 20,600.00</div>
            </div>
            <div class="d-flex mb-4">
              <div class="text-caption font-weight-medium me-3">Total:</div>
              <div class="text-caption font-weight-medium">$ 20,600.00</div>
            </div>
            <div class="d-flex align-items-center">
              <v-btn class="text-capitalize border-secondary me-2" flat>
                <i class="tio-">download_to </i
                ><span class="text-caption f-600">PDF</span>
              </v-btn>
              <v-btn class="text-capitalize" flat color="primary">
                Print Invoice
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6">
          <div class="p-card bg-secondary-lighten-5 h-100 rounded">
            <div
              class="px-3 py-2 bg-success-lighten-4 d-inline-flex rounded me-2 mb-5"
            >
              <span class="f-600 text-caption text-success">Approved</span>
            </div>
            <div
              class="px-3 py-2 bg-error-lighten-5 d-inline-flex rounded me-2 mb-5"
            >
              <span class="f-600 text-caption text-error">Pending Payment</span>
            </div>
            <div class="text-18 f-600 mb-6">Payment Details:</div>
            <div class="text-caption text-secondary">Paypal:</div>
            <div class="text-caption f-600 text-secondary-darken-1 mb-6">
              UI.lib@gmail.com
            </div>
            <div class="text-caption text-secondary">Account:</div>
            <div class="text-caption f-600 text-secondary-darken-1 mb-6">
              Nl24IBAN34553477847370033 AMB NLANBZTC
            </div>
            <div class="text-caption text-secondary">Payment Term:</div>
            <div class="text-caption f-600 text-secondary-darken-1 mb-6">
              14 Days . <span class="text-error">Due in 7 days</span>
            </div>
            <div class="text-18 f-600 mb-6">Payment Details:</div>
            <div class="text-caption text-secondary">Project Name:</div>
            <div class="text-caption f-600 text-secondary-darken-1 mb-6">
              Nitro Dashboard
              <router-link to="#" class="text-primary ms-4 text-decoration-none"
                >View Project</router-link
              >
            </div>
            <div class="text-caption text-secondary">Completed By:</div>
            <div class="text-caption f-600 text-secondary-darken-1 mb-6">
              UI.lib
            </div>
            <div class="text-caption text-secondary">Time Spent:</div>
            <div class="text-caption f-600 text-secondary-darken-1 mb-6">
              120 Hours . <span class="text-success">20$ / h rate</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </base-card>
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
  color: #88a6c9;
  font-size: 13px;
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
::v-deep(.vtl-tbody-td span) {
  font-size: 12px;
  font-weight: 500;
  color: #011e3d;
}
</style>
