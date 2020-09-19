<template>
  <div class="home container-fluid">
    <div class="row">
      <form class="form-inline input ml-2 search-box bg-primary" @submit.prevent="createPost">
        <div class="form-group">
          <input
            type="text"
            v-model="newPost.title"
            class="form-control p-3 m-2"
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
    </div>
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
<style scoped>
.search-box {
  border-radius: 10px;
  background-color: ;
  height: 10vh;
  margin-top: 5vh;
}
</style>