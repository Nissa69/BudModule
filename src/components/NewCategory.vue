<template>
  <input
    type="text"
    class="input"
    value="value"
    v-on="listeners"
    >
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      defaults:'',
    }
  },
  computed: {
    listeners () {
      return {
        // Pass all component listeners directly to imput
        ...this.$listeners,
        // Override input listner to work with v-model
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style lang="css">
.input {
  width: 100%;
  padding: 8px 10px;
  border: 1ox solid $vue-blue;
}
</style>
