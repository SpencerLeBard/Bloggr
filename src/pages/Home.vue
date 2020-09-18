<template>
  <div class="home">
    <postComponent v-for="post in posts" :key="post.id" :postProp="post" />
  </div>
</template>

<script>
import PostComponent from "../components/PostComponent";
export default {
  name: "home",

  data() {
    return {
      newPost: {},
    };
  },
  mounted() {
    this.$store.dispatch("getAllPosts", this.newPost);
  },
  methods: {},
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
