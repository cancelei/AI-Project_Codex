<template>
  <base-card class="pa-0 product-grid-card">
    <v-checkbox
      class="checkbox-product"
      label="red"
      color="primary"
      value="``"
      hide-details
    ></v-checkbox>
    <img class="w-full" src="@/assets/images/products/smart-watch.png" />
    <div class="py-4">
      <div class="text-caption f-600 text-center mb-2">Typewriter</div>
      <div class="text-caption font-weight-medium text-secondary text-center">
        $200
      </div>
    </div>
  </base-card>
</template>
<style lang="scss" scoped>
.product-grid-card {
  position: relative;
  .checkbox-product {
    position: absolute;
    z-index: 99;
    margin-left: 10px;
  }
}
</style>
