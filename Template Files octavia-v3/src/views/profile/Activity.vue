<script setup>
import AccountCover from "@/components/AccountCover.vue";
</script>
<template>
  <v-container>
    <AccountCover />
    <base-card class="pa-0">
      <div class="d-flex justify-space-between align-center p-card">
        <div class="d-flex">
          <i class="tio- text-secondary text-18 me-2">date_range</i>
          <div class="text-subtitle-2 f-600">Jan 30</div>
        </div>
        <v-btn class="text-capitalize" color="primary">Today</v-btn>
      </div>
      <v-divider class="line-color"></v-divider>
      <div class="vertical-timeline d-flex align-start mb-6 flex-wrap p-card">
        <i
          class="z-1 position-relative me-2 bg-secondary-lighten-5 pa-2 rounded-circle text-18 avatar-timeline tio-"
          ><span class="text-secondary">chat</span></i
        >
        <div class="notification-card flex-1">
          <div class="text-caption f-600 mb-1">
            There are 2 new tasks for you in “Nitro Plus” project:
          </div>
          <div class="d-flex align-center mb-4">
            <div class="text-secondary text-caption font-weight-medium me-2">
              Added at 4.23 PM by
            </div>
            <v-avatar size="20">
              <img
                class="w-full"
                src="@/assets/images/faces/avatar.png"
                alt=""
              />
            </v-avatar>
          </div>
          <div
            class="border-secondary pa-5 d-flex flex-column flex-md-row rounded align-center mb-3 flex-wrap"
          >
            <div class="text-caption font-weight-medium flex-1">
              Meeting with customer
            </div>
            <div
              class="d-flex flex-column flex-md-row align-center flex-1 justify-center justify-md-end flex-wrap"
            >
              <div
                class="bg-secondary-lighten-5 px-3 py-2 text-caption f-600 rounded me-5 my-2"
              >
                Application
              </div>
              <div
                class="d-flex aling-center justify-center justify-md-end my-2"
              >
                <div class="avatar-group-32 me-2">
                  <div class="avatar text-primary font-weight-medium">+9</div>
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
              </div>
            </div>
            <div
              class="d-flex flex-1 align-center justify-center justify-md-end flex-wrap"
            >
              <div
                class="bg-primary-lighten-5 px-3 py-2 font-weight-medium rounded me-3 mb-2"
              >
                <span class="text-primary f-600 text-10 d-flex"
                  >In Progress</span
                >
              </div>

              <v-btn
                flat
                size="small"
                class="border-secondary text-capitalize mb-2"
                >View</v-btn
              >
            </div>
          </div>
          <div
            class="border-secondary pa-5 flex-column flex-md-row d-flex rounded align-center mb-3 flex-wrap"
          >
            <div class="text-caption font-weight-medium flex-1">
              Project Delivery
            </div>
            <div
              class="d-flex flex-column flex-md-row align-center flex-1 justify-center justify-md-end flex-wrap"
            >
              <div
                class="bg-secondary-lighten-5 text-center text-md-left my-2 px-3 py-2 text-caption f-600 rounded me-5"
              >
                Crm System Development
              </div>
              <div
                class="d-flex aling-center justify-center justify-md-end my-2"
              >
                <div class="avatar-group-32 me-2">
                  <div class="avatar text-primary font-weight-medium">+9</div>
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
              </div>
            </div>
            <div
              class="d-flex flex-1 align-center justify-center justify-md-end flex-wrap"
            >
              <div
                class="bg-success-lighten-5 px-3 py-2 font-weight-medium rounded me-3"
              >
                <span class="text-success d-flex f-600 text-10">Complete</span>
              </div>

              <v-btn flat size="small" class="border-secondary text-capitalize"
                >View</v-btn
              >
            </div>
          </div>
        </div>
      </div>
      <div class="vertical-timeline d-flex align-start mb-6 flex-wrap p-card">
        <i
          class="z-1 position-relative me-2 bg-secondary-lighten-5 pa-2 rounded-circle text-18 avatar-timeline tio-"
          ><span class="text-secondary">pin</span></i
        >
        <div class="notification-card flex-1">
          <div class="text-caption f-600 mb-1">
            Invitation for crafting engaging designs that speak human workshop
          </div>
          <div class="d-flex align-center mb-4">
            <div class="text-secondary text-caption font-weight-medium me-2">
              Added at 4.23 PM by
            </div>
            <v-avatar size="20">
              <img
                class="w-full"
                src="@/assets/images/faces/avatar.png"
                alt=""
              />
            </v-avatar>
          </div>
        </div>
      </div>
      <div class="vertical-timeline d-flex align-start mb-6 flex-wrap p-card">
        <i
          class="z-1 position-relative me-2 bg-secondary-lighten-5 pa-2 rounded-circle text-18 avatar-timeline tio-"
          ><span class="text-secondary">link</span></i
        >
        <div class="notification-card flex-1">
          <div class="text-caption f-600 mb-1">
            3 New Incoming Project Files:
          </div>
          <div class="d-flex align-center mb-4">
            <div class="text-secondary text-caption font-weight-medium me-2">
              Added at 4.23 PM by
            </div>
            <v-avatar size="20">
              <img
                class="w-full"
                src="@/assets/images/faces/avatar.png"
                alt=""
              />
            </v-avatar>
          </div>
          <div class="border-secondary pa-5 rounded">
            <div class="d-flex flex-wrap">
              <div class="d-flex align-center my-4 me-4">
                <v-avatar size="36" class="me-2 rounded-0">
                  <img
                    class="w-full"
                    src="@/assets/images/file/3ds.svg"
                    alt=""
                  />
                </v-avatar>

                <div>
                  <router-link
                    to="#"
                    class="text-caption text-primary f-600 text-decoration-none"
                    >Finance KPI App
                  </router-link>
                  <div class="text-caption text-secondary">90 mb</div>
                </div>
              </div>
              <div class="d-flex align-center my-4 me-4">
                <v-avatar size="36" class="me-2 rounded-0">
                  <img
                    class="w-full"
                    src="@/assets/images/file/Css.svg"
                    alt=""
                  />
                </v-avatar>

                <div>
                  <router-link
                    to="#"
                    class="text-caption text-primary f-600 text-decoration-none"
                    >Css File Nitro
                  </router-link>
                  <div class="text-caption text-secondary">50 mb</div>
                </div>
              </div>
              <div class="d-flex align-center my-4 me-4">
                <v-avatar size="36" class="me-2 rounded-0">
                  <img
                    class="w-full"
                    src="@/assets/images/file/Jpg.svg"
                    alt=""
                  />
                </v-avatar>

                <div>
                  <router-link
                    to="#"
                    class="text-caption text-primary f-600 text-decoration-none"
                    >All JPGS From Nitro App
                  </router-link>
                  <div class="text-caption text-secondary">50 mb</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vertical-timeline d-flex align-start mb-6 flex-wrap p-card">
        <i
          class="z-1 position-relative me-2 bg-secondary-lighten-5 pa-2 rounded-circle text-18 avatar-timeline tio-"
          ><span class="text-secondary">pin</span></i
        >
        <div class="notification-card flex-1">
          <div class="text-caption f-600 mb-1">
            Task
            <router-link to="#" class="f-600 text-decoration-none text-primary"
              >#45890 </router-link
            >merged with
            <router-link to="#" class="f-600 text-decoration-none text-primary"
              >#3695</router-link
            >
            in “Ads Pro Admin Dashboard project:
          </div>

          <div class="d-flex align-center mb-4">
            <div class="text-secondary text-caption font-weight-medium me-2">
              Added at 4.23 PM by
            </div>
            <v-avatar size="20">
              <img
                class="w-full"
                src="@/assets/images/faces/avatar.png"
                alt=""
              />
            </v-avatar>
          </div>
        </div>
      </div>
      <div class="vertical-timeline d-flex align-start mb-6 flex-wrap p-card">
        <i
          class="z-1 position-relative me-2 bg-secondary-lighten-5 pa-2 rounded-circle text-18 avatar-timeline tio-"
          ><span class="text-secondary">link</span></i
        >
        <div class="notification-card flex-1">
          <div class="text-caption f-600 mb-1">
            3 new application design concepts added:
          </div>
          <div class="d-flex align-center mb-4">
            <div class="text-secondary text-caption font-weight-medium me-2">
              Added at 4.23 PM by
            </div>
            <v-avatar size="20">
              <img
                class="w-full"
                src="@/assets/images/faces/avatar.png"
                alt=""
              />
            </v-avatar>
          </div>
          <div class="border-secondary d-flex flex-wrap pa-5 rounded">
            <img
              max-width="300"
              class="me-2"
              src="@/assets/images/ss.png"
              alt=""
            />
            <img
              max-width="300"
              class="me-2"
              src="@/assets/images/ss-2.png"
              alt=""
            />
            <img
              max-width="300"
              class="me-2"
              src="@/assets/images/ss-3.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="vertical-timeline d-flex align-start mb-6 flex-wrap p-card">
        <i
          class="z-1 position-relative me-2 bg-secondary-lighten-5 pa-2 rounded-circle text-18 avatar-timeline tio-"
          ><span class="text-secondary">pin</span></i
        >
        <div class="notification-card flex-1">
          <div class="text-caption f-600 mb-1">
            Task
            <router-link to="#" class="f-600 text-decoration-none text-primary"
              >#45890 </router-link
            >merged with in “Ads Pro Admin Dashboard project:
          </div>

          <div class="d-flex align-center mb-4">
            <div class="text-secondary text-caption font-weight-medium me-2">
              Added at 4.23 PM by
            </div>
            <v-avatar size="20">
              <img
                class="w-full"
                src="@/assets/images/faces/avatar.png"
                alt=""
              />
            </v-avatar>
          </div>
        </div>
      </div>
      <div class="vertical-timeline d-flex align-start mb-6 flex-wrap p-card">
        <i
          class="z-1 position-relative me-2 bg-secondary-lighten-5 pa-2 rounded-circle text-18 avatar-timeline tio-"
          ><span class="text-secondary">pin</span></i
        >
        <div class="notification-card flex-1">
          <div class="text-caption f-600 mb-1">
            Task in “Ads Pro Admin Dashboard project:
          </div>

          <div class="d-flex align-center mb-4">
            <div class="text-secondary text-caption font-weight-medium me-2">
              Added at 4.23 PM by
            </div>
            <v-avatar size="20">
              <img
                class="w-full"
                src="@/assets/images/faces/avatar.png"
                alt=""
              />
            </v-avatar>
          </div>
          <div
            class="border-primary rounded p-card d-flex flex-wrap justify-space-between align-center bg-primary-lighten-5"
          >
            <div class="d-flex flex-wrap">
              <v-avatar size="36" class="me-2">
                <img class="w-full" src="@/assets/images/logo.svg" alt="" />
              </v-avatar>

              <div class="my-2">
                <div class="text-caption f-600 text-secondary me-2">
                  Nitro Backup Process Completed
                </div>
                <div class="text-caption font-weight-medium">
                  Login into Nitro Admin Dashboard to make sure the data
                  integrity is OK
                </div>
              </div>
            </div>
            <div class="bg-primary px-4 py-3 rounded text-caption f-600 me-2">
              Proceed
            </div>
          </div>
        </div>
      </div>
      <div class="vertical-timeline d-flex align-start mb-6 flex-wrap p-card">
        <i
          class="z-1 position-relative me-2 bg-secondary-lighten-5 pa-2 rounded-circle text-18 avatar-timeline tio-"
          ><span class="text-secondary">pin</span></i
        >
        <div class="notification-card flex-1">
          <div class="text-caption f-600 mb-1">
            Task
            <router-link to="#" class="f-600 text-decoration-none text-primary"
              >#45890 </router-link
            >merged with in “Ads Pro Admin Dashboard project:
          </div>

          <div class="d-flex align-center mb-4">
            <div class="text-secondary text-caption font-weight-medium me-2">
              Added at 4.23 PM by
            </div>
            <v-avatar size="20">
              <img
                class="w-full"
                src="@/assets/images/faces/avatar.png"
                alt=""
              />
            </v-avatar>
          </div>
        </div>
      </div>
    </base-card>
  </v-container>
</template>
<style lang="scss" scoped>
.vertical-timeline {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 2px;
    background-color: #e9eff6;
    top: 65px;
    bottom: 0;
    left: 2.2rem;
    height: calc(100% - 40px);
  }
  @media (max-width: "384px") {
    .avatar-timeline {
      display: none;
    }
    &::after {
      content: none;
      display: none;
    }
  }
}

.vertical-timeline:last-child::after {
  content: none;
}
</style>
