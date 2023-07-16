<template>
  <div class="app">
    <PostForm @create="createPost" />
    <PostList :posts="posts" />
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
    };
  },
  methods: {
    createPost(newPost) {
      this.posts.push(newPost);
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
</style>
