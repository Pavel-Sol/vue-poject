<template>
  <form @submit.prevent>
    <input v-model="post.title" class="input" type="text" />
    <input v-model="post.desc" class="input" type="text" />
    <button @click="createPost">добавить</button>
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

<style scoped>
.input {
  margin-top: 15px;
  padding: 7px;
  border: 1px solid darkgreen;
}
</style>
