<template>
  <div class="container">
    <div class="row">
      <div class="post-details card col-6 m-5">
        <p>{{post.title}}</p>
        <p>{{post.body}}</p>
      </div>
      <CommentComponent />
    </div>
  </div>
</template>

<script>
import CommentComponent from "../components/CommentComponent";
export default {
  name: "postDetails",
  mounted() {
    this.$store.dispatch("getActivePost", this.$route.params.postId);
  },
  data() {
    return {};
  },
  computed: {
    post() {
      return this.$store.state.activePost;
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