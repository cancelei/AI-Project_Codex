<script setup>
import AccountCover from "@/components/AccountCover.vue";

import { reactive } from "@vue/reactivity";
import TableLite from "vue3-table-lite";
const table = reactive({
  isLoading: false,
  columns: [
    {
      field: "name",
      width: "30%",
      sortable: false,
    },
    {
      field: "date",
      width: "30%",
      sortable: false,
    },
    {
      field: "groupAvatar",
      width: "30%",
      sortable: false,
    },
    {
      label: false,
      field: "visitor",
      width: "20%",
      sortable: false,
    },
  ],
  rows: [
    {
      name: {
        bgColor: "bg-primary-lighten-5",
        textColor: "text-primary",
        icon: "keyframe_bezier_in",
        title: "Ui Lib",
        subTitle: "Software Engineers",
      },

      date: "Formed Jan 12, 2021",
    },
    {
      name: {
        bgColor: "bg-info-lighten-3",
        textColor: "text-info",
        icon: "palette_outlined",
        title: "Team UKo",
        subTitle: "Visual Desginers",
      },

      date: "Formed Jan 12, 2021",
    },
    {
      name: {
        bgColor: "bg-warning-lighten-5",
        textColor: "text-warning",
        icon: "invert_colors",
        title: "Team Olly",
        subTitle: "Developers",
      },

      date: "Formed Jan 12, 2021",
    },
  ],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
});

const tags = reactive([
  "a 2",
  "Dogs",
  "Basketball",
  "Football",
  "Cricket",
  "Skateboarding",
  "Rock Climbing",
  "Painting",
  "Cat",
  "Cars",
  "Video Games",
  "Climbing",
  "Hockey",
  "Table Tennis",
]);
</script>
<template>
  <v-container>
    <AccountCover />
    <v-alert
      class="border-primary bg-primary-lighten-5 flex-row rounded-lg mb-5 pa-5"
      outlined
    >
      <div class="d-flex">
        <i class="text-primary text-20 tio- me-3">security_warning_outlined</i>
        <div>
          <div class="text-subtitle-2 f-600">
            Please verify you email before using our service
          </div>
          <div class="text-secondary text-caption font-weight-medium">
            He mouth. Only in with the will.
          </div>
        </div>
      </div>
    </v-alert>
    <v-row>
      <v-col cols="12" lg="8">
        <base-card class="mb-5">
          <div class="d-flex justify-space-between align-center mb-5">
            <v-card-title
              class="mb-0 pa-0 border-bottom text-body-2 font-weight-medium"
              >Summary
            </v-card-title>
            <v-btn
              class="text-capitalize border-secondary rounded-lg"
              icon
              size="small"
              flat
            >
              <i class="text-20 tio-">edit</i>
            </v-btn>
          </div>
          <div class="text-subtitle-2 text-secondary font-weight-regular mb-4">
            The new iPad combines the power and capability of a computer with
            the ease of use and versatility you’d never expect from one.
          </div>
          <div class="text-subtitle-2 text-secondary font-weight-regular mb-4">
            And now it’s even more versatile, with a larger 10.2‑inch Retina
            display, support he new iPad combines the power and capability of a
            computer with the ease of use and versatility you’d never expect
          </div>
        </base-card>
        <base-card class="mb-5">
          <div class="d-flex justify-space-between align-center mb-5">
            <v-card-title
              class="mb-0 pa-0 border-bottom text-body-2 font-weight-medium"
              >Skills
            </v-card-title>
            <v-btn
              icon
              size="small"
              class="text-capitalize border-secondary rounded-lg"
              flat
            >
              <i class="text-20 tio-">edit</i>
            </v-btn>
          </div>
          <v-row>
            <v-col
              v-for="(item, index) in 8"
              :key="index"
              cols="12"
              lg="4"
              md="6"
              sm="6"
            >
              <div class="d-flex">
                <v-btn
                  icon
                  size="small"
                  class="border-secondary rounded-lg me-2"
                  flat
                >
                  <i class="text-20 text-primary tio-">add</i>
                </v-btn>
                <div class="bg-primary-lighten-5 rounded d-flex align-center">
                  <div class="text-caption px-4 f-600">
                    Graphic Design <span class="text-secondary"> - 40</span>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" lg="4" md="6" sm="6">
              <div class="d-flex">
                <v-btn
                  icon
                  color="primary"
                  size="small"
                  class="rounded-lg me-2"
                  flat
                >
                  <i class="text-20 tio-">checkmark_circle</i>
                </v-btn>
                <div class="bg-primary rounded d-flex align-center">
                  <div class="text-caption px-4 f-600">Graphic Design - 40</div>
                </div>
              </div>
            </v-col>
          </v-row>
        </base-card>
        <base-card class="mb-5 pa-0">
          <v-card-title
            class="mb-0 pb-0 border-bottom text-body-2 font-weight-medium"
            >Teams
          </v-card-title>
          <perfect-scrollbar class="table mt-0 pt-0">
            <table-lite
              :is-slot-mode="true"
              :columns="table.columns"
              :rows="table.rows"
              :total="table.totalRecordCount"
              :is-hide-paging="true"
            >
              <template v-slot:name="data">
                <div class="d-flex align-center">
                  <div
                    :class="data.value.name.bgColor"
                    class="rounded pa-2 me-2"
                  >
                    <i
                      :class="data.value.name.textColor"
                      class="tio- text-20"
                      >{{ data.value.name.icon }}</i
                    >
                  </div>

                  <div>
                    <div class="text-caption font-weight-medium">
                      {{ data.value.name.title }}
                    </div>
                    <div class="text-caption font-weight-medium text-secondary">
                      {{ data.value.name.subTitle }}
                    </div>
                  </div>
                </div>
              </template>
              <template v-slot:groupAvatar>
                <div class="avatar-group-32 me-2">
                  <div class="avatar">+9</div>
                  <div class="avatar">
                    <img src="@/assets/images/faces/avatar.png" />
                  </div>
                  <div class="avatar">
                    <img src="@/assets/images/faces/avatar.png" />
                  </div>
                  <div class="avatar">
                    <img src="@/assets/images/faces/avatar.png" />
                  </div>
                </div>
              </template>
              <template v-slot:visitor>
                <div
                  class="rounded-pill d-inline-flex bg-secondary-lighten-5 px-4 py-2 me-2"
                >
                  <span
                    class="text-secondary-darken-1 font-weight-medium text-10"
                    >30 members</span
                  >
                </div>
              </template>
            </table-lite>
          </perfect-scrollbar>
        </base-card>
        <base-card class="mb-5">
          <div class="d-flex justify-space-between align-center mb-5">
            <v-card-title
              class="mb-0 pa-0 border-bottom text-body-2 font-weight-medium"
              >Hobbies
            </v-card-title>
            <v-btn
              icon
              size="small"
              class="text-capitalize border-secondary rounded-lg"
              flat
            >
              <i class="text-20 tio-">edit</i>
            </v-btn>
          </div>
          <div class="d-flex flex-wrap">
            <div
              v-for="item in tags"
              :key="item"
              class="bg-secondary-lighten-4 pa-2 rounded-lg me-2 mb-2"
            >
              <span class="text-caption font-weight-medium">{{ item }}</span>
            </div>
          </div>
        </base-card>
        <base-card class="mb-5">
          <div class="d-flex justify-space-between flex-wrap align-center mb-5">
            <v-card-title
              class="mb-0 pa-0 border-bottom text-body-2 font-weight-medium"
              >Post
            </v-card-title>
            <div class="d-flex flex-wrap">
              <v-btn class="text-capitalize border-secondary me-2 mb-2" flat>
                <i class="text-20 tio- me-2">edit</i>
                Create Post
              </v-btn>
              <v-btn class="text-capitalize border-secondary me-2 mb-2" flat>
                <i class="text-20 tio- me-2">edit</i>
                View All
              </v-btn>
            </div>
          </div>
          <div class="d-flex justify-space-between flex-wrap align-center mb-6">
            <div class="me-5">
              <div class="text-caption f-600">
                The International on the way 2021
              </div>
              <div
                class="text-caption text-secondary-darken-4 font-weight-medium mb-1"
              >
                Esports
              </div>
              <i class="text-secondary tio-">date_ranger </i
              ><span class="text-secondary text-10"
                >Publish on Nov 21, 2021</span
              >
            </div>
            <v-img
              max-width="124"
              width="124"
              src="/src/assets/images/products/console.png"
              alt=""
            ></v-img>
          </div>
          <div class="d-flex justify-space-between flex-wrap align-center mb-6">
            <div class="me-5">
              <div class="text-caption f-600">Global Warming Conclusion</div>
              <div
                class="text-caption text-secondary-darken-4 font-weight-medium mb-1"
              >
                Enviroment
              </div>
              <i class="text-secondary tio-">date_ranger </i
              ><span class="text-secondary text-10"
                >Publish on Nov 21, 2021</span
              >
            </div>
            <v-img
              max-width="124"
              width="124"
              src="/src/assets/images/products/globe.png"
              alt=""
            ></v-img>
          </div>
          <div class="d-flex justify-space-between flex-wrap align-center mb-6">
            <div class="me-5">
              <div class="text-caption f-600">Crypto is the future</div>
              <div
                class="text-caption text-secondary-darken-4 font-weight-medium mb-1"
              >
                Enviroment
              </div>
              <i class="text-secondary tio-">date_ranger </i
              ><span class="text-secondary text-10"
                >Publish on Nov 21, 2021</span
              >
            </div>
            <v-img
              max-width="124"
              width="124"
              src="/src/assets/images/products/bitcoin.png"
              alt=""
            ></v-img>
          </div>
        </base-card>
        <base-card class="mb-5">
          <div class="d-flex justify-space-between flex-wrap align-center mb-5">
            <v-card-title
              class="mb-0 pa-0 border-bottom text-body-2 font-weight-medium"
              >Portfolio
            </v-card-title>
            <v-btn class="text-capitalize border-secondary mb-2" flat>
              View All
            </v-btn>
          </div>
          <v-row>
            <v-col cols="12" lg="4" md="6">
              <base-card class="pa-0 product-card">
                <img
                  class="w-full"
                  src="/src/assets/images/products/3d-2.png"
                />
                <div class="badge bg-white text-center px-4 py-2 rounded">
                  <div class="text-caption f-600 d-block">12</div>
                  <div
                    class="text-caption text-secondary font-weight-medium d-block"
                  >
                    Jan
                  </div>
                </div>
                <div class="p-card">
                  <div
                    class="bg-primary-lighten-5 d-inline-flex rounded font-weight-bold px-3 py-2 mb-2"
                  >
                    <span class="text-primary text-caption font-weight-medium"
                      >Minimal</span
                    >
                  </div>
                  <div class="d-flex justify-space-between flex-wrap">
                    <div>
                      <div class="text-caption-2 f-600">Hollow Purple</div>
                      <div class="body-text-1 text-secondary">
                        12.00 Nov 21, 2021
                      </div>
                    </div>
                    <div class="d-flex flex-wrap">
                      <v-btn
                        icon
                        size="small"
                        class="border-secondary rounded-lg me-2 mb-2"
                        flat
                      >
                        <i class="text-20 tio- text-primary">download_to</i>
                      </v-btn>
                      <v-btn
                        icon
                        size="small"
                        class="border-secondary rounded-lg me-2 mb-2"
                        flat
                      >
                        <i class="text-20 tio- text-secondary">heart</i>
                      </v-btn>
                    </div>
                  </div>
                </div>
              </base-card>
            </v-col>
            <v-col cols="12" lg="4" md="6">
              <base-card class="pa-0 product-card">
                <img class="w-full" src="/src/assets/images/products/3d.png" />
                <div class="badge bg-white text-center px-4 py-2 rounded">
                  <div class="text-caption f-600 d-block">12</div>
                  <div
                    class="text-caption text-secondary font-weight-medium d-block"
                  >
                    Jan
                  </div>
                </div>
                <div class="p-card">
                  <div
                    class="bg-primary-lighten-5 d-inline-flex rounded font-weight-bold px-3 py-2 mb-2"
                  >
                    <span class="text-primary text-caption font-weight-medium"
                      >Minimal</span
                    >
                  </div>
                  <div class="d-flex justify-space-between flex-wrap">
                    <div>
                      <div class="text-caption-2 f-600">Hollow Purple</div>
                      <div class="body-text-1 text-secondary">
                        12.00 Nov 21, 2021
                      </div>
                    </div>
                    <div class="d-flex flex-wrap">
                      <v-btn
                        icon
                        size="small"
                        class="border-secondary rounded-lg me-2 mb-2"
                        flat
                      >
                        <i class="text-20 tio- text-primary">download_to</i>
                      </v-btn>
                      <v-btn
                        icon
                        size="small"
                        class="border-secondary rounded-lg me-2 mb-2"
                        flat
                      >
                        <i class="text-20 tio- text-secondary">heart</i>
                      </v-btn>
                    </div>
                  </div>
                </div>
              </base-card>
            </v-col>
            <v-col cols="12" lg="4" md="6">
              <base-card class="pa-0 product-card">
                <img
                  class="w-full"
                  src="/src/assets/images/products/wave.png"
                />
                <div class="badge bg-white text-center px-4 py-2 rounded">
                  <div class="text-caption f-600 d-block">12</div>
                  <div
                    class="text-caption text-secondary font-weight-medium d-block"
                  >
                    Jan
                  </div>
                </div>
                <div class="p-card">
                  <div
                    class="bg-primary-lighten-5 d-inline-flex rounded font-weight-bold px-3 py-2 mb-2"
                  >
                    <span class="text-primary text-caption font-weight-medium"
                      >Minimal</span
                    >
                  </div>
                  <div class="d-flex justify-space-between flex-wrap">
                    <div>
                      <div class="text-caption-2 f-600">Hollow Purple</div>
                      <div class="body-text-1 text-secondary">
                        12.00 Nov 21, 2021
                      </div>
                    </div>
                    <div class="d-flex flex-wrap">
                      <v-btn
                        icon
                        size="small"
                        class="border-secondary rounded-lg me-2 mb-2"
                        flat
                      >
                        <i class="text-20 tio- text-primary">download_to</i>
                      </v-btn>
                      <v-btn
                        icon
                        size="small"
                        class="border-secondary rounded-lg me-2 mb-2"
                        flat
                      >
                        <i class="text-20 tio- text-secondary">heart</i>
                      </v-btn>
                    </div>
                  </div>
                </div>
              </base-card>
            </v-col>
          </v-row>
        </base-card>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card class="mb-5">
          <v-card-title
            class="mb-5 pa-0 border-bottom text-body-2 font-weight-medium"
            >My Connections
          </v-card-title>
          <div class="d-flex mb-5">
            <v-avatar size="46" class="me-3">
              <img class="w-full" src="@/assets/images/faces/1.jpg" alt="" />
            </v-avatar>
            <div>
              <div class="text-caption f-600">Martha Hawk</div>
              <div class="text-caption text-secondary">Developer</div>
            </div>
          </div>
          <div class="d-flex mb-5">
            <v-avatar size="46" class="me-3">
              <img class="w-full" src="@/assets/images/faces/2.jpg" alt="" />
            </v-avatar>
            <div>
              <div class="text-caption f-600">Smantha Hoopes</div>
              <div class="text-caption text-secondary">Developer</div>
            </div>
          </div>
          <div class="d-flex mb-5">
            <v-avatar size="46" class="me-3">
              <img class="w-full" src="@/assets/images/faces/3.jpg" alt="" />
            </v-avatar>
            <div>
              <div class="text-caption f-600">Sun Myi</div>
              <div class="text-caption text-secondary">Developer</div>
            </div>
          </div>
          <div class="d-flex mb-5">
            <v-avatar size="46" class="me-3">
              <img class="w-full" src="@/assets/images/faces/4.jpg" alt="" />
            </v-avatar>
            <div>
              <div class="text-caption f-600">Chris Pine</div>
              <div class="text-caption text-secondary">Developer</div>
            </div>
          </div>
        </base-card>
        <base-card class="mb-5">
          <div class="d-flex justify-space-between align-center mb-5">
            <v-card-title
              class="mb-0 pa-0 border-bottom text-body-2 font-weight-medium"
              >Additional Details
            </v-card-title>
            <v-btn
              icon
              size="small"
              class="border-secondary rounded-lg text-capitalize"
              flat
            >
              <i class="text-20 tio-">edit</i>
            </v-btn>
          </div>
          <div class="d-flex align-center mb-5">
            <div class="me-2 bg-primary-lighten-5 pa-2 rounded">
              <i class="text-18 text-primary tio-">email_outlined</i>
            </div>
            <div>
              <div class="text-caption text-secondary">Email</div>
              <div class="text-caption f-600">Uilib@mgail.com</div>
            </div>
          </div>
          <div class="d-flex align-center mb-5">
            <div class="me-2 bg-info-lighten-3 pa-2 rounded">
              <i class="text-18 text-info tio-">icon_globe</i>
            </div>
            <div>
              <div class="text-caption text-secondary">Language</div>
              <div class="text-caption f-600">English, Spanish</div>
            </div>
          </div>
          <div class="d-flex align-center mb-5">
            <div class="me-2 bg-warning-lighten-3 pa-2 rounded">
              <i class="text-18 text-warning tio-">user_outlined</i>
            </div>
            <div>
              <div class="text-caption text-secondary">Nickname</div>
              <div class="text-caption f-600">Pixy</div>
            </div>
          </div>
          <div class="d-flex align-center mb-5">
            <div class="me-2 bg-success-lighten-5 pa-2 rounded">
              <i class="text-18 text-success tio-">date_range</i>
            </div>
            <div>
              <div class="text-caption text-secondary">Join Date</div>
              <div class="text-caption f-600">Aug 15th, 2021</div>
            </div>
          </div>
          <div class="d-flex align-center mb-5">
            <div class="me-2 bg-error-lighten-5 pa-2 rounded">
              <i class="text-18 text-error tio-">briefcase_outlined</i>
            </div>
            <div>
              <div class="text-caption text-secondary">Join Date</div>
              <div class="text-caption f-600">Aug 15th, 2021</div>
            </div>
          </div>
          <div class="d-flex align-center mb-5">
            <div class="me-2 bg-primary-lighten-5 pa-2 rounded">
              <i class="text-18 text-primary tio-">education</i>
            </div>
            <div>
              <div class="text-caption text-secondary">Education</div>
              <div class="text-caption f-600">Cambridge University</div>
            </div>
          </div>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
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
}
::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  background-color: transparent;
  border-color: transparent;
  color: #131e3e;
  font-weight: 600;
}
::v-deep(.vtl-thead-th) {
  display: none;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
  border: none !important;
  color: #131e3e;
  vertical-align: middle;
  font-weight: 600;
}
::v-deep(.vtl-table td span) {
  white-space: nowrap;
}
::v-deep(.vtl-paging-pagination-page-link) {
  border: none !important;
}
</style>
