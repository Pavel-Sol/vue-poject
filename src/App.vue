<template>
  <div class="app">
    <h1>Страница с постами</h1>

    <MyInput v-model="searchQuery" placeholder="Поиск" />

    <div class="app__btns">
      <MyButton @click="showDialog">создать пост</MyButton>

      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>

    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>

    <PostList :posts="searchedAndSortedPosts" @remove="removePost" v-if="!isPostsLoading" />

    <p v-else>Идет загрузка...</p>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from 'axios';

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      posts: [],

      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        { value: 'title', name: 'По название' },
        { value: 'body', name: 'По описанию' },
      ],
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

    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
      } catch (error) {
        alert('ошибка');
      } finally {
        this.isPostsLoading = false;
      }
    },
  },

  mounted() {
    this.fetchPosts();
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
      });
    },

    searchedAndSortedPosts() {
      return this.sortedPosts.filter((p) => p.title.includes(this.searchQuery));
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

.app__btns {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}

button {
  cursor: pointer;
}
</style>
