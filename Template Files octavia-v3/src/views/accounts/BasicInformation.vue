<script setup>
import Account from "@/components/Account.vue";
</script>

<template>
  <v-container>
    <Account>
      <v-row>
        <v-col cols="12">
          <base-card class="pa-0">
            <div class="position-relative bg-header-cover d-flex justify-end">
              <img
                class="w-full position-absolute bg-cover-photo"
                src="@/assets/images/products/3d-2.png"
                alt=""
              />
              <v-btn
                flat
                class="text-capitalize text-secondary-lighten-1 me-4"
                color="white"
                ><i class="tio- me-0 me-md-2">camera_enhance</i>
                <span class="d-none d-md-block">Update Cover</span></v-btn
              >
            </div>
            <div class="text-center">
              <label
                class="avatar-status-100 basic-information text-center"
                for="imageUpload"
                ><img
                  class="avatar-image"
                  src="@/assets/images/faces/avatar.png"
                  alt=""
                /><span
                  class="avatar-badge bg-primary d-flex align-center justify-center"
                  ><i class="text-white tio-">photo_camera</i></span
                >
                <input
                  class="d-none"
                  type="file"
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                />
              </label>
            </div>
            <div class="text-h6 text-center mb-4">Jhon Wick</div>
            <div
              class="d-flex flex-column flex-md-row justify-center flex-wrap"
            >
              <div
                class="d-flex justify-center text-center text-secondary-lighten-1 my-2"
              >
                <div class="d-flex align-center">
                  <i class="text-20 me-2 tio-">bratislava</i>
                  <div class="text-body-2 f-600">Developer</div>
                </div>
              </div>
              <div
                class="d-flex justify-center text-center mx-5 text-secondary-lighten-1 my-2"
              >
                <i class="text-20 me-2 tio-">date_range</i>
                <div class="text-body-2 f-600">Joined March 17</div>
              </div>
              <div
                class="d-flex justify-center text-center text-secondary-lighten-1 my-2"
              >
                <i class="text-20 me-2 tio-">poi_</i>
                <div class="text-body-2 f-600">New York</div>
              </div>
            </div>
            <div class="d-flex justify-space-between pa-4 flex-wrap">
              <div>
                <h5>Profile Completion</h5>
                <div class="d-flex align-center">
                  <v-progress-linear
                    value="15"
                    color="success"
                    class="me-2"
                  ></v-progress-linear>
                  <span class="text-caption">50%</span>
                </div>
              </div>
              <div class="d-flex flex-wrap">
                <v-btn
                  flat
                  class="text-capitalize bg-primary-lighten-5 text-capitalize me-3 mb-2"
                  >Follow</v-btn
                >
                <v-btn flat class="text-capitalize me-3 mb-2" color="primary"
                  >Hire Me</v-btn
                >
                <v-btn flat class="bg-primary-lighten-5 mb-2"
                  ><i class="tio-">more_horizontal</i></v-btn
                >
              </div>
            </div>
          </base-card>
        </v-col>
        <v-col cols="12">
          <base-card>
            <v-card-title
              class="pa-0 mb-4 border-bottom text-body-2 font-weight-medium"
              >Basic Information</v-card-title
            >

            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="First Name"
                  color="primary"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Last Name"
                  color="primary"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Email"
                  color="primary"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Phone"
                  color="primary"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Organization"
                  color="primary"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Department"
                  color="primary"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="State"
                  color="primary"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Country"
                  color="primary"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Address"
                  color="primary"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Zip Code"
                  color="primary"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <div class="d-flex">
                  <v-btn flat class="text-capitalize me-4" color="primary">
                    Save Changes
                  </v-btn>
                  <v-btn flat class="text-capitalize me-4 border-secondary">
                    Cancel
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </base-card>
        </v-col>
      </v-row>
    </Account>
  </v-container>
</template>
<style lang="scss" scoped>
.bg-header-cover {
  padding-top: 80px;
}
.bg-cover-photo {
  height: 143px;
  padding: 0px;
  top: 0;
  object-fit: cover;
}
.avatar-status-100 {
  position: relative;
  display: inline-block;
  .avatar-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 100%;
  }
  .avatar-badge {
    width: 25px;
    height: 25px;
    border: 2px solid white;
    position: absolute;
    bottom: 2%;
    right: 2%;
    border-radius: 100%;
  }
}
.basic-information {
  margin-top: -40px;
}
</style>
