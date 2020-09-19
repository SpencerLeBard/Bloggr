<template>
  <div class="card">
    <form class="form-inline input" @submit.prevent="addomments">
      <div class="form-group">
        <input
          type="text"
          v-model="newComment.body"
          class="form-control"
          placeholder="Comment ..."
          aria-describedby="helpId"
        />
        <button type="submit" class="btn btn-danger m-2">Create Comment</button>
      </div>
    </form>
    <!-- <p>{{activeComments.body}}</p> -->
  </div>
</template>

<script>
export default {
  name: "CommmentComponent",
  mounted() {
    this.$store.dispatch("activeComments", this.newComment);
  },
  data() {
    return {
      newComment: {},
    };
  },
  computed: {
    activeComments() {
      return this.$state.activeComments;
    },
  },
  methods: {
    addComments() {
      let payload = {
        blog: this.$route.params.postId,
        body: this.$route.params.body,
      };
    },
  },
  components: {},
};
</script>

<style>
</style>