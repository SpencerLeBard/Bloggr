import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    posts: [],
    activePost: {},
    activeComments: [],
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
    },
    setActivePost(state, post) {
      state.activePost = post
    },
    setComments(state, comments) {
      state.activeComments = comments
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
    },
    async getActivePost({ commit }, postId) {
      try {
        let res = await api.get("blogs/" + postId)
        console.log(res);
        commit("setActivePost", res.data)
        commit("setComments", res.data.votes)
      } catch (error) {
        console.error(error);
      }
    }
  }
})


