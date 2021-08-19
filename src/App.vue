<template>
  <Topbar></Topbar>
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Topbar from "./views/components/topbar.vue";

export default defineComponent({
  name: "App",
  components: { Topbar },
});
</script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
