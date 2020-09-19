<template>
  <div class="post-component col-3 d-flex m-3">
    <router-link
      class="card bg-primary rounded"
      :to="{name:'post-details', params:{postId: postProp.id}}"
    >
      <!-- <img class="card-img-top" :src="postProp.imgUrl" alt /> -->
      <div class="card-body">
        <div class="card-title">
          <h2 class="text-dark">{{postProp.title}}</h2>
          <h3 class="text-dark">{{postProp.creatorEmail}}</h3>
        </div>
      </div>
    </router-link>
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


<style scoped>
.post-component {
  transition: 0.25s ease;
  cursor: pointer;
  max-height: 30vh;
  max-width: 40vw;
  border-color: black;
}
.post-component:hover {
  transform: scale(1.25);
}
.search-box {
}
</style>