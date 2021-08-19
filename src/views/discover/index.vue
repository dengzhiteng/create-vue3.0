<template>
  <div id="home">home</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { byPhoneLogin } from "@//api/common/";
export default defineComponent({
  name: "App",
  setup() {
    console.log(111);
    byPhoneLogin("18682151435", "dzt201710");
  },
});
</script>

<style lang="scss"></style>
