<template>
  <li>
    {{ category.text }}
    <button @click="$emit('remove', category.id)">
      Supprimer
    </button>
  </li>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>
