<script setup>
import axios from "axios";
import { SignIn } from "../api/sign-in.ts";
import { useRoute, useRouter } from "vue-router";
import { ref, computed, onMounted } from "vue";

const router = useRouter();

const email = ref("");
const password = ref("");
const snackbar = ref(false);
const snackbarText = ref("ログインできませんでした");
const snackbarColor = ref("");

const Login = async () => {
  try {
    // const params = {
    //   email: email,
    //   password: password,
    // };
    const params = {
      email: "test19@gmail.com",
      password: "12345678",
    };
    await SignIn(params);
    router.push("/");
  } catch (error) {
    console.log(error.code);
    console.log("catchした");
    snackbar.value = true;
  }
};

const hello = async () => {
  const url = "http://localhost:3000/api/v1/hello";
  const accessToken = localStorage.getItem("access-token");
  const uid = localStorage.getItem("uid");
  const client = localStorage.getItem("client");
  console.log(accessToken);
  const params = {
    uid: uid,
    "access-token": accessToken,
    client: client,
  };
  const toJsonParams = JSON.stringify(params);
  console.log(toJsonParams);
  await axios
    .get(url, {
      headers: params,
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<template>
  <div class="SignIn">
    <v-container class="SignIn_FormWrapper">
      <h1 class="mb-10">ログイン</h1>
      <v-form @submit.prevent="Login">
        <v-text-field
          v-model="email"
          label="メールアドレス"
          required
          type="email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="パスワード"
          required
          type="password"
        ></v-text-field>
        <div class="SignIn_ButtonWrapper">
          <v-btn type="submit" color="indigo" class="SignIn_Button"
            >ログイン</v-btn
          >
        </div>
      </v-form>
    </v-container>
    <v-snackbar v-model="snackbar" color="red">
      {{ snackbarText }}

      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .SignIn {
    min-height: 100vh;
    display: flex;
    margin-top: 100px;
    justify-content: center;
  }
}
.SignIn_FormWrapper {
  width: 25%;
}
.SignIn_ButtonWrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  height: 50px;
}
.SignIn_Button {
  width: 100%;
}
</style>
