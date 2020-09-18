<template>
  <div class="row">
    <div class="post-component col-3 d-flex m-3">
      <router-link class="card" :to="{name:'post-details', params:{postId: postProp.id}}">
        <img class="card-img-top" :src="postProp.imgUrl" alt />
        <div class="card-body">
          <div class="card-title">
            <h2>{{postProp.title}}</h2>
            <h3>{{postProp.creatorEmail}}</h3>
          </div>
        </div>
      </router-link>
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