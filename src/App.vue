<template>
  <div id="app">
    <h1>Catégories</h1>
    <NewCategory />
    <CategoryList />
  </div>
</template>

<script>
import CategoryList from './components/CategoryList.vue'

export default {
  components: {
    CategoryList
  }
}

</script>

<style>

*,*::before, *::after {
  box-sizing: border-box;
}

#app {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: greyscale;
  color: $vue-blue;
}

h1 {
  text-align: center;
}
</style>
