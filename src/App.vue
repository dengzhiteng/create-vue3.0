<template>
  <h2>index</h2>
  <router-link to="/home">home</router-link>
  <router-view></router-view>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
  created() {},
});
</script>
