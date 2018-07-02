<template>
  <div>
    <NewCategory
      v-model="NewCategoryList"
      placeholder="Nouvelle Catégorie"
      @keydown.enter="addCategory"
      />
      <ul v-if="category.length">
        <CategoryListItem
        v-for="category in categories"
        :key="category.id"
        :todo="category"
        @remove="removeCategory"
        />
      </ul>
      <p v-else>
        Aucune Catégorie restantes
      </p>
  </div>
</template>

<script>
import NewCategory from './NewCategory.vue'
import CategoryListItem from './CategoryListItem.vue'

let nextCategoryId = 1

export default {
  components: {
    NewCategory, CategoryListItem
  },
  data () {
    return {
      NewCategoryText:'',
      categories: [
        {
          id: nextCategoryId++,
          text: 'FootBall'
        },
        {
          id: nextCategoryId++,
          text: 'Basket'
        },
        {
          id: nextCategoryId++,
          text: 'Paddle'
        }
      ]
    }
  },
  methods: {
    addCategory () {
      const trimedText = this.NewCategoryText.trim()
      if (trimedText) {
        this.categories.push({
          id: nextCategoryId++,
          text: trimedText
        })
        this.NewCategoryText = ''
      }
    },
    removeCategory (idToRemove) {
      this.categories = this.categories.filter(category => {
        return category.id !== idToRemove
      })
    }
  }
}
</script>
