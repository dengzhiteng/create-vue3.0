<template>
  <div id="login">
    <input type="text" v-model="username" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { byPhoneLogin, getUserdetail } from "../api/common";

export default defineComponent({
  name: "App",
  async setup() {
    let phone = "18682151435";
    let password = "dzt201710";
    await byPhoneLogin(phone, password).then((res) => {
      sessionStorage.setItem("token", res.token);
      sessionStorage.setItem("acount", JSON.stringify(res.account));
    });

    let account = JSON.parse(sessionStorage.getItem("acount"));
    await getUserdetail(account.id).then((res) => {
      console.log(res);
    });
    return {};
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
