<script setup>
import ProductCard from "@/components/ProductCard.vue";
import { ref } from "@vue/reactivity";

const column = ref(null);
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
              <li class="step-wizard-item active">
                <span class="progress-label text-primary f-600">Payment</span>
              </li>
            </ul>
          </v-col>
          <v-col cols="12">
            <base-card>
              <v-card-title
                class="mb-8 pa-0 border-bottom text-body-2 font-weight-medium"
                >Payment Method
              </v-card-title>
              <v-radio-group v-model="column" column>
                <div class="d-flex align-center">
                  <div>
                    <v-radio color="primary" value="radio-1" class=""></v-radio>
                  </div>
                  <img
                    class="card-paypal"
                    src="@/assets/images/payment/paypal_text.png"
                    alt=""
                  />
                </div>
                <v-divider class="line-color my-2"></v-divider>
                <div class="d-flex justify-space-between flex-wrap mb-3">
                  <v-radio
                    color="primary"
                    label="Credit or debit card"
                    value="radio-2"
                  ></v-radio>
                  <div class="d-flex align-center">
                    <v-img
                      class="me-2"
                      width="30px"
                      height="20px"
                      src="@/assets/images/payment/Visa.png"
                    ></v-img>
                    <v-img
                      class="me-2"
                      width="30px"
                      height="20px"
                      src="@/assets/images/payment/MasterCard.png"
                    ></v-img>
                    <v-img
                      class="me-2"
                      width="30px"
                      height="20px"
                      src="@/assets/images/payment/AmericanExpress.png"
                    ></v-img>
                  </div>
                </div>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      outlined
                      label="Card Number"
                      hide-details=""
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <v-text-field
                      outlined
                      label="Exp Date"
                      hide-details=""
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <v-text-field
                      outlined
                      label="CVC"
                      hide-details=""
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-divider class="line-color my-2"></v-divider>
                <v-radio
                  color="primary"
                  label="Cash on Delivery"
                  value="radio-3"
                ></v-radio>
              </v-radio-group>
            </base-card>
          </v-col>
          <v-col cols="12">
            <router-link
              to="/ecommerce/billing-address"
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
              to="/ecommerce/payment-complete"
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

.card-paypal {
  width: 60px;
  height: 16px;
}
</style>
