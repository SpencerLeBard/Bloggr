<template>
  <div class="card">
    <form class="form-inline input" @submit.prevent="createComment">
      <div class="form-group">
        <input
          type="text"
          v-model="newComment.body"
          class="form-control"
          placeholder="Comment ..."
          aria-describedby="helpId"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CommmentComponent",
  mounted() {},
  data() {
    return {};
  },
  computed: {
    comments() {
      return this.$state.activeComments;
    },
  },
  methods: {},
  components: {},
};
</script>

<style>
</style>