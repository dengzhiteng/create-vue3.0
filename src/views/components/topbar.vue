<template>
  <div id="topbar">
    <ul>
      <li>logo</li>
      <li>
        <router-link to="/discover">发现音乐</router-link>
      </li>
      <li>
        <router-link to="/my">我的音乐</router-link>
      </li>
      <li>登录</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  setup() {},
});
</script>

<style lang="scss" scoped>
#topbar {
  height: 70px;
  background: #242424;
  border-bottom: 1px solid #000;
  box-sizing: border-box;
  ul {
    overflow: hidden;
    li {
      line-height: 70px;
      padding: 0px 20px;
      float: left;
      a {
        color: #ccc;
      }
    }
  }
}
</style>
