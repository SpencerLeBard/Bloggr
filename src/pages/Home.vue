<template>
  <div class="home">
    <form class="form-inline input" @submit.prevent="createPost">
      <div class="form-group">
        <input
          type="text"
          v-model="newPost.title"
          class="form-control"
          placeholder="Title of Blog..."
          aria-describedby="helpId"
        />
        <input
          type="text"
          class="form-control"
          v-model="newPost.body"
          placeholder="Type Blog here ..."
          aria-describedby="helpId"
        />
      </div>
      <button type="submit" class="btn btn-danger m-2">Create Post</button>
    </form>
    <postComponent v-for="post in posts" :key="post.id" :postProp="post" />
    <input type="text" />
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
  methods: {
    createPost() {
      this.$store.dispatch("createPost", this.newPost);
    },
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  components: {
    PostComponent,
  },
};
</script>
