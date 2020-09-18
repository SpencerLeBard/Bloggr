<template>
  <div class="card">
    <form class="form-inline input" @submit.prevent="comments">
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
  </div>
</template>

<script>
export default {
  name: "CommmentComponent",
  mounted() {},
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
        blog:
        body:
      }
    },
  },
  components: {},
};
</script>

<style>
</style>