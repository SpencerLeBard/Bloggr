<template>
  <div class="card p-2 bg-primary coment-component">
    <!-- <form class="form-inline input" @submit.prevent="addComments">
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
    </form>-->
    <p>{{commentProp.body}}</p>
  </div>
</template>

<script>
export default {
  name: "commment-component",
  props: ["commentProp"],
  mounted() {
    this.$store.dispatch("getComments");
  },
  data() {
    return {
      newComment: {},
      //   };
      // },
      // computed: {
      // activeComments() {
      //   return this.$state.activeComments;
      //   },
      // },
      methods: {
        // addComments() {
        //   let payload = {
        //     blog: this.$route.params.postId,
        //     body: this.$route.params.body,
        //   };
        // },
      },
      components: {},
      computed: {
        comments() {
          return this.$store.state.activeComments;
        },
      },
    };
  },
};
</script>

<style>
</style>