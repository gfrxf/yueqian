import Vue from "vue";
import Vuex from "vuex";
import isMobile from "ismobilejs/dist/isMobile.min.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ismobile: !isMobile.any,
        Authorization: localStorage.getItem("accessToken")
            ? localStorage.getItem("accessToken")
            : "",
        footerConfig: {
            lang: "en"
        }
    },
    mutations: {
        AuthorizationChange(state, value) {
            state.Authorization = value;
        },
        changeFooter(state,value) {
            state.footerConfig.lang = value
        }
    },
    actions: {},
    modules: {}
});
