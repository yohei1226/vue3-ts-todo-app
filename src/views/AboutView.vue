<script setup>
import axios from "axios";
import { userDataCreate } from "../api/signUp.ts";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const getData = async () => {
  try {
    const params = {
      // name: "yohei",
      email: "test19@gmail.com",
      password: "12345678",
    };
    await userDataCreate(params);
    // router.push("/");
  } catch (error) {
    console.log(error);
    console.log("catchした");
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
  <div class="about">
    <div>
      <v-btn color="primary" @click="getData">ログイン</v-btn><br />
      <v-btn color="primary" @click="hello" class="mt-10">ハロー</v-btn>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
