<template>
  <base-card class="pa-0 product-card">
    <img class="w-100" src="@/assets/images/shoe/nike.png" />
    <div class="px-3 py-1 bg-error-lighten-5 d-inline-block rounded badge">
      <span class="text-error text-10 f-600">30% Off</span>
    </div>
    <div class="p-card d-flex justify-space-between align-center">
      <div>
        <div class="d-flex flex-row mb-2">
          <div class="avatar-20 rounded-circle bg-error"></div>
          <div class="avatar-20 ml--6 rounded-circle bg-primary"></div>
        </div>

        <div class="text-subtitle-2 mb-2 f-600">Nike Airmax 270</div>
        <div class="text-secondary f-600 text-18">$120</div>
      </div>
      <v-btn size="small" flat icon class="border rounded">
        <i class="text-20 f-500 tio-">add</i>
      </v-btn>
    </div>
  </base-card>
</template>
<style lang="scss" scoped>
.product-card {
  position: relative;
  .badge {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
  }
  .border {
    border: 1px solid #dbe9f2 !important;
  }
  .avatar-20 {
    width: 20px;
    height: 20px;
  }
  .ml--6 {
    margin-left: -6px;
  }
  .w-100 {
    width: 100%;
  }
}
</style>
