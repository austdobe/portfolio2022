import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAngleDown,
  faBars,
  faCaretDown,
  faCaretRight,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithubSquare,
  faLinkedin,
  faReadme,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faUserSecret,
  faFacebookF,
  faLinkedin,
  faReadme,
  faGithubSquare,
  faAngleDown,
  faCaretRight,
  faCaretDown,
  faBars
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
