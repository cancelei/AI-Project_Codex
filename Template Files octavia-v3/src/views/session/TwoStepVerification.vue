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
          src="@/assets/images/session/two-step-verification.svg"
        />
      </div>
    </v-col>
    <v-col cols="12" lg="6" class="d-flex justify-center align-center">
      <v-container class="text-center">
        <v-avatar size="80" class="mb-8">
          <img src="@/assets/images/logo.svg" alt="" />
        </v-avatar>
        <div class="text-h5 f-600 mb-2">Two Step Verification</div>
        <div class="text-18 text-secondary font-weight-medium mb-10">
          Enter the verficitaion code we sent to your mail
        </div>

        <v-row class="mw-700">
          <v-col cols="12">
            <div class="text-caption mb-4">
              Type your *6 digit security code:
            </div>
            <div class="d-flex">
              <v-text-field
                class="me-3"
                variant="outlined"
                v-for="item in 6"
                :key="item"
                type="number"
              >
              </v-text-field>
            </div>
            <v-btn color="primary" class="flex-1" flat>Submit</v-btn>
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
