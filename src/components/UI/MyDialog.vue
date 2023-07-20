<template>
  <div v-if="show" class="overlay" @click="hideDialog">
    <div @click.stop class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "MyDialog",
  mixins: [toggleMixin],
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  background-color: aliceblue;
  padding: 15px;
  border-radius: 10px;
  min-height: 50px;
  max-width: 300px;
}
</style>
