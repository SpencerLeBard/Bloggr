<template>
  <div class="post-component col-3 m-5">
    <div class="card">
      <img class="card-img-top" :src="postProp.imgUrl" alt />
      <div class="card-body">
        <h4 class="card-title">Blog Title</h4>
        <h6>{{postProp.title}}</h6>
        <p>{{postProp.body}}</p>
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