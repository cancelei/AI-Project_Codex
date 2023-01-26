<script setup>
</script>

<template>
  <v-app class="bg-gray-100">
    <div class="">
      <v-sheet
        color="red"
        rounded=""
        elevation="3"
        height="100"
        width="100"
      ></v-sheet>
      <v-btn class="text-capitalize color="error" plain> Delete </v-btn>
      <div class="px-4 py-12" color="red">
        <h2 class="">
          Ready to dive in?
          <br />
          <span class="">Vite + Vue 3 + Vuetify 3</span>
        </h2>
        <div class="">
          <div class="">
            <router-link to="/about" class="">Next Page</router-link>

            <v-btn class="text-capitalize block> Block Button </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
