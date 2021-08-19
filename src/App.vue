<template>
  <Topbar />
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Topbar from "./views/components/Topbar.vue";

export default defineComponent({
  name: "App",
  components: {
    Topbar,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
