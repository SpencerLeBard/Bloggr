<template>
  <div class="container">
    <div class="row post-card">
      <div class="post-details card col-6 m-5 p-3 bg-primary">
        <i
          class="fa fa-pencil"
          aria-hidden="true"
          @click="editToggle = !editToggle"
          v-if="isCreator"
        ></i>
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
                <button type="submit" class="btn btn-dark m-2">Create Comment</button>
                <button class="btn btn-dark" @click="deletePost">Delete Post</button>
                <button type="submit" class="btn btn-dark ml-2" @click="editPost">Edit Post</button>
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
    return { postData: {}, editToggle: false };
  },
  computed: {
    post() {
      return this.$store.state.activePost;
    },
    comments() {
      return this.$store.state.activeComments;
    },
    isCreator() {
      return this.$store.state.profile.email == this.post.creatorEmail;
    },
  },
  methods: {
    deletePost() {
      this.$store.dispatch("deletePost", this.post._id);
    },
    editPost() {
      this.postData.id = this.$route.params.postId;
      this.$store.dispatch("editPost", this.postData);
      this.editToggle = false;
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
  width: 75vw;
}
</style>