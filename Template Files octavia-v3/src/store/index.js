import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "light",
  },
  mutations: {
    headerDarkToggle(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});
