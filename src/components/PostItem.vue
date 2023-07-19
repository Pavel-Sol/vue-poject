<template>
  <div class="post">
    <div>
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
</style>
