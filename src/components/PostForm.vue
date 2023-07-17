<template>
  <form @submit.prevent>
    <MyInput v-model="post.title" />
    <MyInput v-model="post.desc" />
    <MyButton @click="createPost">добавить</MyButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        desc: '',
      },
    };
  },

  methods: {
    createPost() {
      this.post.id = Date.now();

      this.$emit('create', this.post);

      this.post = {
        title: '',
        desc: '',
      };
    },
  },
};
</script>
