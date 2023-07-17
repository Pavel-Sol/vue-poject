<template>
  <div class="app">
    <h1>Страница с постами</h1>

    <MyButton @click="showDialog">создать пост</MyButton>

    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>

    <PostList :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      posts: [
        { id: 1, title: 'javascript', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { id: 2, title: 'HTML', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { id: 3, title: 'CSS', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      ],

      dialogVisible: false,
    };
  },
  methods: {
    createPost(newPost) {
      this.posts.push(newPost);
      this.dialogVisible = false;
    },

    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },

    showDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.app {
  padding: 30px;
}

button {
  cursor: pointer;
}
</style>
