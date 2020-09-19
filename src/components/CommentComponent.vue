<template>
  <div class="card p-2 bg-primary comment-component">
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