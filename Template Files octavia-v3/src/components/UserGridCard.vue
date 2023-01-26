<template>
  <base-card class="">
    <div class="d-flex justify-space-between align-center">
      <v-checkbox hide-details color="primary"></v-checkbox>
      <v-btn icon flat>
        <i class="tio- text-18 text-secondary">more_horizontal</i>
      </v-btn>
    </div>
    <div class="d-flex align-center mb-6">
      <v-avatar class="rounded me-2">
        <img class="w-full" src="@/assets/images/faces/1.jpg" alt="" />
      </v-avatar>
      <div>
        <div class="text-caption f-600">Zachary Gomez</div>
        <div class="text-caption text-secondary">zachary-gomez</div>
      </div>
    </div>
    <div class="d-flex mb-2">
      <i class="tio- text-secondary text-18 me-2">email</i>
      <div class="text-caption text-secondary font-weight-medium">
        Zachary-gomez@gmail.com
      </div>
    </div>
    <div class="d-flex mb-2">
      <i class="tio- text-secondary text-18 me-2">user_big</i>
      <div class="text-caption text-secondary font-weight-medium">
        Status: Editor
      </div>
    </div>
    <div class="d-flex mb-2">
      <i class="tio- text-secondary text-18 me-2">chat</i>
      <div class="text-caption text-secondary font-weight-medium">
        Posts: 12
      </div>
    </div>
  </base-card>
</template>
<style lang="scss" scoped></style>
