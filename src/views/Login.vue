<template>
  <div id="login">
    <p>1</p>
    <a-button type="primary"> Primary </a-button>
    <input type="text" v-model="username" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { byPhoneLogin, getUserdetail } from "../api/common";

export default defineComponent({
  name: "App",
  async setup() {
    // const phone: string = "18682151435";
    // const password: string = "dzt201710";
    // const info: object = await byPhoneLogin(phone, password);
    // const id: string = info.account.id;
    // const detail: object = await getUserdetail(id);
  },
});
</script>

<style lang="scss">
#login {
  p {
    color: red;
  }
}
</style>
