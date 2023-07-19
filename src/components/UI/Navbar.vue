<template>
  <div class="navbar">
    <h2>VUE 3</h2>

    <div class="navbar__btns">
      <MyButton @click="$router.push('/about')">Оприложении</MyButton>
      <MyButton @click="$router.push('/posts')">Посты</MyButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navbar {
  height: 50px;
  background-color: rgba(65, 195, 235, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.navbar__btns {
  display: flex;
  gap: 10px;
}
</style>
