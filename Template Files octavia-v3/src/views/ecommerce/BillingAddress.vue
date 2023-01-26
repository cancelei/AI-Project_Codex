<script setup>
import { ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";

const radioGroup = ref(1);
const item = [{ title: "Home" }, { title: "Office" }];
const dialog = ref(false);
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
              <li class="step-wizard-item current-item active">
                <span class="progress-label text-primary f-600"
                  >Billing &amp; address</span
                >
              </li>
              <li class="step-wizard-item">
                <span class="progress-label f-600">Payment</span>
              </li>
            </ul>
          </v-col>
          <v-col cols="12">
            <div class="d-flex justify-space-between mb-6">
              <v-card-title
                class="mb-0 pa-0 border-bottom text-body-2 font-weight-medium"
                >Billing & address
              </v-card-title>

              <v-dialog v-model="dialog">
                <template v-slot:activator="{ props }">
                  <v-btn
                    flat
                    class="text-capitalize"
                    color="primary"
                    v-bind="props"
                  >
                    <i class="text-20 tio- me-2">add</i> Add New Address
                  </v-btn>
                </template>

                <base-card>
                  <v-card-title
                    class="pa-0 border-bottom text-body-2 font-weight-medium"
                    >Add new address
                  </v-card-title>
                  <v-radio-group hide-details v-model="radioGroup" class="mb-4">
                    <div class="d-flex">
                      <v-radio
                        hide-details
                        label="Home"
                        color="primary"
                        value="one"
                      ></v-radio>
                      <v-radio
                        hide-details
                        label="Office"
                        color="primary"
                        value="two"
                      ></v-radio>
                    </div>
                  </v-radio-group>
                  <v-row>
                    <v-col cols="12" lg="6">
                      <v-text-field
                        hide-details
                        outlined
                        label="Fullname"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <v-text-field
                        hide-details
                        outlined
                        label="Phone"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="12">
                      <v-text-field
                        hide-details
                        outlined
                        label="Address"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-text-field
                        hide-details
                        outlined
                        label="Town/City"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-text-field
                        hide-details
                        outlined
                        label="Town/City"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-text-field
                        hide-details
                        outlined
                        label="Town/City"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        hide-details
                        outlined
                        label="Country"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-checkbox
                        color="primary"
                        v-model="checkbox"
                        label="Use this address as default"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                  <v-card-actions class="d-flex justify-end">
                    <v-btn class="text-capitalize me-2" @click="dialog = false"
                      >Cancel</v-btn
                    >
                    <v-btn class="text-capitalize" flat color="primary"
                      >Deliver to this address</v-btn
                    >
                  </v-card-actions>
                </base-card>
              </v-dialog>
            </div>

            <base-card class="border-primary mb-7">
              <div class="d-flex justify-space-between align-center">
                <div>
                  <div class="d-flex align-center mb-2">
                    <i class="tio- text-primary me-2 text-20">city</i>
                    <div class="text-caption f-600 me-2">Office</div>
                    <div
                      class="bg-primary-lighten-5 px-2 py-1 text-caption f-600 rounded"
                    >
                      <span class="text-primary">Primary</span>
                    </div>
                  </div>
                  <div class="text-caption">
                    Ap #285-7193 Ullamcorper Avenue Amesbury HI 93373 USA
                  </div>
                </div>
                <i class="tio- text-primary text-20"> checkmark_circle </i>
              </div>
            </base-card>
            <base-card class="mb-7">
              <div class="d-flex justify-space-between align-center">
                <div>
                  <div class="d-flex align-center mb-2">
                    <i class="tio- text-secondary me-2 text-20">city</i>
                    <div class="text-caption f-600 me-2">Office</div>
                  </div>
                  <div class="text-caption">
                    Ap #285-7193 Ullamcorper Avenue Amesbury HI 93373 USA
                  </div>
                </div>
                <i class="tio- text-secondary text-20"> delete </i>
              </div>
            </base-card>
            <base-card class="mb-7">
              <div class="d-flex justify-space-between align-center">
                <div>
                  <div class="d-flex align-center mb-2">
                    <i class="tio- text-secondary me-2 text-20">city</i>
                    <div class="text-caption f-600 me-2">Office</div>
                  </div>
                  <div class="text-caption">
                    Ap #285-7193 Ullamcorper Avenue Amesbury HI 93373 USA
                  </div>
                </div>
                <i class="tio- text-secondary text-20"> delete </i>
              </div>
            </base-card>
          </v-col>
          <v-col cols="12">
            <router-link
              to="/ecommerce/checkout"
              class="text-decoration-none text-secondary-darken-5 f-600"
            >
              <i class="tio-">back_ui</i>
              Back
            </router-link>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card class="pa-0" card-title="Order Summery">
          <div class="p-card">
            <div class="d-flex justify-space-between mb-4">
              <div class="text-caption">Subtotal:</div>
              <div class="text-caption font-weight-medium">$230</div>
            </div>
            <div class="d-flex justify-space-between mb-4">
              <div class="text-caption">Vat 0%:</div>
              <div class="text-caption font-weight-medium">-</div>
            </div>
            <div class="d-flex justify-space-between mb-4">
              <div class="text-caption">Sub total:</div>
              <div class="text-caption font-weight-medium">$230</div>
            </div>
            <v-divider class="line-color my-4"></v-divider>
            <div class="d-flex justify-space-between mb-9">
              <div class="text-caption f-600">Total:</div>
              <div class="text-caption text-error font-weight-medium">$230</div>
            </div>

            <v-btn
              class="text-capitalize"
              to="/ecommerce/payment"
              color="primary"
              flat
              block
            >
              <i class="tio- me-2">shopping_cart</i>
              Payment
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
</style>
