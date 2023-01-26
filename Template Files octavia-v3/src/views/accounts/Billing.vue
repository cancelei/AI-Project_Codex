<script setup>
import Account from "@/components/Account.vue";
import { reactive } from "@vue/reactivity";
import TableLite from "vue3-table-lite";
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "Card",
      field: "card",
      width: "40%",
      sortable: true,
    },
    {
      label: "Name",
      field: "name",
      width: "20%",
      sortable: true,
    },
    {
      label: "Expire Date",
      field: "expireDate",
      width: "20%",
      sortable: true,
    },
    {
      label: "Action",
      field: "action",
      width: "20%",
      sortable: true,
    },
  ],
  rows: [
    {
      name: "Marcus Morris",
      expireDate: "09/24/2022",
    },
    {
      name: "Marcus Morris",
      expireDate: "09/24/2022",
    },
    {
      name: "Marcus Morris",
      expireDate: "09/24/2022",
    },
    {
      name: "Marcus Morris",
      expireDate: "09/24/2022",
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
      label: "Description",
      field: "description",
      width: "30%",
      sortable: false,
    },
    {
      label: "Amount",
      field: "amount",
      width: "20%",
      sortable: false,
    },
    {
      label: "Invoice",
      field: "invoice",
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
      label: "Action",
      field: "action",
      width: "10%",
      sortable: false,
    },
  ],
  rows: [
    {
      description: "Invoice for Nitro",
      amount: "$890",
      date: "Nov 12, 2021",
    },
    {
      description: "Invoice for Nitro",
      amount: "$890",
      date: "Nov 12, 2021",
    },
    {
      description: "Invoice for Nitro",
      amount: "$890",
      date: "Nov 12, 2021",
    },
    {
      description: "Invoice for Nitro",
      amount: "$890",
      date: "Nov 12, 2021",
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
      <base-card class="pa-0" card-title="Billing">
        <div class="p-card">
          <div
            class="pa-6 mb-6 border-primary rounded bg-secondary-lighten-5 d-flex justify-space-between flex-wrap"
          >
            <div class="d-flex align-center mb-4">
              <i class="text-24 text-primary me-3 tio-">notifications_alert</i>
              <div>
                <div class="text-caption f-600">We Need Your Attention</div>
                <div class="text-caption f-500">
                  Your payment was declined. To start using tools, please add
                  Payment Method
                </div>
              </div>
            </div>
            <v-btn
              flat
              class="text-capitalize mb-4"
              color="primary"
              hide-details
              >Add payment method</v-btn
            >
          </div>
          <v-row>
            <v-col cols="12" lg="3">
              <div class="d-flex justify-space-between">
                <h5>Users</h5>
                <span class="text-caption text-primary">50</span>
              </div>
              <v-progress-linear
                class="mb-2"
                value="15"
                color="primary"
              ></v-progress-linear>
              <div class="text-caption text-secondary font-weight-medium">
                14 Users remaining until your plan requires update
              </div>
            </v-col>
            <v-col cols="12">
              <div class="text-caption f-600 mb-1">
                Active until Dec 09, 2021
              </div>
              <div class="text-caption text-secondary mb-4">
                We will send you a notification upon Subscription expiration
              </div>
              <div class="text-caption f-600 mb-1">$24.99 Per Month</div>
              <div class="text-caption text-secondary mb-8">
                Extended Pro Package. Up to 100 Agents & 25 Projects
              </div>
              <div class="d-flex flex-wrap">
                <v-btn color="primary" flat class="me-3 mb-3 text-capitalize"
                  >Upgrade Plan</v-btn
                >
                <v-btn class="text-capitalize me-3 mb-3 border-secondary" flat
                  >Cancel</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>
        <v-card-title class="mb-4 border-bottom text-body-2 font-weight-medium"
          >Payment Methods</v-card-title
        >
        <perfect-scrollbar class="table">
          <table-lite
            :is-slot-mode="true"
            :columns="table.columns"
            :rows="table.rows"
            :total="table.totalRecordCount"
            :is-hide-paging="true"
          >
            <template v-slot:card>
              <v-avatar size="36" class="me-2 rounded-0">
                <img src="@/assets/images/payment/paypal.png" alt="" />
              </v-avatar>
              <span class="text-dark f-600 text-caption">Paypal **** 1679</span>
            </template>
            <template v-slot:action>
              <div class="d-flex">
                <v-btn class="text-capitalize me-2" size="small" flat icon>
                  <i class="tio- text-18 text-primary">edit</i>
                </v-btn>
                <v-btn class="text-capitalize me-2" size="small" flat icon>
                  <i class="tio- text-18 text-error">delete</i>
                </v-btn>
              </div>
            </template>
          </table-lite>
        </perfect-scrollbar>
        <v-card-title class="mb-4 text-body-2 font-weight-medium"
          >Billing Address</v-card-title
        >
        <v-row class="p-card">
          <v-col cols="12" lg="6">
            <div
              class="border-secondary rounded pa-3 d-flex justify-space-between align-center flex-wrap"
            >
              <div>
                <div class="d-flex align-center mb-3">
                  <i class="me-2 text-20 text-secondary tio-">home_outlined</i>
                  <div class="body-text-2 f-600">Home</div>
                </div>
                <p class="text-caption mb-0">
                  Ap #285-7193 Ullamcorper Avenue Amesbury HI 93373 US
                </p>
              </div>
              <div class="d-flex">
                <v-btn class="text-capitalize" flat icon size="small">
                  <i class="text-18 text-secondary tio-">edit</i>
                </v-btn>
                <v-btn class="text-capitalize" flat icon size="small">
                  <i class="text-18 text-secondary tio-">delete</i>
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="6">
            <div
              class="border-secondary rounded pa-3 d-flex justify-space-between align-center flex-wrap"
            >
              <div>
                <div class="d-flex align-center mb-3">
                  <i class="me-2 text-20 text-secondary tio-">city</i>
                  <div class="body-text-2 f-600">Office</div>
                </div>
                <p class="text-caption mb-0">
                  Ap #285-7193 Ullamcorper Avenue Amesbury HI 93373 US
                </p>
              </div>
              <div class="d-flex">
                <v-btn class="text-capitalize" flat icon size="small">
                  <i class="text-18 text-secondary tio-">edit</i>
                </v-btn>
                <v-btn class="text-capitalize" flat icon size="small">
                  <i class="text-18 text-secondary tio-">delete</i>
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="6">
            <div
              class="border-secondary rounded pa-3 d-flex justify-space-between align-center flex-wrap"
            >
              <div>
                <div class="d-flex align-center mb-3">
                  <i class="me-2 text-20 text-secondary tio-">home_outlined</i>
                  <div class="body-text-2 f-600">Home 2</div>
                </div>
                <p class="text-caption mb-0">
                  Ap #285-7193 Ullamcorper Avenue Amesbury HI 93373 US
                </p>
              </div>
              <div class="d-flex">
                <v-btn class="text-capitalize" flat icon size="small">
                  <i class="text-18 text-secondary tio-">edit</i>
                </v-btn>
                <v-btn class="text-capitalize" flat icon size="small">
                  <i class="text-18 text-secondary tio-">delete</i>
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="6">
            <div
              class="border-secondary bg-secondary-lighten-5 rounded pa-3 d-flex justify-space-between align-center flex-wrap"
            >
              <div>
                <div class="text-caption mb-3 f-600">Enter a new address</div>
                <div class="text-caption">Add your new destination..</div>
              </div>

              <v-btn class="text-capitalize" flat color="primary">
                New Address
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-card-title class="mb-0 border-bottom text-body-2 f-600"
          >Billing History</v-card-title
        >
        <perfect-scrollbar class="table">
          <table-lite
            :is-slot-mode="true"
            :columns="tableTwo.columns"
            :rows="tableTwo.rows"
            :total="tableTwo.totalRecordCount"
            :is-hide-paging="true"
          >
            <template v-slot:invoice>
              <div
                class="bg-secondary-lighten-4 text-white px-3 py-2 d-inline-block rounded text-caption"
              >
                PDF
              </div>
            </template>
            <template v-slot:action>
              <div class="d-flex">
                <v-btn class="text-capitalize me-2" size="small" flat icon>
                  <i class="tio- text-18 text-primary">edit</i>
                </v-btn>
                <v-btn class="text-capitalize me-2" size="small" flat icon>
                  <i class="tio- text-18 text-error">delete</i>
                </v-btn>
              </div>
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
  color: #88a6c9;
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
