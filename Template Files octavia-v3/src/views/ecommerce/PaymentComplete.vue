<template>
  <v-container>
    <base-card class="text-center">
      <v-row>
        <v-col cols="12" lg="8" class="mx-auto">
          <img
            class="mw-100 pt-10 mb-7"
            src="/src/assets/images/payment-complete.svg"
          />
          <div class="text-h5 mb-4 f-600">Thanks for placing order 🎉</div>
          <div class="text-subtitle-2 text-primary mb-4">#AOSIDY2</div>
          <div class="text-h7">
            We will contact you soon when the shipment arrives
          </div>
          <v-divider class="line-color my-5"></v-divider>
          <div class="d-flex justify-center flex-wrap">
            <v-btn
              class="text-capitalize me-3 border-secondary mb-3"
              to="/ecommerce/shop"
              flat
            >
              <i class="tio-">back_ui</i>
              Continue Shopping
            </v-btn>
            <v-btn class="text-capitalize me-3 mb-3" flat color="success">
              <i class="tio-">download_to</i>
              Download as PDF
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </base-card>
  </v-container>
</template>
<style lang="scss" scoped>
.mw-100 {
  max-width: 100%;
}
</style>
