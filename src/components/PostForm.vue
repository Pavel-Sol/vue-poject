<template>
  <form @submit.prevent>
    <MyInput v-model="post.title" />
    <MyInput v-model="post.body" />
    <MyButton @click="createPost">добавить</MyButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },

  methods: {
    createPost() {
      this.post.id = Date.now();

      this.$emit('create', this.post);

      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>
