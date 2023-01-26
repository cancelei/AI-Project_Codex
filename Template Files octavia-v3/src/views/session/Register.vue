<script setup>
import { ref } from "@vue/reactivity";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully Signed in");
      router.push("/dashboards/learning-management");
    })
    .catch((error) => {
      console.log(error.code);
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/dashboards/learning-management");
    })
    .catch((error) => {});
};
</script>
<template>
  <v-row>
    <v-col
      cols="12"
      lg="6"
      class="mh-100vh bg-primary-lighten-5 d-flex justify-center align-center"
    >
      <div class="text-center">
        <img class="mw-400" src="@/assets/images/session/signin.svg" />
        <div class="text-h4 f-600 mb-2">Step into the Minimalism</div>
        <div class="text-subtitle-2 text-secondary-darken-1">
          Clean design and minimal layout all the way
        </div>
      </div>
    </v-col>
    <v-col cols="12" lg="6" class="d-flex justify-center align-center">
      <v-container class="text-center">
        <v-avatar size="80" class="mb-8">
          <img src="@/assets/images/logo.svg" alt="" />
        </v-avatar>
        <div class="text-h5 f-600 mb-2">Sign in to Nitro</div>
        <div class="text-18 text-secondary font-weight-medium mb-10">
          Get Started free
        </div>
        <div class="d-flex justify-center">
          <v-btn
            @click="signInWithGoogle"
            size="large"
            class="border-secondary px-8 me-3"
            flat
          >
            <v-avatar size="30">
              <img src="@/assets/images/social-media/Google.png" alt="" />
            </v-avatar>
          </v-btn>
          <v-btn size="large" class="border-secondary px-8 me-3" flat>
            <v-avatar size="30">
              <img src="@/assets/images/social-media/facebook.svg" alt="" />
            </v-avatar>
          </v-btn>
          <v-btn size="large" class="border-secondary px-8 me-3" flat>
            <v-avatar size="30">
              <img src="@/assets/images/social-media/twitter.svg" alt="" />
            </v-avatar>
          </v-btn>
        </div>
        <div class="d-flex justify-center align-center py-8 mw-400">
          <v-divider class="flex-1 mx-4 line-color"></v-divider>
          <span class="text-secondary">OR</span>
          <v-divider class="flex-1 mx-4 line-color"></v-divider>
        </div>

        <v-row class="mw-700">
          <v-col cols="12" lg="6">
            <v-text-field
              variant="outlined"
              color="primary"
              hide-details
              label="First Name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              variant="outlined"
              color="primary"
              hide-details
              label="Last Name"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="email"
              variant="outlined"
              type="email"
              color="primary"
              hide-details
              label="Email"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              variant="outlined"
              v-model="password"
              type="password"
              color="primary"
              hide-details
              label="Password"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn
              @click="register"
              block
              flat
              color="primary"
              class="text-capitalize mb-5"
              >Sign Up</v-btn
            >
            <div class="text-caption font-weight-medium text-secondary">
              By signing up, I agree to Nitro
              <router-link
                to="#"
                class="text-decoration-none text-secondary-darken-5 f-600"
                >Terms of Service & Privacy Policy</router-link
              >
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
