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
    // getActiveComments(state, comments) {
    //   state.activeComments = comments
    // },
    Comments(state, comments) {
      state.activeComments = comments
    },
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
        commit("createPost", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getActivePost({ commit }, postId) {
      try {
        let res = await api.get("blogs/" + postId)
        commit("setActivePost", res.data)
        commit("setComments", res.data.votes)
      } catch (error) {
        console.error(error);
      }
    },
    // async getComments({ commit, dispatch }, postId) {
    //   try {
    //     let res = await api.get("blogs/" + postId + "/comments")
    //     console.log(res);
    //     dispatch("getActiveComments", postId.body)
    //   } catch (error) {
    //     console.error(error);

    //   }
    // }
  }
})


