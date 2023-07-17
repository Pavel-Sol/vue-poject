<template>
  <div class="post">
    <div><strong>название </strong> {{ post.title }}</div>
    <div><strong> описание</strong> {{ post.desc }}</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  border: 2px solid darkgreen;
  padding: 15px;
  margin-top: 15px;
}
</style>
