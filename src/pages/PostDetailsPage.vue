<template>
  <div class="container">
    <div class="row post-card">
      <div class="post-details card col-6 m-5 p-3 bg-primary">
        <h2>{{post.title}}</h2>
        <h5>{{post.body}}</h5>
        <div class="row">
          <div class="col-5 bg-primary">
            <form class="form-inline input">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Comment ..."
                  aria-describedby="helpId"
                />
                <button type="submit" class="btn btn-success m-2">Create Comment</button>
                <button class="btn btn-danger" @click="deletePost">Delete Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6 comments-card">
      <CommentComponent v-for="comment in comments" :key="comment.id" :commentProp="comment" />
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
  methods: {
    deletePost() {
      this.$store.dispatch("deletePost", this.post._id);
    },
  },
  components: {
    CommentComponent,
  },
};
</script>

<style scoped >
.comments-card {
  margin-left: 32px;
}
.post-card {
  margin-bottom: -25px;
}
</style>