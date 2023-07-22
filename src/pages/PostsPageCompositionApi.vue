<template>
  <div>
    <h1>Страница с постами</h1>

    <MyInput v-model="searchQuery" placeholder="Поиск" />

    <div class="btns">
      <MyButton @click="showDialog">создать пост</MyButton>

      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>

    <MyDialog v-model:show="dialogVisible">
      <PostForm />
    </MyDialog>

    <PostList :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />

    <p v-else>Идет загрузка...</p>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "По название" },
        { value: "body", name: "По описанию" },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
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
