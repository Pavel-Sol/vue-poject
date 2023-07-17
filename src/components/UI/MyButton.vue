<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
};
</script>

<style scoped>
.button {
  background-color: transparent;
  border: 1px solid teal;
  padding: 10px 15px;
}
</style>
