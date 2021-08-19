<template>
  <div id="login">
    <input type="text" v-model="username" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {},
});
</script>

<style lang="scss">
#login {
  p {
    color: red;
  }
}
</style>
