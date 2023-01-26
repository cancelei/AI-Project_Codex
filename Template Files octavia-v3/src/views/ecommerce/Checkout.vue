<script setup>
import ProductCard from "@/components/ProductCard.vue";
import { reactive } from "@vue/reactivity";
import TableLite from "vue3-table-lite";
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "Product",
      field: "product",
      width: "40%",
      sortable: true,
    },
    {
      label: "Quantity",
      field: "quantity",
      width: "20%",
      sortable: true,
    },
    {
      label: "Price",
      field: "price",
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
      product: {
        img: "/sr",
        title: "Nike Air Jordan",
        color: "White",
        size: "09",
      },
      price: "$230",
    },
    {
      product: {
        img: "/sr",
        title: "Addidas",
        color: "White",
        size: "09",
      },
      price: "$230",
    },
    {
      product: {
        img: "/sr",
        title: "asd Air Jordan",
        color: "White",
        size: "09",
      },
      price: "$230",
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
    <div class="d-flex align-center mb-7">
      <div class="bg-primary-lighten-5 px-3 py-2 rounded me-3 d-inline-block">
        <i class="tio- text-primary text-18">shopping</i>
      </div>
      <div class="text-subtitle-2 f-600">Checkout</div>
    </div>
    <v-row>
      <v-col cols="12" lg="8">
        <v-row>
          <v-col cols="12">
            <ul class="step-wizard-list">
              <li class="step-wizard-item active">
                <span class="progress-label text-primary f-600">Cart</span>
              </li>
              <li class="step-wizard-item current-item">
                <span class="progress-label f-600">Billing &amp; address</span>
              </li>
              <li class="step-wizard-item">
                <span class="progress-label f-600">Payment</span>
              </li>
            </ul>
          </v-col>
          <v-col cols="12">
            <base-card class="pa-0">
              <v-card-title
                class="mb-0 pb-0 border-bottom text-body-2 font-weight-medium"
                >Cart <span class="text-secondary ms-1"> (3 item) </span>
              </v-card-title>
              <perfect-scrollbar class="table">
                <table-lite
                  :is-slot-mode="true"
                  :columns="table.columns"
                  :rows="table.rows"
                  :total="table.totalRecordCount"
                  :is-hide-paging="true"
                >
                  <template v-slot:product>
                    <div class="d-flex align-items-center">
                      <v-avatar size="64" class="me-2 rounded flex-shrink-0">
                        <img
                          class="w-full"
                          src="@/assets/images/shoe/nike.png"
                          alt=""
                        />
                      </v-avatar>
                      <div>
                        <div class="text-caption f-600 text-truncate">
                          Nike Air Jordan
                        </div>
                        <div class="text-secondary text-caption">
                          Color:
                          <span class="text-secondary-darken-4">White</span>
                        </div>
                        <div class="text-grey-500 text-caption">
                          Size: <span class="text-secondary-darken-4">09</span>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-slot:quantity>
                    <v-btn-toggle
                      class="product-btn-group me-2 d-inline-flex"
                      v-model="toggle_exclusive"
                      mandatory
                    >
                      <v-btn flat>
                        <i class="tio-">remove</i>
                      </v-btn>
                      <span class="mx-3 d-flex align-center">1</span>
                      <v-btn flat>
                        <i class="tio-">add</i>
                      </v-btn>
                    </v-btn-toggle>
                  </template>
                  <template v-slot:action>
                    <div class="d-flex">
                      <v-btn class="text-capitalize" size="small" flat icon>
                        <i class="tio- text-18 text-secondary">clear</i>
                      </v-btn>
                    </div>
                  </template>
                </table-lite>
              </perfect-scrollbar>
            </base-card>
          </v-col>
          <v-col cols="12">
            <router-link
              to="/ecommerce/shop"
              class="text-decoration-none text-secondary-darken-5 f-600"
            >
              <i class="tio-">back_ui</i>
              Continue Shopping
            </router-link>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card class="pa-0" card-title="Order Summery">
          <div class="p-card">
            <div class="d-flex justify-space-between mb-4">
              <div class="text-caption font-weight-medium">Subtotal:</div>
              <div class="text-caption font-weight-medium">$230</div>
            </div>
            <div class="d-flex justify-space-between mb-4">
              <div class="text-caption font-weight-medium">Vat 0%:</div>
              <div class="text-caption font-weight-medium">-</div>
            </div>
            <div class="d-flex justify-space-between mb-4">
              <div class="text-caption font-weight-medium">Sub total:</div>
              <div class="text-caption font-weight-medium">$230</div>
            </div>
            <v-divider class="line-color my-4"></v-divider>
            <div class="d-flex justify-space-between mb-9">
              <div class="text-caption font-weight-medium">Subtotal:</div>
              <div class="text-caption text-error font-weight-medium">$230</div>
            </div>
            <v-btn
              class="text-capitalize mb-3 bg-secondary-lighten-5"
              flat
              block
              >Discount Coupon</v-btn
            >
            <v-btn
              class="text-capitalize"
              to="/ecommerce/billing-address"
              color="primary"
              flat
              block
            >
              <i class="tio- me-2">shopping_cart</i>
              Checkout Now
            </v-btn>
          </div>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
// start::step-wizard-component
.table {
  display: block;
  width: 100%;
  overflow-x: auto;
}
.step-wizard-list li.active + li:after {
  background-color: #0a68ff;
}
.step-wizard-item.active::before {
  background-color: #0a68ff;
}
.step-wizard-list {
  display: block;
  list-style: none;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding-left: 0;

  li {
    display: inline-block;
    position: relative;
    width: 33%;
    text-align: center;
    color: #a7beda;
    @media (max-width: 992px) {
      span {
        display: none;
      }
    }
    &:first-child:after {
      content: none;
    }
    &.active + li:after {
      background-color: "#0A68FF" !important;
    }
    &.active {
      color: "#0A68FF";
      &:before {
        background-color: "#0A68FF";
      }
    }
    &:before {
      display: block;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      background-color: #a7beda;
      // line-height: 100px;
      text-align: center;
      content: "";
      margin: 0px auto;
      position: relative;
      z-index: 2;
    }
    &:after {
      content: "";
      background-color: #a7beda;
      width: 100%;
      height: 1px;
      position: absolute;
      left: -50%;
      top: 7px;
      z-index: 1;
    }
  }
}
// end::step-wizard-component
::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  background-color: transparent;
  border-color: transparent;
  color: #131e3e;
  font-weight: 600;
  border-bottom: 1px solid #cee8ff;
}
::v-deep(.vtl-thead-tr) {
  background-color: #cee8ff;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
  border: none !important;
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
  border: none !important;
}
</style>
