<template>
  <div class="container">
    <div class="row">
      <div class="post-details card col-6 m-5 p-3 bg-primary">
        <h2>{{post.title}}</h2>
        <h5>{{post.body}}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-6 ml-5 p-1">
        <CommentComponent />
        <div class="card bg-primary">{{comments}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentComponent from "../components/CommentComponent";
export default {
  name: "postDetails",
  mounted() {
    this.$store.dispatch("getActivePost", this.$route.params.postId);
    this.$store.dispatch("getComments", this.$route.params.postId);
  },
  data() {
    return {};
  },
  computed: {
    post() {
      return this.$store.state.activePost;
    },
    comments() {
      return this.$store.state.activeComments;
    },
  },
  methods: {},
  components: {
    CommentComponent,
  },
};
</script>

<style>
</style>