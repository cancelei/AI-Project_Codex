<template>
  <v-row>
    <v-col
      cols="12"
      lg="6"
      class="mh-100vh bg-primary-lighten-5 d-flex justify-center align-center"
    >
      <div class="text-center">
        <img
          width="300"
          max-width="400"
          src="@/assets/images/session/forgot.svg"
        />
      </div>
    </v-col>
    <v-col cols="12" lg="6" class="d-flex justify-center align-center">
      <v-container class="text-center">
        <v-avatar size="80" class="mb-8">
          <img src="@/assets/images/logo.svg" alt="" />
        </v-avatar>
        <div class="text-h5 f-600 mb-2">Forgot Password</div>
        <div class="text-18 text-secondary font-weight-medium mb-10">
          Enter your mail to reset the password?
        </div>

        <v-row class="mw-700">
          <v-col cols="12">
            <v-text-field
              variant="outlined"
              type="email"
              color="primary"
              hide-details
              label="Email"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <div class="d-flex">
              <v-btn flat class="border-secondary flex-1 me-3">Button</v-btn>
              <v-btn color="primary" class="flex-1" flat>Submit</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>
<style lang="scss" scoped>
.mw-400 {
  max-width: 400px;
  margin: 0 auto;
}
.mw-700 {
  max-width: 700px;
  margin: 0 auto;
}
.mh-100vh {
  min-height: 100vh;
}
</style>
