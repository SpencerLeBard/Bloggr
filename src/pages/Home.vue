<template>
  <div class="home container-fluid">
    <div class="row">
      <form class="form-inline input search-box bg-primary col-10" @submit.prevent="createPost">
        <div class="form-group col-12">
          <input
            type="text"
            v-model="newPost.title"
            class="form-control m-2"
            placeholder="Title of Blog..."
            aria-describedby="helpId"
          />
          <input
            type="text"
            class="form-control col-12 blog-text"
            v-model="newPost.body"
            placeholder="Type Blog here ..."
            aria-describedby="helpId"
          />
        </div>
        <button type="submit" class="btn btn-danger m-3">Create Post</button>
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
  margin: 7vh;
  padding: 3vh;
}
.blog-text {
  height: 13vh;
  width: 30vw;
}
</style>