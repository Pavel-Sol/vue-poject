<template>
  <div class="post">
    <div class="post__info">
      <span>{{ post.id }}</span>
      <div>
        <strong>название</strong>
        {{ post.title }}
      </div>
      <div>
        <strong>описание</strong>
        {{ post.body }}
      </div>
    </div>

    <div class="post__btns">
      <MyButton @click="$router.push(`/posts/${post.id}`)">открыть</MyButton>
      <MyButton @click="$emit('remove', post)">удалить</MyButton>
    </div>
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

  methods: {},
};
</script>

<style scoped>
.post {
  border: 2px solid darkgreen;
  padding: 15px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__info {
  max-width: 70%;
}
</style>
