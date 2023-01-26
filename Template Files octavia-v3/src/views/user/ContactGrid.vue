<script setup>
import { ref } from "vue";
import InformationCard from "@/components/InformationCard.vue";
const page = ref(1);
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="8" md="6" class="pe-0">
        <base-card class="h-100">
          <div
            class="d-flex flex-wrap mb-4 justify-space-between align-center flex-wrap"
          >
            <v-text-field
              class="mw-200"
              label="Search"
              variant="outlined"
              hide-details=""
            ></v-text-field>

            <v-btn-toggle
              class="d-flex justify-end flex-wrap"
              v-model="toggle_exclusive"
            >
              <v-btn flat class="bg-white rounded-0">
                <i class="tio- text-18 text-secondary">format_bullets</i>
              </v-btn>
              <v-btn flat class="bg-white rounded-0">
                <i class="tio- text-18 text-secondary">apps</i>
              </v-btn>
            </v-btn-toggle>
          </div>
          <v-row>
            <v-col
              v-for="(item, index) in 18"
              :key="index"
              cols="12"
              lg="4"
              md="6"
            >
              <base-card>
                <div class="d-flex justify-space-between">
                  <div class="d-flex">
                    <v-avatar size="36" class="rounded me-3">
                      <img
                        class="w-full"
                        src="@/assets/images/faces/2.jpg"
                        alt=""
                      />
                    </v-avatar>
                    <div>
                      <div class="text-caption f-600">Joe Boyd</div>
                      <div class="text-caption text-secondary">Designer</div>
                    </div>
                  </div>
                  <v-btn icon flat>
                    <i class="tio- text-secondary text-18">more_vertical</i>
                  </v-btn>
                </div>
              </base-card>
            </v-col>
            <v-col cols="12" class="text-center">
              <v-pagination
                rounded
                color="primary"
                v-model="page"
                :length="6"
              ></v-pagination>
            </v-col>
          </v-row>
        </base-card>
      </v-col>
      <v-col cols="12" lg="4" md="6" class="px-0">
        <InformationCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.mw-200 {
  max-width: 200px;
}
</style>
