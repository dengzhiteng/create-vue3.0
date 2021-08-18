<template>
  <div id="home">
    <p>{{ isDone }}</p>
    <p>{{ num }}</p>
    <p>{{ age }}</p>
    <input type="text" v-model="username" />
  </div>
</template>
<script lang="ts">
import { defineComponent, nextTick, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    let isDone: boolean = false;
    let num: number = 1;
    let age: number = 37;
    let username = ref("是的");

    // 暴露到template
    return {
      isDone,
      num,
      age,
      username,
    };
  },
});
</script>

<style lang="scss">
#home {
  p {
    color: red;
  }
}
</style>
