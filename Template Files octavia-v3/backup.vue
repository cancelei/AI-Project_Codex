<template>
  <v-list class="bg-white">
    <v-list-item>
      <v-list-item-title>View Profile</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title
        class="mouse-hover"
        @click="handleSignOut"
        v-if="isLoggedIn"
        >Sign Out</v-list-item-title
      >
    </v-list-item>
  </v-list>
</template>
