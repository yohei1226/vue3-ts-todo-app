<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import { ref, computed, onMounted } from "vue";

const dialog = ref(false);
const items = ref([]);
const newItemName = ref("");
const newItemPrice = ref(null);
const addItem = (): void => {
  const newItem = { item: newItemName.value, price: newItemPrice.value };
  items.value.push(newItem);
  newItemName.value = null;
  newItemPrice.value = null;
  dialog.value = false;
};
</script>

<template>
  <main class="Home">
    {{ newItemName }}
    <div>
      <div>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="pink lighten-2" dark @click="dialog = true">
              追加
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              アイテムを追加
            </v-card-title>
            <div class="FormWrapperInModal">
              <div class="item">
                <v-text-field
                  outlined
                  v-model="newItemName"
                  placeholder="欲しいもの"
                ></v-text-field>
              </div>
              <div class="price">
                <v-text-field
                  outlined
                  v-model="newItemPrice"
                  placeholder="価格"
                ></v-text-field>
              </div>
            </div>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="pink-lighten-2" @click="addItem"> 追加 </v-btn>
              <v-btn color="gray" @click="dialog = false"> キャンセル </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <!-- <v-btn color="pink-lighten-1">追加</v-btn> -->
      <h2>欲しいものリスト</h2>
      <div class="headers">
        <div class="header-item">アイテム</div>
        <div class="header-price">価格</div>
      </div>
      <template v-for="(item, index) in items" :key="index">
        <div class="FormWrapper">
          <div class="item">
            <v-text-field outlined v-model="item.item"></v-text-field>
          </div>
          <div class="price">
            <v-text-field outlined v-model="item.price"></v-text-field>
          </div>
        </div>
      </template>
    </div>
  </main>
</template>

<style scoped>
.Home {
  margin: 100px;
  display: flex;
  justify-content: center;
}
h2 {
  margin-top: 50px;
  margin-bottom: 50px;
}
.FormWrapper {
  display: flex;
  padding: 0px 30px 20px 0;
}
.FormWrapperInModal {
  display: flex;
  padding: 10px 0px 20px 30px;
}
.item {
  min-width: 250px;
  margin-right: 30px;
}
.price {
  width: 150px;
}
.headers {
  display: flex;
  margin-bottom: 10px;
}
.header-item {
  width: 250px;
  margin-right: 30px;
}
.header-price {
  width: 150px;
}
</style>
