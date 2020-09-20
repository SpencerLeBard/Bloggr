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
    getActiveComments(state, comments) {
      state.activeComments = comments
    },
    removePost(state, id) {
      state.posts = state.posts.filter(p => p.id != id)
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
        commit("createPost", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getActivePost({ commit }, postId) {
      try {
        let res = await api.get("blogs/" + postId)
        commit("setActivePost", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getComments({ commit, }, postId) {
      try {
        let res = await api.get("blogs/" + postId + "/comments")
        commit("getActiveComments", res.data)
      } catch (error) {
        console.error(error);

      }
    },
    async deletePost({ commit }, postId) {
      try {
        await api.delete('blogs/' + postId)
        commit("removePost", postId)
        commit("setActivePost", {})
        router.push({ name: "Home" })
      } catch (error) {
        console.error(error);
      }
    },
    //     async editPost({ commit }, postData) {
    //       try {
    //         let res = await api.put("blogs/" + postData.id, postData)
    //         commit("setActivePost", res.data)
    //       } catch (error) {
    //         console.error(error)
    //   }
    // }
  }

})


