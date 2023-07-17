<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: 'MyInput',

  props: {
    modelValue: [String, Number],
  },

  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
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
