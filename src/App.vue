<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <v-app>
    <v-app-bar color="indigo">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>
        <router-link to="/">
          <v-btn color="white" size="x-large">マンダラチャート</v-btn>
        </router-link>
      </v-app-bar-title>

      <template v-slot:append>
        <router-link to="/sign-in">
          <v-btn color="white" size="x-large">ログイン</v-btn>
        </router-link>

        <v-btn>
          <v-icon> mdi-home </v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <RouterView />
  </v-app>
</template>

<style scoped></style>
