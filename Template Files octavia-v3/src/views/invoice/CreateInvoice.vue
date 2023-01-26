<script setup>
import { ref, reactive } from "@vue/reactivity";
import TableLite from "vue3-table-lite";
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "Item",
      field: "item",
      width: "20%",
      sortable: false,
    },
    {
      label: "Qty",
      field: "qty",
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
      label: "Total",
      field: "total",
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
  rows: [{ total: "$0.00" }],
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
      <v-col cols="12" lg="8">
        <base-card>
          <div class="d-flex justify-space-between">
            <div class="d-flex align-center">
              <div class="text-h5 me-2">Invoice#</div>
              <span class="text-secondary text-subtitle f-600">12345678</span>
            </div>
          </div>
          <v-row>
            <v-col cols="12" lg="6">
              <v-divider class="line-color my-6"></v-divider>
              <div class="text-subtitle-2 f-600 mb-6">Bill From:</div>
              <v-text-field
                variant="outlined"
                hide-details
                color="primary"
                label="Name"
                class="mb-6"
              ></v-text-field>
              <v-text-field
                variant="outlined"
                hide-details
                color="primary"
                label="Email"
                class="mb-6"
              ></v-text-field>
              <v-textarea
                name="input-7-1"
                label="Who is this invoice from?"
                variant="outlined"
              ></v-textarea>
            </v-col>
            <v-col cols="12" lg="6">
              <v-divider class="line-color my-6"></v-divider>
              <div class="text-subtitle-2 f-600 mb-6">Bill From:</div>
              <v-text-field
                variant="outlined"
                hide-details
                color="primary"
                label="name"
                class="mb-6"
              ></v-text-field>
              <v-text-field
                variant="outlined"
                hide-details
                color="primary"
                label="Email"
                class="mb-6"
              ></v-text-field>
              <v-textarea
                name="input-7-1"
                label="Who is this invoice from?"
                variant="outlined"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <perfect-scrollbar class="table">
                <table-lite
                  :is-slot-mode="true"
                  :columns="table.columns"
                  :rows="table.rows"
                  :total="table.totalRecordCount"
                  :is-hide-paging="true"
                >
                  <template v-slot:item>
                    <v-text-field
                      hide-details
                      outlined
                      color="primary"
                      label="Name"
                      variant="outlined"
                    ></v-text-field>
                  </template>
                  <template v-slot:qty>
                    <v-text-field
                      hide-details
                      outlined
                      color="primary"
                      label="Quantity"
                      variant="outlined"
                    ></v-text-field>
                  </template>
                  <template v-slot:price>
                    <v-text-field
                      hide-details
                      outlined
                      color="primary"
                      label="Price"
                      variant="outlined"
                    ></v-text-field>
                  </template>
                  <template v-slot:action>
                    <v-btn class="text-capitalize" flat icon size="small">
                      <i class="tio- text-18 text-secondary">delete</i>
                    </v-btn>
                  </template>
                </table-lite>
              </perfect-scrollbar>
            </v-col>
            <v-col cols="12">
              <div class="d-flex flex-wrap justify-space-between">
                <v-btn class="text-capitalize mb-4 text-primary" flat
                  >Add item</v-btn
                >
                <div>
                  <div class="d-flex justify-space-between mb-4">
                    <div class="text-subtitle-2 me-10">Subtotal</div>
                    <div class="text-subtitle-2">$ 0.00</div>
                  </div>
                  <div class="text-subtitle-2 text-primary me-10 mb-4">
                    Add tax
                  </div>
                  <div class="text-subtitle-2 text-primary me-10 mb-4">
                    Add Discount
                  </div>
                  <v-divider class="line-color my-5"></v-divider>
                  <div class="d-flex justify-space-between mb-4">
                    <div class="text-subtitle-2 me-10">Total</div>
                    <div class="text-subtitle-2">$ 0.00</div>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12">
              <div class="text-subtitle-2 f-600 mb-3">Notes</div>
              <v-text-field
                hide-details
                variant="outlined"
                color="primary"
                outlined
                label="Thanks"
              ></v-text-field>
            </v-col>
          </v-row>
        </base-card>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card>
          <v-card-title
            class="mb-0 pa-0 border-bottom text-body-2 font-weight-medium"
            >Currency
          </v-card-title>
          <v-text-field
            variant="outlined"
            color="primary"
            label="Name"
            hide-details
          ></v-text-field>
          <v-divider class="line-color my-4"></v-divider>
          <div class="d-flex justify-space-between align-center mb-6">
            <div class="text-subtitle f-600">Payment Method</div>
            <div>
              <v-switch color="primary" hide-details></v-switch>
            </div>
          </div>
          <div class="d-flex justify-space-between align-center mb-6">
            <div class="text-subtitle f-600">Late Fee</div>
            <div>
              <v-switch color="primary" hide-details></v-switch>
            </div>
          </div>
          <div class="d-flex justify-space-between align-center mb-6">
            <div class="text-subtitle f-600">Notes</div>
            <div>
              <v-switch color="primary" hide-details></v-switch>
            </div>
          </div>
          <v-divider class="line-color my-3"></v-divider>
          <div class="d-flex justify-space-between mb-4">
            <v-btn flat class="border-secondary text-capitalize">Preview</v-btn>
            <v-btn class="text-capitalize border-secondary" flat
              >Download</v-btn
            >
          </div>
          <v-btn class="text-capitalize" block flat color="primary">
            <i class="tio- me-2">send</i>
            Send Invoice
          </v-btn>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  background-color: transparent;
  border-color: transparent;
  color: #131e3e;
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
}

::v-deep(.vtl-paging-pagination-page-link) {
  border: none;
}

// input text-field
::v-deep(.v-input__details) {
  display: none;
}
</style>
