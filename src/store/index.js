import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    posts: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setPosts(state, posts) {
      state.posts = posts
    },
    createPost(state, post) {
      state.posts = post
    }
  },
  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllPosts({ commit }) {
      try {
        let res = await api.get("blogs")
        commit("setPosts", res.data)
      } catch (error) {
        console.error(error);

      }
    },
    async createPost({ commit, }, postData) {
      try {
        let res = await api.post("blogs", postData)
        console.log(res);
        commit("createPost", res.data)
      } catch (error) {
        console.error(error);
      }
    }
  }
})


