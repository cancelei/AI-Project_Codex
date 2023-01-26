<script setup>
import { ref, reactive } from "@vue/reactivity";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
const checkbox = reactive(true);
const router = useRouter();
const email = ref("jhonwick@gmail.com");
const password = ref("12345678");
const errMsg = ref("");

const signIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully Signed in");
      router.push("/dashboards/learning-management");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid Email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};
const signInWithGoogle = () => {
  console.log("testing");
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/dashboards/learning-management");
    })
    .catch((error) => {});
  // .catch((error) => alert(error.message));
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
        <v-avatar size="320" rounded="0">
          <img class="mw-320" src="@/assets/images/session/signin.svg" />
        </v-avatar>
        <div class="text-h4 f-600 mb-2">Step into the Minimalism test</div>
        <div class="text-subtitle-2 text-secondary-darken-1">
          Clean design and minimal layout all the way
        </div>
      </div>
    </v-col>
    <v-col
      cols="12"
      lg="6"
      class="d-flex justify-center align-center bg-gray-lighten-5"
    >
      <v-container class="text-center">
        <v-avatar size="80" class="mb-8">
          <img class="w-full" src="@/assets/images/logo.svg" alt="" />
        </v-avatar>
        <div class="text-h5 f-600 mb-2">Sign in to Nitro</div>
        <div class="text-18 text-secondary font-weight-medium mb-10">
          New Here ?
          <router-link to="/session/register" class="text-decoration-none f-600"
            >Create an account</router-link
          >
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
        <div class="d-flex justify-center align-center py-8 mw-320">
          <v-divider class="flex-1 mx-4 line-color"></v-divider>
          <span class="text-secondary">OR</span>
          <v-divider class="flex-1 mx-4 line-color"></v-divider>
        </div>

        <v-text-field
          v-model="email"
          type="email"
          variant="outlined"
          hide-details
          class="mb-4 mw-700"
          label="Email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          variant="outlined"
          hide-details
          class="mb-4 mw-700"
          label="Password"
        ></v-text-field>

        <div class="d-flex justify-space-between align-center mw-700 mb-7">
          <v-checkbox
            hide-details
            v-model="checkbox"
            color="primary"
            label="Default checkbox"
          ></v-checkbox>
          <router-link
            to="#"
            class="text-error text-decoration-none font-weight-medium"
            hide-details
            >Forgot Password ?</router-link
          >
        </div>
        <div class="my-2" v-if="errMsg">
          <v-alert
            color="error"
            theme="dark"
            border="start"
            prominent
            class="mw-700 mx-auto"
          >
            <i class="tio- text-18 me-2"> error_outlined </i>
            {{ errMsg }}
          </v-alert>
        </div>
        <div class="d-flex mw-700">
          <v-btn
            @click="signIn"
            block
            color="primary"
            flat
            class="text-capitalize"
            >Sign In</v-btn
          >
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>
<style lang="scss" scoped>
.mw-320 {
  max-width: 320px;
  // min-width: 100%;
  margin: 0 auto;
}
.mw-700 {
  max-width: 700px;
  margin: 0 auto;
}
.br-0 {
  border-radius: 0;
}
.w-full {
  width: 100%;
}
.mh-100vh {
  min-height: 100vh;
}
</style>
