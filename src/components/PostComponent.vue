<template>
  <div class="post-component">
    <div class="card">
      <img class="card-img-top" :src="postProp.imgUrl" alt />
      <div class="card-body">
        <p>{{postProp.title}}</p>
        <h4 class="card-title">Title</h4>
        <p class="card-text">Text</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post-component",
  props: ["postProp"],

  data() {
    return {};
  },

  computed: {},
  methods: {},
  components: {},
};
</script>


<style>
</style>