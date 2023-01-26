<script setup>
import Account from "@/components/Account.vue";
</script>

<template>
  <v-container>
    <Account>
      <base-card class="pa-0">
        <div class="p-card">
          <v-card-title class="pa-0 me-4 text-subtitle-2 f-600"
            >Connected Accounts
          </v-card-title>
          <div class="text-caption text-secondary">
            Two-factor authentication adds an extra layer of security to your
            account. To log in, in you'll need to provide a 4 digit amazing
            code.
            <router-link to="#" class="text-decoration-none"
              >Learn More</router-link
            >
          </div>
        </div>
        <v-divider class="line-color"></v-divider>
        <div class="p-card d-flex justify-space-between align-center">
          <div class="d-flex align-items-center flex-wrap">
            <v-avatar size="36" class="me-2">
              <img
                class=""
                src="@/assets/images/social-media/Google.png"
                alt=""
              />
            </v-avatar>
            <div>
              <div class="text-caption f-600">Google</div>
              <div class="text-caption text-secondary">
                Plan properly your workflow
              </div>
            </div>
          </div>
          <div>
            <v-switch color="primary" hide-details></v-switch>
          </div>
        </div>
        <v-divider class="line-color"></v-divider>
        <div class="p-card d-flex justify-space-between align-center">
          <div class="d-flex align-items-center flex-wrap">
            <v-avatar size="36" class="me-2">
              <img
                class=""
                src="@/assets/images/social-media/Twitter.png"
                alt=""
              />
            </v-avatar>
            <div>
              <div class="text-caption f-600">Twitter</div>
              <div class="text-caption text-secondary">
                Keep eye on on your Repositories
              </div>
            </div>
          </div>
          <div>
            <v-switch color="primary" hide-details></v-switch>
          </div>
        </div>
        <v-divider class="line-color"></v-divider>
        <div class="p-card d-flex justify-space-between align-center">
          <div class="d-flex align-items-center flex-wrap">
            <v-avatar size="36" class="me-2">
              <img
                class=""
                src="@/assets/images/social-media/Instagram.png"
                alt=""
              />
            </v-avatar>
            <div>
              <div class="text-caption f-600">Instagram</div>
              <div class="text-caption text-secondary">
                Keep up with the stories
              </div>
            </div>
          </div>
          <div>
            <v-switch color="primary" hide-details></v-switch>
          </div>
        </div>
        <v-divider class="line-color"></v-divider>
        <div class="p-card d-flex justify-space-between align-center">
          <div class="d-flex align-items-center flex-wrap">
            <v-avatar size="36" class="me-2">
              <img
                class=""
                src="@/assets/images/social-media/soundcloud1.png"
                alt=""
              />
            </v-avatar>
            <div>
              <div class="text-caption f-600">Soundcloud</div>
              <div class="text-caption text-secondary">
                Playlist to get you by
              </div>
            </div>
          </div>
          <div>
            <v-switch color="primary" hide-details></v-switch>
          </div>
        </div>
        <v-divider class="line-color"></v-divider>
      </base-card>
    </Account>
  </v-container>
</template>
