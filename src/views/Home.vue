<template>
  <section id="home">
    <div>首页</div>
    <van-button type="primary">主要按钮</van-button>
    <van-icon name="chat-o" />
    <van-image fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />

    <ul>
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ul>
  </section>
</template>
<script>
import { defineComponent, ref } from "vue";
import { login } from "../api/user";
export default {
  created() {
    login({
      user: "12123",
      pwd: 123,
    }).then((res) => {
      console.log(res);
    });
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 80%;
}
#home {
  padding: 10px 20px;
}
ul {
  li {
    color: red;
  }
}
</style>
