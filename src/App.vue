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

    <PostList
      :posts="searchedAndSortedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />

    <p v-else>Идет загрузка...</p>

    <div class="pagination">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="changePage(pageNumber)"
        class="pagination__item"
        :class="{
          pagination__item__current: pageNumber === page,
        }"
      >
        {{ pageNumber }}
      </div>
    </div>
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

    changePage(pageNumber) {
      this.page = pageNumber;
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
      return this.sortedPosts.filter((p) => p.title.includes(this.searchQuery));
    },
  },

  watch: {
    page() {
      this.fetchPosts();
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

.pagination {
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: 20px;
}

.pagination__item {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid teal;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.pagination__item__current {
  background-color: teal;
}

button {
  cursor: pointer;
}
</style>
