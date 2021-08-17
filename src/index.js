import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import { Button, Icon, Image as VanImage } from "vant";
import "lib-flexible/flexible";

require("../mock/user");

createApp(App).use(router).use(Button).use(Icon).use(VanImage).mount("#app");
