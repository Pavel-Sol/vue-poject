<template>
  <div>
    <h1>Страница с постами</h1>

    <MyInput v-model="searchQuery" placeholder="Поиск" />

    <div class="btns">
      <MyButton @click="showDialog">создать пост</MyButton>

      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>

    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>

    <PostList
      :posts="searchedAndSortedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />

    <p v-else>Идет загрузка...</p>

    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";

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
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "По название" },
        { value: "body", name: "По описанию" },
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
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );

        this.posts = response.data;
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
      } catch (error) {
        alert("ошибка");
      } finally {
        this.isPostsLoading = false;
      }
    },

    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );

        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        alert("ошибка");
      }
    },
  },

  mounted() {
    this.fetchPosts();
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },

    searchedAndSortedPosts() {
      return this.sortedPosts.filter((p) =>
        p.title?.includes(this.searchQuery)
      );
    },
  },

  watch: {},
};
</script>

<style scoped>
.btns {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}

button {
  cursor: pointer;
}

.observer {
  height: 15px;
  background-color: blue;
}
</style>
